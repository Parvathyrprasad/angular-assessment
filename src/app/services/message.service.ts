
import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Message[] = [
    {
      id: 1,
      text: 'Welcome to Message Management!',
      status: 'New',
      createdAt: new Date()
    }
  ];

  getMessages(): Message[] {
    return this.messages;
  }

  addMessage(text: string): void {
    const newMessage: Message = {
      id: Date.now(),
      text: text,
      status: 'New',
      createdAt: new Date()
    };

    this.messages.push(newMessage);
  }

  updateMessage(id: number, text: string): void {
    const message = this.messages.find(item => item.id === id);

    if (message) {
      message.text = text;
      message.status = 'Updated';
    }
  }
}
