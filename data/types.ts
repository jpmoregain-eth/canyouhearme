export interface Product {
  id: string;
  name: string;
  company: string;
  category: 'bar' | 'display';
  subCategory?: string; // huddle, small, medium, large room
  
  // Camera
  cameraResolution?: string;
  fieldOfView?: string;
  opticalZoom?: string;
  panTiltZoom?: boolean;
  
  // Audio
  micCount?: number;
  micPickupRange?: string;
  speakerOutput?: string;
  noiseCancellation?: boolean;
  
  // Video
  maxResolution?: string;
  supportedCodecs?: string[];
  
  // Display (for all-in-ones)
  displaySize?: string;
  displayResolution?: string;
  touchScreen?: boolean;
  
  // Compute
  builtInCompute?: string;
  os?: string;
  
  // Connectivity
  ports?: string[];
  wireless?: string[];
  
  // Physical
  dimensions?: string;
  weight?: string;
  mountType?: string;
  
  // Software
  platformSupport?: string[]; // Zoom, Teams, Google Meet, etc
  
  // Price
  msrp?: string;
  
  // Other
  aiFeatures?: string[];
  specialFeatures?: string[];
  productUrl?: string;
  imageUrl?: string;
}

export const companies = [
  'Logitech', 'Poly', 'Cisco', 'Neat', 'Yealink', 
  'Crestron', 'Lenovo', 'DTEN', 'MAXHUB'
];

export const platforms = [
  'Zoom Rooms', 'Microsoft Teams', 'Google Meet', 'Webex', 'BYOD'
];
