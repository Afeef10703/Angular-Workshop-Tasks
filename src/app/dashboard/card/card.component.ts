import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContactService } from '../../contact.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ MatCardModule, CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  contacts: { first: string, address: string, last: string, email: string }[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
      
    this.contactService.contacts$.subscribe(contacts => {this.contacts = contacts});
  }

}
