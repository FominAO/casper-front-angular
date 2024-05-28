import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const defaultUser = {
  id: '1fg6-uh38-9ib1-3086-dd23',
  name: 'Иванов Е.В.',
  isOperator: false,
}

const operator = {
  id: '5wgg-9087-w4gh-8y34-qwf0',
  name: 'Оператор',
  isOperator: true,
}

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {

  state$ = new BehaviorSubject(defaultUser);

  constructor() { }

  setOperatorState() {
    this.state$.next(operator)
  }

  setUresState(name?: string) {
    this.state$.next(name ? {
      name,
      id: '1fg6-uh38-9ib1-3086-dd23',
      isOperator: false,
    } : defaultUser)
  }
}
