
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

  messages: Message[] = [];
  newMessage = '';
  editingId: number | null = null;
  editText = '';

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }

  addMessage(): void {
    if (this.newMessage.trim()) {
      this.messageService.addMessage(this.newMessage.trim());
      this.newMessage = '';
    }
  }

  startEdit(message: Message): void {
    this.editingId = message.id;
    this.editText = message.text;
  }

  updateMessage(id: number): void {
    if (this.editText.trim()) {
      this.messageService.updateMessage(id, this.editText.trim());
      this.editingId = null;
      this.editText = '';
    }
  }

  cancelEdit(): void {
    this.editingId = null;
    this.editText = '';
  }
}
