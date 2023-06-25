import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceurlsService {

  baseUrl: any = '';
  static chartStaticId: any = 0;
  constructor() {
    this.getUrl();
  }
   public userRegister: string = '/user/register'
  getUrl() {
    debugger
    if (environment.production == true) {

      this.baseUrl = '/subscription/myapi';
      let url = window.location.pathname;
      while (url.includes('//')) {
        url = url.replace('//', '/');
      }
      let Urlparts = url.split('/');
      for (let i = 0; i < Urlparts.length; i++) {
        if ((Urlparts[i] !== '/' && Urlparts[0].trim() !== '')) {
          if (Urlparts[i].indexOf('#') > -1) {
            break;
          } else {
            url += Urlparts[1] + '/';
          }
        }
      }

      if (url.startsWith('/') == false) {
        url = '/' + url;
      }
      if (url.endsWith('/') == false) {
        url += '/';
      }
      this.baseUrl = window.location.protocol + '//' + window.location.host + url + 'subscription/myapi';

    } else {
      this.baseUrl = environment.apiUrl;
    }

  }

}
