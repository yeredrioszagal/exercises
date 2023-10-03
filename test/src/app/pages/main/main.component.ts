import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

export interface MenuItem {
  id: number;
  path: null | string;
  title: string;
  children: MenuItem[] | null;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      id: 1,
      path: '',
      title: 'Bienvenido',
      children: null
    },
    {
      id: 2,
      path: 'conversations',
      title: 'Conversaciones',
      children: null
    },
    {
      id: 3,
      path: 'calculate-date',
      title: 'Calcular Fecha',
      children: null
    },
    {
      id: 4,
      path: 'form',
      title: 'Formulario',
      children: null
    }
  ];
  constructor(
    private authSvc:AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authSvc.exitApp();
  }

}
