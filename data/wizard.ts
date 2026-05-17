export const roomSizes = [
  { id: 'huddle', label: 'Huddle / Phone Booth', seats: '1–3 people', icon: '🪑' },
  { id: 'small', label: 'Small Room', seats: '4–6 people', icon: '🛋️' },
  { id: 'medium', label: 'Medium Room', seats: '7–12 people', icon: '🏢' },
  { id: 'large', label: 'Large Room', seats: '13+ people', icon: '🏭' },
];

export const platformOptions = [
  { id: 'zoom', label: 'Zoom Rooms', icon: '⚡' },
  { id: 'teams', label: 'Microsoft Teams', icon: '💙' },
  { id: 'meet', label: 'Google Meet', icon: '🌈' },
  { id: 'webex', label: 'Cisco Webex', icon: '🛡️' },
  { id: 'byod', label: 'BYOD / Bring Your Own', icon: '💻' },
  { id: 'any', label: 'Not sure / Any', icon: '❓' },
];

export const priorities = [
  { id: 'camera', label: 'Best Camera Quality', desc: '4K, wide FOV, smart framing' },
  { id: 'audio', label: 'Best Audio Quality', desc: 'Noise cancellation, mic range' },
  { id: 'ai', label: 'Best AI Features', desc: 'Auto-framing, speaker tracking' },
  { id: 'value', label: 'Best Value for Money', desc: 'Feature-rich at lower cost' },
  { id: 'reliable', label: 'Most Reliable / Proven', desc: 'Enterprise-grade, long support' },
  { id: 'display', label: 'Biggest Display / Touch', desc: 'Large screen, whiteboard' },
];

export const categoryOptions = [
  { id: 'bar', label: 'Sound Bar Only', desc: 'Camera + mic + speaker bar — no screen' },
  { id: 'display', label: 'All-in-One Display', desc: 'Large touch screen with everything built in' },
  { id: 'companion', label: 'Room Companion', desc: '360° table-top camera for room coverage' },
  { id: 'any', label: 'Either / Not Sure', desc: 'Show me both' },
];
