import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private db: AngularFireDatabase) {}

  getContent() {
    const ref = this.db.object('testAlert');
    console.log('MAGIA NERA: ', ref);
    return ref.valueChanges();
  }
}
