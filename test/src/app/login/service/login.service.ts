import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(params: any) {
    return this.httpClient.post(environment.loginUrl, params);
  }
}
