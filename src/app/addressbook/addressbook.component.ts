import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addressbook',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './addressbook.component.html',
  styleUrl: './addressbook.component.css'
})
export class AddressbookComponent implements OnInit{
  contacts: { first: string, address: string, last: string, email: string }[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
      
    this.contactService.contacts$.subscribe(contacts => {this.contacts = contacts});
  }

  dash() {
    this.router.navigateByUrl('/dashboard');
  }

}
