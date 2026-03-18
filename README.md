# TE Connectivity Website Prototype

A high-fidelity prototype of the TE.com website with an integrated digital assistant for product and content recommendations.

## Features

- **Home page** – Mirrors TE.com structure with real copy
- **E-mobility industry page** – EV connectivity solutions
- **Product pages** – DEUTSCH DT, HIVONEX, M12 connectors, sensors, and more
- **Digital assistant** – Mock chat agent with predefined conversation flows
  - Product recommendations by industry (e-mobility, automotive, etc.)
  - Content recommendations (whitepapers, articles, webinars)
  - Context-aware responses based on pages visited
  - Demo flow: EV connectors → specs → schedule call → email capture → SDR handoff

## Demo Flow

1. Visit **E-mobility** page → browse products
2. Open chat agent → greeted with examples
3. Ask "What EV connectors do you recommend?" → products + whitepaper
4. Ask about specific products (e.g., DEUTSCH DT)
5. Navigate to a **product page** → chat continues with more specific recommendations
6. Ask "What do I need next?" → agent suggests next steps
7. Ask "Show me the specs" → agent displays product specifications
8. Agent offers to schedule call → click "Maybe Later"
9. Agent asks for email → provide email
10. Agent confirms handoff to SDR and nurture campaign

## Tech Stack

- Plain HTML, CSS, JavaScript
- Node.js static file server (for Heroku)
- No backend, no API keys – fully self-contained

## Local Development

```bash
cd te-prototype
npm start
```

Open http://localhost:3000

## Deploy to Heroku

1. Create a new GitHub repository and push this project
2. Create a Heroku app and connect the GitHub repo
3. Deploy:

```bash
heroku create your-app-name
git push heroku main
```

Or connect via Heroku Dashboard: New App → Connect to GitHub → Deploy.

## Project Structure

```
te-prototype/
├── index.html              # Home page
├── industries/
│   └── e-mobility.html     # E-mobility industry page
├── products/               # Product pages
├── css/styles.css
├── js/
│   ├── data.js             # Product catalog, content, sample data
│   └── chat-agent.js       # Mock conversation engine
├── images/
├── server.js               # Static file server
├── package.json
├── Procfile
└── README.md
```

## Brand Colors

- TE Blue: `#2E4957`
- Grey: `#666666`
- Orange: `#E98300`
