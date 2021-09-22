import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface officeListData {
  officeName: string;
  officeNameinLocal: string;
  address: string;
  addressInLocal: string;
  mailID: string;
  phone: string;
  mobile: number;
  totalEmployees: number;
  photoUrl: string;
  status: string;
}
let officeAPIList: officeListData[] = [
  {
    officeName: 'AKSHAYA DISTRICT PROJECT OFFICE', officeNameinLocal: 'അക്ഷയ ജില്ലാ പ്രോജക്ട് ഓഫീസ് കണ്ണൂർ', address: '5th floor, South Bazar, Kannur', addressInLocal: 'അഞ്ചാം നില, സൗത്ത് ബസാർ, കണ്ണൂർ', mailID: 'dpmkzd.ksitm@kerala.gov.in', phone: '0495-235678',
    mobile: 9440038111, totalEmployees: 30, status: 'Active', photoUrl: 'assets/office_images/akshaya.jpg'
  },
  { officeName: 'DISTRICT LABOUR OFFICE KOZHIKODE', officeNameinLocal: 'ജില്ലാ തൊഴിൽ ഓഫീസ് കോഴിക്കോട്', address: 'Wayanad Road Eranhipaalam', addressInLocal: 'വയനാട് റോഡ് എരഞ്ഞിപ്പാലം', mailID: 'labourgeneral@gmail.com', phone: '0495-2370538', mobile: 9440038111, totalEmployees: 160, status: 'Active', photoUrl: 'assets/office_images/labourOffice.jpg' },

  { officeName: 'DISTRICT OFFICE TOURISM', officeNameinLocal: 'ജില്ലാ ടൂറിസം ഓഫീസ് ', address: 'Mananchira, Kozhikode', addressInLocal: 'മാനാഞ്ചിറ, കോഴിക്കോട്', mailID: 'ddkzh@keralatourism.org', phone: '0495-2951214', mobile: 9440038111, totalEmployees: 160, status: 'Inactive', photoUrl: 'assets/office_images/kerala-tourist-information-center.jpg' },

  { officeName: 'FINANCE', officeNameinLocal: 'ഫിനാൻസ്', address: 'Cherootty Road', addressInLocal: 'ചെറൂട്ടി റോഡ്', mailID: 'sfokozhikode@gmail.com', phone: '0495-2373456', mobile: 9687656020, totalEmployees: 212, status: 'Active', photoUrl: 'assets/office_images/finance.jpg' },
  { officeName: 'LEAD BANK OFFICE', officeNameinLocal: 'ലീഡ് ബാങ്ക് ഓഫീസ്', address: 'Nadakkave, Kozhikode', addressInLocal: 'നടക്കാവ്, കോഴിക്കോട്', mailID: 'lbocalicut@canarabank.com', phone: '0495-2373443', mobile: 9897765602, totalEmployees: 187, status: 'Active', photoUrl: 'assets/office_images/leadBankoffice.jpg' },

  { officeName: 'DISTRICT LABOUR OFFICE KOZHIKODE', officeNameinLocal: 'ജില്ലാ തൊഴിൽ ഓഫീസ് കോഴിക്കോട്', address: 'Wayanad Road Eranhipaalam', addressInLocal: 'വയനാട് റോഡ് എരഞ്ഞിപ്പാലം', mailID: 'labourgeneral@gmail.com', phone: '0495-2370538', mobile: 9440038111, totalEmployees: 160, status: 'Active', photoUrl: 'assets/office_images/labourOffice.jpg' },

  { officeName: 'DISTRICT OFFICE TOURISM', officeNameinLocal: 'ജില്ലാ ടൂറിസം ഓഫീസ് ', address: 'Mananchira, Kozhikode', addressInLocal: 'മാനാഞ്ചിറ, കോഴിക്കോട്', mailID: 'ddkzh@keralatourism.org', phone: '0495-2951214', mobile: 9440038111, totalEmployees: 160, status: 'Inactive', photoUrl: 'assets/office_images/kerala-tourist-information-center.jpg' },

  { officeName: 'FINANCE', officeNameinLocal: 'ഫിനാൻസ്', address: 'Cherootty Road', addressInLocal: 'ചെറൂട്ടി റോഡ്', mailID: 'sfokozhikode@gmail.com', phone: '0495-2373456', mobile: 9687656020, totalEmployees: 212, status: 'Active', photoUrl: 'assets/office_images/finance.jpg' },
  { officeName: 'DISTRICT LABOUR OFFICE KOZHIKODE', officeNameinLocal: 'ജില്ലാ തൊഴിൽ ഓഫീസ് കോഴിക്കോട്', address: 'Wayanad Road Eranhipaalam', addressInLocal: 'വയനാട് റോഡ് എരഞ്ഞിപ്പാലം', mailID: 'labourgeneral@gmail.com', phone: '0495-2370538', mobile: 9440038111, totalEmployees: 160, status: 'Active', photoUrl: 'assets/office_images/labourOffice.jpg' },
  {
    officeName: 'AKSHAYA DISTRICT PROJECT OFFICE', officeNameinLocal: 'അക്ഷയ ജില്ലാ പ്രോജക്ട് ഓഫീസ് കണ്ണൂർ', address: '5th floor, South Bazar, Kannur', addressInLocal: 'അഞ്ചാം നില, സൗത്ത് ബസാർ, കണ്ണൂർ', mailID: 'dpmkzd.ksitm@kerala.gov.in', phone: '0495-235678',
    mobile: 9440038111, totalEmployees: 30, status: 'Active', photoUrl: 'assets/office_images/akshaya.jpg'
  },
  { officeName: 'DISTRICT LABOUR OFFICE KOZHIKODE', officeNameinLocal: 'ജില്ലാ തൊഴിൽ ഓഫീസ് കോഴിക്കോട്', address: 'Wayanad Road Eranhipaalam', addressInLocal: 'വയനാട് റോഡ് എരഞ്ഞിപ്പാലം', mailID: 'labourgeneral@gmail.com', phone: '0495-2370538', mobile: 9440038111, totalEmployees: 160, status: 'Active', photoUrl: 'assets/office_images/labourOffice.jpg' },

  { officeName: 'DISTRICT OFFICE TOURISM', officeNameinLocal: 'ജില്ലാ ടൂറിസം ഓഫീസ് ', address: 'Mananchira, Kozhikode', addressInLocal: 'മാനാഞ്ചിറ, കോഴിക്കോട്', mailID: 'ddkzh@keralatourism.org', phone: '0495-2951214', mobile: 9440038111, totalEmployees: 160, status: 'Inactive', photoUrl: 'assets/office_images/kerala-tourist-information-center.jpg' },

  { officeName: 'FINANCE', officeNameinLocal: 'ഫിനാൻസ്', address: 'Cherootty Road', addressInLocal: 'ചെറൂട്ടി റോഡ്', mailID: 'sfokozhikode@gmail.com', phone: '0495-2373456', mobile: 9687656020, totalEmployees: 212, status: 'Active', photoUrl: 'assets/office_images/finance.jpg' }
];



@Component({
  selector: 'app-officelist',
  templateUrl: './officelist.component.html',
  styleUrls: ['./officelist.component.css']
})
export class OfficelistComponent {
  @ViewChild('Imagepopup', { static: true }) Imagepopup;
  @ViewChild('editpopup', { static: true }) editpopup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  maxall: 5;
  editOfficeForm: FormGroup;
  displayedColumns: string[] = ['officeName', 'officeNameinLocal', 'address', 'addressInLocal', 'mailID', 'phone', 'mobile', 'totalEmployees', 'photoUrl', 'status', 'edit'];
  dataSource: MatTableDataSource<officeListData>;

  // dataSource = new MatTableDataSource(officeAPIList);


  ListSize: any = [];
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(officeAPIList);
    this.ListSize = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // if (this.ListSize > this.maxall) {
    //   this.hidePaginator = false;
    // } else {
    //   this.hidePaginator = true;
    // }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.editOfficeForm = this.formBuilder.group({
      officeName: new FormControl('', [Validators.required]),
      officeNameLocal: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      addressInLocal: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      totalEmployees: new FormControl('', [Validators.required]),
      Status: new FormControl('', [Validators.required])
    })
  }

  showImage() {

    let dialogRef = this.dialog.open(this.Imagepopup, {
      width: '50%',
    });


  }

  editAt(index: any = []) {
    let dialogRef = this.dialog.open(this.editpopup, {
      width: '80%',
    });

    this.editOfficeForm.patchValue({
      officeName: index.officeName,
      officeNameLocal: index.officeNameinLocal,
      address: index.address,
      addressInLocal: index.addressInLocal,
      email: index.mailID,
      phoneNo: index.phone,
      mobileNo: index.mobile,
      totalEmployees: index.totalEmployees,
      Status: index.status
    })


  }

  resetForm() {
    this.editOfficeForm.reset();
  }

  showSnackbarDuration(content, duration) {
    this.snackBar.open(content, duration, {
      duration: 2000
    });

  }

}
