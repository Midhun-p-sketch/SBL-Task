import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-newoffice',
  templateUrl: './newoffice.component.html',
  styleUrls: ['./newoffice.component.css']
})
export class NewofficeComponent implements OnInit {
  saveOfficeForm: FormGroup;
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.saveOfficeForm = this.formBuilder.group({
      officeName: new FormControl(''),
      officeNameLocal: new FormControl(''),
      address: new FormControl(''),
      addressInLocal: new FormControl(''),
      email: new FormControl(''),
      phoneNo: new FormControl(''),
      mobileNo: new FormControl(''),
      totalEmployees: new FormControl(''),
      Status: new FormControl('')
    })
  }

  resetForm() {
    this.saveOfficeForm.reset();
  }

  showSnackbarDuration(content, duration) {
    this.snackBar.open(content, duration, {
      duration: 2000
    });
  }

}
