import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtocontactComponent } from './addtocontact/addtocontact.component';
import { AddressbookComponent } from './addressbook/addressbook.component';


export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'addtocontact', component: AddtocontactComponent },
    { path: 'addressbook', component: AddressbookComponent }
];
