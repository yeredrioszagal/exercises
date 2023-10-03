import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-calculate-date',
  templateUrl: './calculate-date.component.html',
  styleUrls: ['./calculate-date.component.scss']
})
export class CalculateDateComponent {

  datesForm: FormGroup;
  unitCtrl: FormControl;
  quantityCtrl: FormControl;
  dateCtrl: FormControl;
  result!: any;

  constructor(private formBuilder: FormBuilder, private _adapter: DateAdapter<any>) {
    this._adapter.setLocale('es-Es');

    this.datesForm = this.formBuilder.group({
      unitCtrl: this.unitCtrl = new FormControl("", Validators.required),
      quantityCtrl: this.quantityCtrl = new FormControl("", Validators.required),
      dateCtrl: this.dateCtrl = new FormControl("", Validators.required)
    });
  }

  calculate() {
    let di: Date = new Date(this.dateCtrl.value);
    switch (this.unitCtrl.value) {
      case '0':
        this.result = di.setDate(di.getDate() + Number(this.quantityCtrl.value));
        break;
      case '1':
        this.result = di.setMonth(di.getMonth() + Number(this.quantityCtrl.value));
        break;
      case '2':
        this.result = di.setFullYear(di.getFullYear() + Number(this.quantityCtrl.value));
        break;
    }
  }

}
