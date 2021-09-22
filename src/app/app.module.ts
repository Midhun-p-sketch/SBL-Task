import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { OfficelistComponent } from './officelist/officelist.component';
import { MatTableModule } from '@angular/material/table'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HelpComponent } from './help/help.component';
import { NewofficeComponent } from './newoffice/newoffice.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    OfficelistComponent,
    HelpComponent,
    NewofficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
