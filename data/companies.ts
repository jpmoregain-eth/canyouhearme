export interface CompanyProfile {
  id: string;
  name: string;
  tagline: string;
  description: string;
  products: string[];
  strengths: string[];
  weaknesses: string[];
  website: string;
  founded?: string;
  headquarters?: string;
  marketPosition: 'Leader' | 'Challenger' | 'Niche' | 'Emerging';
}

export const companyProfiles: CompanyProfile[] = [
  {
    id: 'neat',
    name: 'Neat',
    tagline: 'Beautifully simple',
    description: 'Neat is the disruptor — a Norwegian startup that went from zero to Zoom/Teams darling in just a few years. They prioritize cutting-edge sensors, sleek Scandinavian design, and AI-first features. Their devices feel like consumer tech, not corporate gear.',
    products: ['Neat Bar Gen 2', 'Neat Bar Pro', 'Neat Board 50', 'Neat Board Pro 65', 'Neat Frame', 'Neat Pad controller'],
    strengths: [
      'Best-in-class design and aesthetics',
      'Cutting-edge sensors: radar (wakeup), depth (ToF), ambient light',
      '100MP dual-camera system (Bar Pro / Board Pro)',
      'Neat Symmetry — equalizes remote and in-room participant sizes',
      'Neat Boundary — virtual room dividers via depth sensor',
      'Fastest feature development cycle in the industry',
      'Google Meet certified (Jan 2026) — now supports Zoom, Teams, and Meet',
      'BYOD mode available on Bar Gen 2, Bar Pro, Board 50, Board Pro — connect any laptop via USB-C or use standalone BYOD-only mode',
      'Android-based, frequent software updates'
    ],
    weaknesses: [
      'Newer company — rapid innovation cycles with frequent feature releases',
      'Google Meet recently added (Jan 2026) — expanding beyond native Zoom/Teams',
      'Growing global support network — scaling with demand',
      'Premium positioning — investment in advanced sensors and Scandinavian design',
      'Early hardware generations refined through continuous software updates'
    ],
    website: 'https://neat.no',
    founded: '2019',
    headquarters: 'Oslo, Norway',
    marketPosition: 'Leader'
  },
  {
    id: 'logitech',
    name: 'Logitech',
    tagline: 'Swiss engineering, global reach',
    description: 'Logitech is one of the most recognizable names in computer peripherals and video conferencing. Their Rally series dominates the mid-market with reliable, well-integrated solutions. They have decades of audio expertise and strong partnerships with Zoom and Microsoft.',
    products: ['Rally Bar', 'Rally Bar Mini', 'Rally Bar Huddle', 'Rally Plus', 'Rally Camera', 'Tap IP', 'Sync management'],
    strengths: [
      'Strong brand recognition and trust',
      'Excellent RightSight AI framing and RightSound noise suppression',
      'Logitech Sync cloud management platform',
      'Broad platform support (Zoom, Teams, Google Meet, BYOD)',
      'Modular ecosystem (mic pods, speakers, controllers)',
      'Good build quality and reliability track record'
    ],
    weaknesses: [
      'Premium pricing — not the cheapest option',
      'Some products feel "safe" rather than innovative',
      'AI features lag behind newer entrants like Neat',
      'Camera hardware specs (MP count) lower than competitors',
      'Less aggressive in all-in-one display category'
    ],
    website: 'https://www.logitech.com',
    founded: '1981',
    headquarters: 'Lausanne, Switzerland',
    marketPosition: 'Leader'
  },
  {
    id: 'poly',
    name: 'Poly (HP)',
    tagline: 'Engineered for clarity',
    description: 'Now part of HP, Poly brings decades of audio engineering heritage from Plantronics and Polycom. Their Studio X series combines proven acoustic expertise with modern AI camera features. They have a strong presence in enterprise telephony.',
    products: ['Studio X52', 'Studio X32', 'Studio X70', 'Studio X30', 'Studio P5/P15', 'Poly TC8 controller', 'Poly Lens management'],
    strengths: [
      'Best-in-class audio quality and noise cancellation',
      'Poly DirectorAI with smart speaker tracking and group framing',
      'Strong enterprise support and service infrastructure',
      'HP backing provides supply chain stability',
      'Good camera zoom capabilities (5x on X52/X70)',
      'Poly Lens cloud management'
    ],
    weaknesses: [
      'Integration with HP ecosystem still maturing',
      'Some legacy Polycom product overlap creates confusion',
      'Software platform (Poly Lens) less mature than Logitech Sync',
      'Design aesthetics can feel corporate/boring',
      'Slower to adopt cutting-edge sensor technology'
    ],
    website: 'https://www.poly.com',
    founded: '1990 (Plantronics), acquired by HP 2022',
    headquarters: 'Santa Cruz, California, USA',
    marketPosition: 'Leader'
  },
  {
    id: 'cisco',
    name: 'Cisco',
    tagline: 'The network is the platform',
    description: 'Cisco\'s Webex Room series brings enterprise-grade security and integration to video conferencing. Their devices are designed for organizations already invested in the Cisco/Webex ecosystem, with top-tier security certifications.',
    products: ['Webex Room Bar', 'Webex Room Bar Pro', 'Webex Room Kit Pro', 'Webex Room 55/70', 'Cisco Desk Pro', 'Webex Board'],
    strengths: [
      'Enterprise-grade security and compliance',
      'Dual 96MP camera system (Room Bar Pro) — highest resolution on market',
      'Deep Webex integration and Control Hub management',
      'AI noise removal and facial recognition',
      'RoomOS provides consistent experience across all devices',
      'Strong in-room intelligence (people count, air quality)'
    ],
    weaknesses: [
      'Premium pricing — often 2x competitors',
      'Best experience requires full Webex commitment',
      'Third-party platform support is weaker',
      'Complex setup for non-Cisco environments',
      'Slower feature rollouts than agile competitors',
      'Hardware can feel bulky and dated'
    ],
    website: 'https://www.cisco.com',
    founded: '1984',
    headquarters: 'San Jose, California, USA',
    marketPosition: 'Leader'
  },
  {
    id: 'yealink',
    name: 'Yealink',
    tagline: 'Easy collaboration, high productivity',
    description: 'Yealink is the value champion — Chinese manufacturer offering feature-rich devices at aggressive prices. They dominate in Asia and are rapidly gaining ground in Europe/Americas with Teams-certified and Zoom-certified bars and displays.',
    products: ['MeetingBar A25', 'MeetingBar A40', 'MeetingBar A50', 'MeetingBoard 65"/86"', 'MVC series (Teams Rooms)', 'ZVC series (Zoom Rooms)', 'UVC cameras'],
    strengths: [
      'Best price-to-feature ratio in the market',
      'Ultra-wide cameras (151° on A25) for small rooms',
      'Qualcomm 8550 chipset on A50 for AI processing',
      'Strong Teams and Zoom certification program',
      'Rapid product development and iteration',
      'Good display options (MeetingBoard) at lower cost'
    ],
    weaknesses: [
      'Perceived as "budget" brand vs Logitech/Cisco',
      'Software experience less polished than Neat/Logitech',
      'AI features less sophisticated than premium competitors',
      'Audio quality good but not best-in-class',
      'Support network thinner in Americas',
      'Some concerns about long-term firmware support'
    ],
    website: 'https://www.yealink.com',
    founded: '2001',
    headquarters: 'Xiamen, China',
    marketPosition: 'Challenger'
  },
  {
    id: 'crestron',
    name: 'Crestron',
    tagline: 'Control everything',
    description: 'Crestron is the automation and control giant that also makes VC hardware. Their Videobar 70 is built for large rooms and integrates deeply with their room control systems. They are the choice for high-end corporate AV installations.',
    products: ['Videobar 70', 'Flex Videobar series', 'Flex UC appliances', 'DM NVX AV-over-IP', 'Crestron Control Systems'],
    strengths: [
      'Deep room automation and control integration',
      '24-microphone array on Videobar 70 — most mics in any bar',
      '4-camera system for intelligent video stitching',
      'Enterprise-grade security and management',
      'Best for large/huddle spaces and custom AV installs',
      'Unified platform across lighting, shades, AV, and VC'
    ],
    weaknesses: [
      'Overkill for simple deployments — complex setup',
      'Requires Crestron expertise for full value',
      'Most expensive ecosystem when you factor in control systems',
      'Not competitive for simple plug-and-play deployments',
      'Smaller VC-specific feature set vs dedicated vendors',
      'Software UX less refined than Zoom/Teams native'
    ],
    website: 'https://www.crestron.com',
    founded: '1972',
    headquarters: 'Rockleigh, New Jersey, USA',
    marketPosition: 'Niche'
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    tagline: 'Smarter technology for all',
    description: 'Lenovo\'s ThinkSmart series leverages their PC manufacturing expertise. The Bar 180 is unique with its 180° panoramic camera — perfect for wide rooms. They play well in hybrid work scenarios with strong PC/ThinkPad integration.',
    products: ['ThinkSmart Bar 180', 'ThinkSmart One Pro', 'ThinkSmart Core', 'ThinkSmart View Plus', 'ThinkSmart Cam', 'ThinkSmart Hub'],
    strengths: [
      'Unique 180° panoramic camera with 13MP sensor',
      '6x lossless digital zoom and intelligent framing',
      'Strong integration with ThinkPad/Windows ecosystem',
      'Lightweight (2.2kg) and compact design',
      'Good BYOD support',
      'Competitive pricing for the feature set'
    ],
    weaknesses: [
      'Newer player — less proven track record in VC',
      'Software platform less mature than Logitech Sync',
      'Limited product range vs full-suite competitors',
      'Panoramic format (3840x1080) can be awkward on some platforms',
      'Support infrastructure still building',
      'Camera resolution lower than 4K competitors'
    ],
    website: 'https://www.lenovo.com',
    founded: '1984',
    headquarters: 'Beijing, China / Morrisville, North Carolina, USA',
    marketPosition: 'Challenger'
  },
  {
    id: 'dten',
    name: 'DTEN',
    tagline: 'All-in-one simplicity',
    description: 'DTEN focuses exclusively on all-in-one displays with built-in Zoom/Teams. Their D7X series covers everything from personal 27" devices to massive 75" room displays. They prioritize touch-first collaboration with whiteboard features.',
    products: ['D7X 27"', 'D7X 55"', 'D7X 75"', 'D7X Dual 75"', 'DTEN Bar', 'DTEN ME (personal)', 'DTEN GO (portable)'],
    strengths: [
      'Purpose-built for Zoom Rooms and Teams Rooms',
      '15-microphone array on larger displays — excellent audio pickup',
      'Strong touch and whiteboard experience',
      'BYOD Smart Connect via single USB-C cable',
      'All sizes from personal to large room in one product family',
      'Clean, minimalist design'
    ],
    weaknesses: [
      'Limited to Zoom/Teams — no Google Meet or Webex',
      'All-in-one means no modular upgrades (stuck with display quality)',
      'Less camera intelligence than Neat/Cisco',
      'Smaller brand recognition outside of Zoom ecosystem',
      'Service and support network limited vs Logitech',
      'Premium pricing for larger displays'
    ],
    website: 'https://www.dten.com',
    founded: '2015',
    headquarters: 'San Jose, California, USA',
    marketPosition: 'Niche'
  },
  {
    id: 'maxhub',
    name: 'MAXHUB',
    tagline: 'Maximize collaboration',
    description: 'MAXHUB is a Chinese display technology company that has expanded aggressively into interactive displays and VC bars. They compete heavily on specs — 100MP cameras, 16-mic arrays, 180° FOV — at prices undercutting Western competitors.',
    products: ['XBar V50', 'XBar U50', 'XBar W70', 'XBoard V7 55"/65"/75"/86"', 'XBoard V7 T Series', 'Interactive flat panels'],
    strengths: [
      'Aggressive specs: 100MP dual-lens, 16-mic array, 180° FOV',
      '15-meter voice pickup range — longest in class',
      'Most competitive pricing for the feature set',
      'Wide range of display sizes (55" to 86")',
      'AI Noise Cancellation technology',
      'FlexMount for easy installation',
      'Teams and Zoom certified'
    ],
    weaknesses: [
      'Brand recognition low outside Asia',
      'Software experience less refined than Western competitors',
      'Long-term support and firmware updates uncertain',
      'Build quality perception vs Logitech/Cisco',
      'Limited global service network',
      'Spec-sheet marketing may not reflect real-world performance'
    ],
    website: 'https://www.maxhub.com',
    founded: '2017',
    headquarters: 'Guangzhou, China',
    marketPosition: 'Emerging'
  }];