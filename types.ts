export type eventType = {
  id: string;
  title: string;
  start: number;
  duration: number;
  end: number;
  left?: number;
  width?: number;
};

export type userType = {
  email: string;
  name: string;
};
