import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contactsSubject = new BehaviorSubject<{ first: string, address: string , last: string, email: string }[]>([]);

  contacts$ = this.contactsSubject.asObservable();

  constructor() {}

  addContact(contact: { first: string, address: string, last: string, email: string }) {
    const contacts = this.contactsSubject.getValue();
    contacts.push(contact);

    this.contactsSubject.next(contacts);
  }
}
