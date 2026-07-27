/**
 * Content for the six demo vignettes. Each renders as three scenes:
 * Lead-In (TellBefore) → Live Demo Handoff (DemoPlaceholder) → Recap (TellAfter).
 * Copy adapted from the "Precision at the Edge" outline, full story, and demo story.
 */
export const VIGNETTES = [
  {
    id: 'v1',
    number: 1,
    section: 'The Intelligent Entry',
    products: 'TE Agent + Adobe WCMS Personalization',
    leadIn: {
      lines: [
        'Lauren lands on te.com. She hasn\u2019t logged in. She hasn\u2019t filled out a form. She\u2019s anonymous.',
        'But the platform has already been paying attention — the industry page she navigated to, the language she used in search, the content she lingered on.',
        'Most websites show Lauren the same homepage they show everyone else. Watch what this one does instead.',
      ],
      cliffhanger: 'What does TE Agent already know — and how?',
    },
    handoff: {
      title: 'TE Agent + te.com Personalization',
      description:
        'Lauren lands. The platform responds — a context-aware guide, and a page that adapts in real time to her aerospace signals.',
    },
    recap: {
      lines: [
        'Under 2 minutes. One specific answer to one specific problem.',
        'TE Agent recognized Lauren\u2019s aerospace context before she identified herself — and asked the engineering qualification questions, not a generic chatbot greeting.',
        'She got a technically precise recommendation — STRADA Whisper, 100 Ohm variant — with the why behind it, then downloaded the datasheet and VITA-72 test report. No form. No rep.',
      ],
      shift: [
        { from: 'Anonymous visitors lost forever', to: 'Every visitor recognized — before they identify themselves' },
        { from: 'Generic catalog pages', to: 'A surface that adapts in real time' },
        { from: 'SDR cold outreach', to: 'An AI-qualified, technically precise hand-raise' },
      ],
      transition: 'But while Lauren was browsing, the platform was quietly building something\u2026',
    },
  },
  {
    id: 'v2',
    number: 2,
    section: 'Identity Resolution & Unified Profile',
    products: 'Salesforce Data 360',
    leadIn: {
      lines: [
        'Lauren clicked away. She said \u201Cmaybe later.\u201D In most organizations, that\u2019s the end of the story.',
        'But while she was browsing, Data 360 was stitching her anonymous session to her identity, enriching her profile with firmographic data, and scoring her intent in real time.',
        'Watch what that profile actually looks like.',
      ],
      cliffhanger: '88 out of 100 — and she never even filled out a form.',
    },
    handoff: {
      title: 'Data 360 — Unified Profile',
      description:
        'The platform knows who Lauren is. An anonymous session, stitched to a known identity — here\u2019s the proof.',
    },
    recap: {
      lines: [
        'The foundation everything else is built on.',
        'Her anonymous session was stitched to a known identity the moment she entered her email — then enriched automatically: Omega Aerospace \u2192 Tier-1 Account.',
        'Behavioral scoring landed her at 88/100, and the full buying group surfaced: Lauren as Technical Evaluator, plus procurement and the program manager.',
      ],
      shift: [
        { from: 'Fragmented profiles across BU systems', to: 'One enriched, unified profile — assembled automatically' },
        { from: 'Manual lead research', to: 'Real-time enrichment and intent scoring' },
        { from: 'One contact per account', to: 'Full buying group visibility' },
      ],
      transition: 'Now that the platform knows her — watch what it decides to do next.',
    },
  },
  {
    id: 'v3',
    number: 3,
    section: 'Journey Orchestration & Next-Best Action',
    products: 'Journey Builder + Einstein AI',
    leadIn: {
      lines: [
        'Lauren said \u201Cmaybe later\u201D to the SDR call. For a lot of platforms, that triggers a generic drip sequence — and Lauren slowly forgets about TE.',
        'Elena built something smarter. Einstein looked at every Systems Architect persona in the database and identified exactly what Lauren needs to see next to move forward.',
        'It\u2019s not what you\u2019d expect.',
      ],
      cliffhanger: 'The next-best action isn\u2019t a sales email.',
    },
    handoff: {
      title: 'Journey Builder + Suggest Next-Best Action',
      description:
        'The \u201Cmaybe later\u201D branch. Watch the journey learn instead of just run.',
    },
    recap: {
      lines: [
        'A campaign that runs vs. a journey that learns.',
        'Lauren\u2019s TE Agent engagement triggered the journey; the \u201Cmaybe later\u201D branch routed her into a Technical Nurture path.',
        'Einstein\u2019s next-best action: the VITA-72 Test Report — technical proof, not a product pitch — sent by email, then LinkedIn if unopened in 48 hours, timed by Send-Time Optimization.',
      ],
      shift: [
        { from: 'Batch campaigns on a fixed schedule', to: 'Real-time journeys that adapt to every signal' },
        { from: 'Generic drip sequences', to: 'Einstein next-best action, persona-matched' },
        { from: 'Single-channel email', to: 'Email + LinkedIn, sequenced intelligently' },
      ],
      transition: 'And the moment Lauren shows buying intent — someone on the sales team needs to know.',
    },
  },
  {
    id: 'v4',
    number: 4,
    section: 'The Sales Handoff',
    products: 'Sales Cloud + CRM Integration',
    leadIn: {
      lines: [
        'James is TE\u2019s Solution Consultant on the Omega Aerospace account. He checks Salesforce every morning.',
        'Until today, the most he ever got from marketing was a bi-weekly lead list — a name and a company. This morning is different.',
        'Look at what\u2019s waiting for him.',
      ],
      cliffhanger: 'He has the whole picture — and Lauren hasn\u2019t talked to sales yet.',
    },
    handoff: {
      title: 'Sales Cloud — James\u2019s View',
      description:
        'Marketing\u2019s work becomes sales momentum — an alert, a full engagement summary, and a suggested first message.',
    },
    recap: {
      lines: [
        'Marketing\u2019s output, connected to revenue.',
        'An automated alert fired on Omega Aerospace — \u201CTier-1 prospect engaged, high intent\u201D — with Lauren\u2019s full engagement summary and 88/100 intent score.',
        'Einstein suggested a first message referencing the VITA-72 discussion and the engineer call she declined, with the full buying group — Lauren, Marcus Webb, Diana Cho — mapped to the opportunity.',
      ],
      shift: [
        { from: 'Bi-weekly lead list: a name + a company', to: 'A complete engagement summary + suggested outreach' },
        { from: 'Sales flying blind', to: 'Proactive, context-rich alerts at the right moment' },
        { from: 'Marketing and sales in silos', to: 'A seamless handoff — the journey becomes the starting point' },
      ],
      transition: 'But how did the site know to show Lauren all of this? Let\u2019s pull back the curtain.',
    },
  },
  {
    id: 'v5',
    number: 5,
    section: 'Real-Time Personalization',
    products: 'Data 360 + Adobe WCMS + Agentforce Marketing',
    leadIn: {
      lines: [
        'We showed you Lauren\u2019s experience at the start. But the page she saw wasn\u2019t the same page an automotive engineer would have seen. Or a first-time visitor with no history.',
        'Data 360 was feeding real-time signals to Adobe WCMS — and the site was adapting, dynamically, to Lauren\u2019s context.',
        'Let\u2019s show that side-by-side.',
      ],
      cliffhanger: 'Same URL. Completely different experience.',
    },
    handoff: {
      title: 'Salesforce Personalization',
      description:
        'Two visitors. One URL. Watch the difference — hero, featured products, and resources adapt in real time.',
    },
    recap: {
      lines: [
        'Personalization at the scale TE actually needs.',
        'Same URL, two experiences: a generic visitor vs. Lauren\u2019s aerospace profile — with STRADA Whisper and ruggedized content surfaced for her automatically.',
        'The follow-up email carried the same intelligence: a personalized product image, her specific specs (100 Ohm, VITA-72), and a CTA tied to the call she declined.',
      ],
      shift: [
        { from: 'Static pages for a 200,000-part catalog', to: 'Real-time surfaces adapted to every visitor' },
        { from: 'Generic email blasts', to: 'Dynamic content blocks populated from CDP data' },
        { from: 'One experience for everyone', to: 'Infinite personalization at scale' },
      ],
      transition: 'And every piece of this was built and run by one marketer. Let\u2019s see her cockpit.',
    },
  },
  {
    id: 'v6',
    number: 6,
    section: 'Elena\u2019s Command Center',
    products: 'Campaign Manager + Agentforce + Analytics',
    leadIn: {
      lines: [
        'Everything you\u2019ve seen — TE Agent, the journey, the personalization, the sales handoff — was built and managed by Elena.',
        'Before we leave her world, let\u2019s look at how she built it. It is not complicated: Einstein does the heavy lifting, and Elena directs the strategy.',
        'One sentence. One morning. An entire campaign.',
      ],
      cliffhanger: 'Einstein wrote the first draft of everything.',
    },
    handoff: {
      title: 'Campaign Manager + Agentforce + Analytics',
      description:
        'Elena\u2019s cockpit — from a one-sentence brief to attributed pipeline.',
    },
    // Recap for v6 is a custom dashboard slide (V6_Recap.jsx).
  },
]
