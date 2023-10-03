import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dialogLogin',
  templateUrl: './dialog/dialog-login.html',
})
export class DialogLogin {
  errroMsg = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.errroMsg = data;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private loginSvc: LoginService,
    public dialog: MatDialog,
    private router: Router,
    private autSvc: AuthService
  ) {

    this.formLogin = this.formBuilder.group({
      username: this.username = new FormControl("", [Validators.required]),
      password: this.password = new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login() {
    let params = {
      username: this.username.value,
      password: this.password.value
    };

    this.loginSvc.login(params).subscribe({
      next: (response) => {
        debugger
        console.log(response);
        this.autSvc.setLog();
        this.router.navigateByUrl("/pages");
      }, error: (err) => {
        this.openDialog(err.error.mensaje);
        console.log(err);
      },
    });
  }

  openDialog(msg: string) {
    const dialogRef = this.dialog.open(DialogLogin, {
      width: '550px',
      data: msg,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
