
export interface Message {
  id: number;
  text: string;
  status: 'New' | 'Updated';
  createdAt: Date;
}

