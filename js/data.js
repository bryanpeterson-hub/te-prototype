/**
 * TE Prototype - Sample product catalog, content, and conversation flow data
 */

const TE_DATA = {
  products: [
    {
      id: 'deutsch-dt',
      name: 'DEUTSCH DT Connectors',
      category: 'connectors',
      industry: ['automotive', 'e-mobility'],
      description: 'Heavy-duty sealed connectors for harsh automotive environments. Ideal for EV battery and charging applications.',
      specs: {
        'Voltage Rating': '600V',
        'Current Rating': '13A',
        'IP Rating': 'IP67',
        'Temperature Range': '-40°C to +125°C',
        'Contact Material': 'Copper alloy'
      },
      url: 'products/deutsch-dt-connectors.html'
    },
    {
      id: 'hivonex',
      name: 'HIVONEX High-Voltage Connectors',
      category: 'connectors',
      industry: ['e-mobility', 'automotive'],
      description: 'High-voltage interconnection systems for EV e-drive, battery, and charging applications.',
      specs: {
        'Voltage Rating': '900V',
        'Current Rating': '250A',
        'IP Rating': 'IP6K9K',
        'Temperature Range': '-40°C to +150°C',
        'Applications': 'Battery, E-drive, Charging'
      },
      url: 'products/hivonex-connectors.html'
    },
    {
      id: 'ampmodu',
      name: 'AMPMODU Connectors',
      category: 'connectors',
      industry: ['industrial', 'data-center'],
      description: 'Board-to-board and wire-to-board connectors for industrial and data center applications.',
      specs: {
        'Pitch': '2.54mm',
        'Current Rating': '3A',
        'Voltage Rating': '250V',
        'Temperature Range': '-55°C to +105°C'
      },
      url: 'products/ampmodu-connectors.html'
    },
    {
      id: 'm12',
      name: 'M12 Connectors',
      category: 'connectors',
      industry: ['industrial', 'automotive'],
      description: 'Circular connectors for industrial automation, sensors, and EV auxiliary systems.',
      specs: {
        'IP Rating': 'IP67',
        'Contacts': '4, 5, 8, 12',
        'Voltage Rating': '60V',
        'Temperature Range': '-40°C to +85°C'
      },
      url: 'products/m12-connectors.html'
    },
    {
      id: 'pressure-sensor',
      name: 'Pressure Sensors for EV',
      category: 'sensors',
      industry: ['e-mobility', 'automotive'],
      description: 'High-accuracy pressure sensors for battery thermal management and brake systems.',
      specs: {
        'Pressure Range': '0-10 bar',
        'Accuracy': '±1%',
        'Output': 'Analog / Digital',
        'Temperature Range': '-40°C to +125°C'
      },
      url: 'products/pressure-sensors-ev.html'
    },
    {
      id: 'temperature-sensor',
      name: 'Temperature Sensors',
      category: 'sensors',
      industry: ['e-mobility', 'data-center'],
      description: 'NTC and PTC temperature sensors for battery monitoring and thermal management.',
      specs: {
        'Range': '-40°C to +150°C',
        'Accuracy': '±0.5°C',
        'Response Time': '< 10s'
      },
      url: 'products/temperature-sensors.html'
    },
    {
      id: 'strada-whisper',
      name: 'STRADA Whisper High Speed Backplane Connectors',
      category: 'connectors',
      industry: ['data-center', 'industrial'],
      description: 'Scalable backplane solutions to 112 Gbps PAM-4. High-performing, high-bandwidth connectors with low noise and minimal skew.',
      specs: {
        'Data Rate': 'Up to 112 Gbps PAM-4',
        'Architecture': 'Backwards compatible 56G to 112G',
        'Design': 'Folded signal pins, C-shaped shields, EON technology'
      },
      url: 'products/strada-whisper.html'
    }
  ],

  content: [
    {
      id: 'ev-connectors-wp',
      type: 'whitepaper',
      title: 'High-Voltage Connectors for Electric Vehicles: Design Considerations',
      description: 'Learn how to select and design high-voltage connectors for EV battery and e-drive systems.',
      industry: ['e-mobility'],
      url: '#',
      tags: ['connectors', 'EV', 'battery']
    },
    {
      id: 'battery-connectivity',
      type: 'whitepaper',
      title: 'Battery Connectivity, Management and Protection',
      description: 'Understand the demands on an EV\'s battery pack and how electrical connections facilitate peak energy transfer.',
      industry: ['e-mobility'],
      url: '#',
      tags: ['battery', 'EV']
    },
    {
      id: 'ev-charging-article',
      type: 'article',
      title: 'The Force Driving E-Mobility',
      description: 'How TE is addressing technical challenges for vehicle electrification and reducing battery charge time.',
      industry: ['e-mobility'],
      url: '#',
      tags: ['charging', 'EV']
    },
    {
      id: 'commercial-ev-webinar',
      type: 'webinar',
      title: 'E-mobility Solutions for Commercial Vehicles',
      description: 'HIVONEX connector and charging solutions for the next generation of E-mobility.',
      industry: ['e-mobility'],
      url: '#',
      tags: ['commercial', 'EV', 'charging']
    }
  ]
};
