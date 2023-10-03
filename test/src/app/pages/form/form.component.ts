import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PagesService } from '../service/pages.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  searchForm: FormGroup;
  nombres: FormControl;
  apellidos: FormControl;
  fumas: FormControl;
  actualmentePracticasLectura: FormControl;
  librosLeidosUltimosTresMeses: FormArray;
  estadoCivil: FormControl;
  result!: any;
  listadEstadosCivil = [12, 13, 14];
  showAlert: boolean = false;
  patternInput = /^[\w]+(\s[\w]+)*$/;

  get librosLeidosUltimosTresMesesArray() {
    return this.searchForm.get('librosLeidosUltimosTresMeses') as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private pageSvc: PagesService) {

    this.searchForm = this.formBuilder.group({
      nombres: this.nombres = new FormControl("", [Validators.required, Validators.pattern(this.patternInput)]),
      apellidos: this.apellidos = new FormControl("", [Validators.required, Validators.pattern(this.patternInput)]),
      fumas: this.fumas = new FormControl("", Validators.required),
      actualmentePracticasLectura: this.actualmentePracticasLectura = new FormControl(false, Validators.required),
      librosLeidosUltimosTresMeses: this.librosLeidosUltimosTresMeses = new FormArray([]),
      estadoCivil: this.estadoCivil = new FormControl("")
    });
    this.librosLeidosUltimosTresMeses.disable();
  }

  ngOnInit(): void {
  }

  onChangePracticasLectura() {
    if (!this.actualmentePracticasLectura.value) {
      this.librosLeidosUltimosTresMesesArray.clear();
    }
  }

  addLibro() {
    if (this.librosLeidosUltimosTresMeses.disabled) {
      this.librosLeidosUltimosTresMeses.enable();
    }
    this.librosLeidosUltimosTresMesesArray.push(new FormControl('', Validators.required));
  }

  search() {
    let params = {};
    if (this.searchForm.invalid) {
      this.showAlert = true;
    } else {
      this.pageSvc.savePetition(params).subscribe({
        next: (response) => {

        }, error: (err) => {

        }
      });
      this.showAlert = true;
    }
  }

}
