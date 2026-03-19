/**
 * TE Prototype - Mock Digital Assistant
 * Predefined conversation flow with canned responses.
 * Tracks page context and conversation state for contextual recommendations.
 */

(function() {
  'use strict';

  const imgBase = (function() {
    const path = window.location.pathname || '';
    return (path.includes('/products/') || path.includes('/industries/')) ? '../' : '';
  })();

  function formatMessageTime(date) {
    const d = date || new Date();
    const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
    const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    return weekday + ' ' + time;
  }

  function ensureDateSeparator(container, date, insertBeforeEl) {
    const dateStr = (date || new Date()).toDateString();
    const existing = container.querySelector('.date-separator[data-date="' + dateStr + '"]');
    if (existing) return;
    const sep = document.createElement('div');
    sep.className = 'date-separator';
    sep.dataset.date = dateStr;
    sep.textContent = dateStr === new Date().toDateString() ? 'Today' : (date || new Date()).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    if (insertBeforeEl) {
      container.insertBefore(sep, insertBeforeEl);
    } else {
      container.appendChild(sep);
    }
  }

  const ChatAgent = {
    state: {
      step: 'greeting',
      pageContext: '',
      mentionedProducts: [],
      askedForSpecs: false,
      askedForCall: false,
      saidMaybeLater: false,
      providedEmail: false
    },

    init: function() {
      this.detectPageContext();
      this.bindEvents();
      this.restoreState();
    },

    detectPageContext: function() {
      const path = window.location.pathname || window.location.hash;
      if (path.includes('aerospace')) {
        this.state.pageContext = 'aerospace';
      } else if (path.includes('e-mobility') || path.includes('industries')) {
        this.state.pageContext = 'e-mobility';
      } else if (path.includes('products')) {
        this.state.pageContext = 'product-page';
        this.state.currentProduct = this.getProductFromPage();
      } else {
        this.state.pageContext = 'home';
      }
    },

    getProductFromPage: function() {
      const dataId = document.body && document.body.dataset.productId;
      if (dataId) return dataId;
      const path = window.location.pathname;
      const match = path.match(/products\/([^/]+)\.html/);
      if (match) {
        const slug = match[1];
        const product = TE_DATA.products.find(p => p.url && p.url.includes(slug));
        return product ? product.id : null;
      }
      return null;
    },

    bindEvents: function() {
      const self = this;
      const toggle = document.getElementById('chatToggle');
      const close = document.getElementById('chatClose');
      const input = document.getElementById('chatInput');

      if (toggle) toggle.addEventListener('click', () => this.togglePanel());
      if (close) close.addEventListener('click', () => this.closePanel());
      if (input) input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendUserMessage();
      });

      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-reply-btn')) {
          const text = e.target.dataset.text || e.target.textContent;
          self.addUserMessage(text);
          self.processResponse(text);
        }
      });
    },

    togglePanel: function() {
      const panel = document.getElementById('chatPanel');
      if (panel.classList.contains('open')) {
        this.closePanel();
      } else {
        panel.classList.add('open');
        if (this.getMessages().length === 0) {
          const self = this;
          requestAnimationFrame(function() {
            self.showGreeting();
          });
        }
      }
    },

    closePanel: function() {
      document.getElementById('chatPanel').classList.remove('open');
      this.saveState();
    },

    getMessages: function() {
      const container = document.getElementById('chatMessages');
      return container ? container.querySelectorAll('.message') : [];
    },

    addMessage: function(text, isUser, options = {}) {
      const container = document.getElementById('chatMessages');
      if (!container) return;

      const msg = document.createElement('div');
      msg.className = 'message ' + (isUser ? 'user' : 'agent');

      let bubbleContent = text;
      if (options.recommendations) {
        bubbleContent += this.renderRecommendations(options.recommendations);
      }
      if (options.specs) {
        bubbleContent += this.renderSpecs(options.specs);
      }
      if (options.quickReplies) {
        bubbleContent += this.renderQuickReplies(options.quickReplies);
      }

      const now = new Date();
      const avatarHtml = isUser ? '' : `<div class="message-avatar"><img src="${imgBase}images/te-agent-icon.png" alt=""></div>`;
      msg.innerHTML = `
        ${avatarHtml}
        <div class="message-content">
          <div class="message-bubble">${bubbleContent}</div>
          <div class="message-time">${formatMessageTime(now)}</div>
        </div>
      `;
      ensureDateSeparator(container, now, msg);
      container.appendChild(msg);
      container.scrollTop = container.scrollHeight;
    },

    showTypingIndicator: function() {
      const container = document.getElementById('chatMessages');
      if (!container) return;
      const typing = document.createElement('div');
      typing.className = 'message agent typing';
      typing.id = 'typingIndicator';
      typing.innerHTML = `
        <div class="message-avatar"><img src="${imgBase}images/te-agent-icon.png" alt=""></div>
        <div class="message-content">
          <div class="message-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>
        </div>
      `;
      container.appendChild(typing);
      container.scrollTop = container.scrollHeight;
    },

    removeTypingIndicator: function() {
      const el = document.getElementById('typingIndicator');
      if (el) el.remove();
    },

    addMessageWithTyping: function(text, options = {}, thinkMs = 800, charsPerMs = 30) {
      const self = this;
      const container = document.getElementById('chatMessages');
      if (!container) return new Promise(function(r) { r(); });

      const htmlSuffix = (options.recommendations ? self.renderRecommendations(options.recommendations) : '') +
        (options.specs ? self.renderSpecs(options.specs) : '') +
        (options.quickReplies ? self.renderQuickReplies(options.quickReplies) : '');

      return new Promise(function(resolve) {
        self.showTypingIndicator();
        setTimeout(function() {
          self.removeTypingIndicator();
          const msg = document.createElement('div');
          msg.className = 'message agent';
          msg.innerHTML = `
            <div class="message-avatar"><img src="${imgBase}images/te-agent-icon.png" alt=""></div>
            <div class="message-content">
              <div class="message-bubble"></div>
              <div class="message-time"></div>
            </div>
          `;
          container.appendChild(msg);
          const bubble = msg.querySelector('.message-bubble');
          const timeEl = msg.querySelector('.message-time');
          let i = 0;
          const typeNext = function() {
            if (i >= text.length) {
              bubble.innerHTML = text + htmlSuffix;
              const now = new Date();
              ensureDateSeparator(container, now, msg);
              timeEl.textContent = formatMessageTime(now);
              container.scrollTop = container.scrollHeight;
              resolve();
              return;
            }
            bubble.textContent = text.slice(0, i + 1);
            i++;
            container.scrollTop = container.scrollHeight;
            setTimeout(typeNext, charsPerMs);
          };
          setTimeout(typeNext, 50);
        }, thinkMs);
      });
    },

    renderRecommendations: function(items) {
      let html = '';
      items.forEach(item => {
        const type = item.type || 'Product';
        const url = item.url || '#';
        html += `<div class="recommendation-card"><span class="type">${type}</span><a href="${url}">${item.title}</a>${item.description ? '<p>' + item.description + '</p>' : ''}</div>`;
      });
      return html;
    },

    renderSpecs: function(specs) {
      let rows = '';
      for (const [key, val] of Object.entries(specs)) {
        rows += `<tr><td>${key}</td><td>${val}</td></tr>`;
      }
      return `<table class="specs-table"><tbody>${rows}</tbody></table>`;
    },

    renderQuickReplies: function(replies) {
      let html = '<div class="quick-replies">';
      replies.forEach(r => {
        const text = typeof r === 'string' ? r : r.text;
        html += `<button class="quick-reply-btn" data-text="${text.replace(/"/g, '&quot;')}">${text}</button>`;
      });
      html += '</div>';
      return html;
    },

    addUserMessage: function(text) {
      this.addMessage(text, true);
      document.getElementById('chatInput').value = '';
    },

    showGreeting: function() {
      const isProductPage = this.state.pageContext === 'product-page';
      const isAerospace = this.state.pageContext === 'aerospace';
      let greeting = "Hi! I'm your TE V.A., your TE Virtual Assistant. I can help match your needs to one of our TE Solutions, show you product specifications, or connect you with a sales rep. Ask me anything. How can I help you today?";
      let examples = [
        "What EV connectors do you recommend?",
        "I need help with battery connectivity",
        "Show me products for e-mobility"
      ];

      if (isProductPage) {
        greeting = "Hi! I'm your TE V.A., your TE Virtual Assistant. I see you're looking at our products. I can provide more specific recommendations based on your needs. What would you like to know?";
        examples = ["Show me the specs", "Compare with other products", "Schedule a call with sales"];
      } else if (isAerospace) {
        examples = ["Aerospace connector solutions", "High-speed interconnect for aircraft", "Connect with an aerospace expert"];
      }

      this.addMessageWithTyping(greeting, { quickReplies: examples }, 600, 25);
      this.state.step = 'awaiting_question';
    },

    processResponse: function(text) {
      const t = text.toLowerCase().trim();

      // Maybe later / not ready
      if (t.includes('maybe later') || t.includes('not ready') || t.includes('not now')) {
        this.state.saidMaybeLater = true;
        this.state.askedForCall = true;
        this.addMessageWithTyping("No problem! Would you like me to follow up with more information via email? Just share your email address and we'll send you relevant product details and resources.", {
          quickReplies: ['Yes, here\'s my email', 'No thanks']
        });
        this.state.step = 'awaiting_email';
        return;
      }

      // Email provided
      if (this.state.step === 'awaiting_email' && (t.includes('@') || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(t))) {
        const email = t.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
        if (email) {
          this.state.providedEmail = true;
          this.state.email = email[0];
          this.addMessageWithTyping(`Thank you! We've noted your email (${email[0]}). Our team will follow up with product information and our SDR will reach out to discuss your needs. You'll also receive relevant content as part of our nurture campaign. Is there anything else I can help with?`, {
            quickReplies: ['No, that\'s all', 'Yes, I have more questions']
          });
          this.state.step = 'complete';
        }
        return;
      }

      // Show me specs
      if (t.includes('spec') || t.includes('specs') || t.includes('specification')) {
        this.state.askedForSpecs = true;
        const product = this.getProductForSpecs();
        if (product) {
          this.addMessageWithTyping(`Here are the specifications for ${product.name}:`, { specs: product.specs });
          this.addMessageWithTyping("Would you like to schedule a call with a sales representative to discuss your specific requirements?", {
            quickReplies: ['Yes, schedule a call', 'Maybe later', 'Send me more info via email']
          });
          this.state.step = 'awaiting_call_decision';
        } else {
          this.addMessageWithTyping("Which product would you like to see specs for? Try visiting a product page or ask about DEUTSCH DT Connectors or HIVONEX High-Voltage Connectors.");
        }
        return;
      }

      // Schedule call - yes
      if ((t.includes('schedule') || t.includes('yes') || t.includes('call')) && !t.includes('maybe')) {
        this.addMessageWithTyping("Great! I'll connect you with a sales representative. Please provide your email and we'll send a calendar link to schedule a call at your convenience.", {
          quickReplies: ['Maybe later']
        });
        this.state.step = 'awaiting_email';
        return;
      }

      // EV connectors / products question
      if (t.includes('ev connector') || t.includes('electric vehicle') || t.includes('e-mobility') || t.includes('recommend')) {
        const products = TE_DATA.products.filter(p => p.industry.includes('e-mobility'));
        const content = TE_DATA.content.filter(c => c.industry.includes('e-mobility'));
        this.addMessageWithTyping("Based on your interest in e-mobility, here are some products and resources I recommend:", {
          recommendations: [
            { type: 'Product', title: products[0].name, description: products[0].description, url: products[0].url },
            { type: 'Product', title: products[1].name, description: products[1].description, url: products[1].url },
            { type: 'Whitepaper', title: content[0].title, description: content[0].description, url: content[0].url }
          ],
          quickReplies: ['Tell me more about DEUTSCH DT', 'Show me the specs', 'Schedule a call with sales']
        });
        this.state.step = 'awaiting_followup';
        this.state.mentionedProducts = ['deutsch_dt', 'hivonex'];
        return;
      }

      // Specific product question
      if (t.includes('deutsch') || t.includes('dt connector')) {
        const p = TE_DATA.products.find(x => x.id === 'deutsch-dt');
        this.addMessageWithTyping(`${p.name}: ${p.description}`, {
          recommendations: [{ type: 'Product', title: p.name, url: p.url }],
          quickReplies: ['Show me the specs', 'Compare with HIVONEX', 'Schedule a call']
        });
        this.state.mentionedProducts.push('deutsch_dt');
        return;
      }

      if (t.includes('hivonex') || t.includes('high-voltage')) {
        const p = TE_DATA.products.find(x => x.id === 'hivonex');
        this.addMessageWithTyping(`${p.name}: ${p.description}`, {
          recommendations: [{ type: 'Product', title: p.name, url: p.url }],
          quickReplies: ['Show me the specs', 'Schedule a call']
        });
        this.state.mentionedProducts.push('hivonex');
        return;
      }

      // Product page context - more specific
      if (this.state.pageContext === 'product-page' && this.state.currentProduct) {
        const pid = this.state.currentProduct.replace(/_/g, '-');
        const p = TE_DATA.products.find(x => x.id === pid);
        if (p) {
          this.addMessageWithTyping(`For ${p.name}, I'd recommend:`, {
            recommendations: [
              { type: 'Whitepaper', title: TE_DATA.content[0].title, url: '#' },
              { type: 'Article', title: TE_DATA.content[2].title, url: '#' }
            ],
            quickReplies: ['Show me the specs', 'What do I need next?', 'Schedule a call']
          });
          return;
        }
      }

      // What do I need next
      if (t.includes('need next') || t.includes('what next')) {
        this.addMessageWithTyping("Based on our conversation, here's what I suggest:", {
          recommendations: [
            { type: 'Product', title: 'HIVONEX High-Voltage Connectors', description: 'For battery and charging applications', url: 'products/hivonex-connectors.html' },
            { type: 'Whitepaper', title: 'Battery Connectivity, Management and Protection', url: '#' }
          ],
          quickReplies: ['Show me the specs', 'Schedule a call with sales', 'Maybe later']
        });
        this.addMessageWithTyping("What would you like to do next?", {
          quickReplies: ['Show me the specs', 'Schedule a call', 'Maybe later']
        });
        return;
      }

      // Default
      this.addMessageWithTyping("I can help you with EV connectors, product recommendations, specifications, and connecting you with our sales team. What would you like to know?", {
        quickReplies: ['EV connector recommendations', 'Show me product specs', 'Schedule a call']
      });
    },

    getProductForSpecs: function() {
      if (this.state.currentProduct) {
        const pid = this.state.currentProduct.replace(/_/g, '-');
        return TE_DATA.products.find(p => p.id === pid);
      }
      if (this.state.mentionedProducts && this.state.mentionedProducts.length) {
        const first = this.state.mentionedProducts[0].replace(/_/g, '-');
        return TE_DATA.products.find(p => p.id === first);
      }
      return TE_DATA.products.find(p => p.industry.includes('e-mobility'));
    },

    sendUserMessage: function() {
      const input = document.getElementById('chatInput');
      const text = (input && input.value || '').trim();
      if (!text) return;
      this.addUserMessage(text);
      this.processResponse(text);
    },

    saveState: function() {
      try {
        const data = {
          step: this.state.step,
          pageContext: this.state.pageContext,
          mentionedProducts: this.state.mentionedProducts || [],
          messages: []
        };
        const msgs = document.querySelectorAll('#chatMessages .message');
        msgs.forEach(m => {
          const bubble = m.querySelector('.message-bubble');
          const isUser = m.classList.contains('user');
          if (bubble) data.messages.push({ text: bubble.textContent.trim().slice(0, 500), isUser });
        });
        sessionStorage.setItem('te_chat_state', JSON.stringify(data));
      } catch (e) {}
    },

    restoreState: function() {
      try {
        const saved = sessionStorage.getItem('te_chat_state');
        if (!saved) return;
        const data = JSON.parse(saved);
        this.state.step = data.step || this.state.step;
        this.state.mentionedProducts = data.mentionedProducts || [];
        (data.messages || []).forEach(m => {
          this.addMessage(m.text, m.isUser);
        });
        // On product page with prior conversation: add contextual intro
        if (this.state.pageContext === 'product-page' && this.state.currentProduct && data.messages.length > 0) {
          const shown = sessionStorage.getItem('te_product_page_intro');
          if (!shown) {
            const product = this.getProductForSpecs();
            if (product) {
              this.addMessage(`I see you're looking at ${product.name}. Based on our conversation, here are more specific recommendations:`, false, {
                recommendations: [
                  { type: 'Whitepaper', title: TE_DATA.content[0].title, url: '#' },
                  { type: 'Article', title: TE_DATA.content[2].title, url: '#' }
                ],
                quickReplies: ['Show me the specs', 'What do I need next?', 'Schedule a call with sales']
              });
              sessionStorage.setItem('te_product_page_intro', '1');
            }
          }
        }
      } catch (e) {}
    }
  };

  window.TEChatAgent = ChatAgent;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ChatAgent.init());
  } else {
    ChatAgent.init();
  }
})();
