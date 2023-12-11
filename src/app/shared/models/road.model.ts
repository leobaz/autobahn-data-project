export interface Road {
  title: string;
  subtitle: string;
  startTimestamp: string;
  extent: string;
  display_type: string;
  icon: string;
  isBlocked: string;
  future: boolean;
  description: string[];
  identifier: string;
  point: string;
  coordinate: Coordiante;
  footer: string[];
}

interface Coordiante {
  lat: string;
  long: string;
}
