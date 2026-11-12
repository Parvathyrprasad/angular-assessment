import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }

  get totalMessages(): number {
    return this.messages.length;
  }

  get newMessages(): number {
    return this.messages.filter(message => message.status === 'New').length;
  }

  get updatedMessages(): number {
    return this.messages.filter(message => message.status === 'Updated').length;
  }

  get recentMessages(): Message[] {
    return [...this.messages].reverse().slice(0, 3);
  }
}
