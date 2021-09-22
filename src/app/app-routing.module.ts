import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { NewofficeComponent } from './newoffice/newoffice.component';
import { OfficelistComponent } from './officelist/officelist.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-sidenav', pathMatch: 'full' },
  { path: 'app-sidenav', component: OfficelistComponent },
  { path: 'officeList', component: OfficelistComponent },
  { path: 'newoffice', component: NewofficeComponent },
  { path: 'help', component: HelpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
