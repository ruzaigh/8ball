export interface Message{
  title?: string;
  checked?: boolean;
  messages: Array<{ id: number; message: string; }>;
}
