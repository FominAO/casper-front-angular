import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  id: string;
  login: string;
  name: string;
  isOperator: boolean;
}

const defaultUser: User = {
  id: '1fg6-uh38-9ib1-3086-dd23',
  login: 'Ivanov_1976',
  name: 'Иванов Е.В.',
  isOperator: false,
}

const operator: User = {
  id: '5wgg-9087-w4gh-8y34-qwf0',
  login: 'admin',
  name: 'Оператор',
  isOperator: true,
}

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {

  state$: BehaviorSubject<User> = new BehaviorSubject(defaultUser);

  constructor() { }

  setOperatorState() {
    this.state$.next(operator)
  }

  setUresState( user: Partial<User>) {
    this.state$.next(user.name ? {
      name: user.name || 'Иванов Е.В.',
      id: '1fg6-uh38-9ib1-3086-dd23',
      login: user.login || 'Ivanov_1976',
      isOperator: false,
    } : defaultUser)
  }
}
