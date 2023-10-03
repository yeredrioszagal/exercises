import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class PagesService {

  constructor(
    private httpClient: HttpClient
  ) { }


  savePetition(params: any) {
    return this.httpClient.post(environment.estadoCivilUtl, params);
  }

}
