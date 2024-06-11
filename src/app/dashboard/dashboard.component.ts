import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CardComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent  {
  constructor(private router : Router) {}

  gotoaddcontact() {
    this.router.navigateByUrl('/addtocontact');
  }

  gotobook() {
    this.router.navigateByUrl('/addressbook');
  }

  reload() {
    window.location.reload();
  }
}
