import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'dialogLogin',
  templateUrl: './dialog/dialog-welcome.html',
})
export class DialogWelcome {
  name: FormControl = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<DialogWelcome>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  nameDialog: string = '';

  constructor(public dialog: MatDialog) { }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWelcome, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.nameDialog = result;
    });
  }
}
