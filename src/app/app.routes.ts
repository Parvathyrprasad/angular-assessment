
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Messages } from './components/messages/messages';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'messages',
    component: Messages
  },
  {
    path: '**',
    redirectTo: ''
  }
];

