import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtocontact',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './addtocontact.component.html',
  styleUrl: './addtocontact.component.css'
})
export class AddtocontactComponent {

  first: string = '';
  address: string = '';
  last: string = '';
  email: string = '';

  constructor(private router: Router, private contactService: ContactService) {}

  onSubmit() {
    const newContact = { first: this.first, address: this.address, last: this.last, email: this.email };

    this.contactService.addContact(newContact);

    this.first = '';
    this.address = '';
    this.last = '';
    this.email = '';
  }

  dash() {
    this.router.navigateByUrl('/dashboard');
  }

}
