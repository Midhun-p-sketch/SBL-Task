import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('removePopup', { static: true }) removePopup;
  showMenu = false;
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  logout() {
    let dialogRef = this.dialog.open(this.removePopup, {
      width: '30%',
    });
  }

  showSnackbarDuration(content, duration) {
    this.snackBar.open(content, duration, {
      duration: 2000
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
