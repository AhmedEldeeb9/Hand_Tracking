import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Constant} from "../../commom/constants/constant";
import {TranslateService} from "@ngx-translate/core";
import {ServiceurlsService} from "./serviceurls.service";

@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {

  response: any = {};
  r2: any;
  private acceptingLang: string ="ar";
  public static loginUserInfo: any;
  static debugLog: Function = console.debug;
  constructor(
    private http: HttpClient , public translate: TranslateService, public  ServiceUrls: ServiceurlsService){}

  getDefaultHeaders(config: any) {

    let defaultConfig = null;
    if (config == null) {
      defaultConfig = {
        headers: {
          'Accept-Language': this.acceptingLang,
          'Authorization': 'Bearer ' + localStorage.getItem("Authorization"),
        }
      };
    } else if(config == 'text'){
      defaultConfig = {
        headers: {
          'Accept-Language': this.acceptingLang,
          'Authorization': 'Bearer ' + localStorage.getItem("Authorization"),
        },
        'responseType': 'text'
      };
    } else if (config = 'file') {
      defaultConfig = new HttpHeaders({
        'Accept-Language': this.acceptingLang,
        'Authorization': 'Bearer ' + localStorage.getItem("Authorization"),
      });
    }
    else  {
      defaultConfig = config;
    }
    return defaultConfig;
  }

  public getObservable<T>( url: string, _header:any, AlertError = true ): Observable<T> {

    //  url=url+"/"+this.translate.currentLang;
    this.response={};
    return this.http.get<any>(url,_header).pipe(
      map((data:any) => {

        return data;
      }), catchError( error => {
        this.handleError(error, AlertError, url);
        return throwError( null);
      })
    );




  }

  public postObservable<T>( url: string,requestBody: any, _header:any, responseType:'json', AlertError = true): Observable<T> {
    let options ={headers: _header,responseType:responseType};



    //url=url+"/"+this.translate.currentLang;
    this.response = {};
    return this.http.post<any>(url, requestBody, options).pipe(
      map((data: any) => {

        return data;
      }), catchError(error => {
        this.handleError(error, AlertError, url);
        return throwError(null);
      })
    )

  }

  public postObservable2<T>( url: string,requestBody: any, _header:any,  AlertError = true): Observable<T> {
    //url=url+"/"+this.translate.currentLang;
    this.response = {};
    return this.http.post<any>(url, requestBody, _header).pipe(map((data: any) => {
      return data;
    }));
  }
  clearLocalStorage () {
    localStorage.removeItem("Authorization");
    window.location.hash = "#/Home";
    window.location.reload();
  }

  public alert(Body: any, alertType: any = Constant.ALERT_TYPE_ERROR, in_url ?: string) {
    try {

      if (Body instanceof Error) {
        Body = Body.message;
      }
      if (Body.includes('$IgnorePrint')) {
        return;
      }
      if (Body != null && Body !== '' && Body != 'null') {
        let title = '';
        if (alertType === Constant.ALERT_TYPE_ERROR) {
          title = '';
        } else if (alertType === Constant.ALERT_TYPE_WARN) {
          title = '';
        } else if (alertType === Constant.ALERT_TYPE_SUCCESS) {
          title = 'Saved!';
        } else if (alertType === Constant.ALERT_TYPE_INFO) {
          title = 'Info';
        }
        let Footer = '';
        // alert(alertType);
      }
    } catch (ex) {
      ServiceCallService.debugLog(ex);
    }
  }

  public handleError(error: any, AlertError: boolean, url: string) {
    if (error instanceof Error && error.message == '') {
      return throwError(
        null
      );
    }
    let err: string;
    try {
      if (error instanceof HttpErrorResponse) {
        if (error.status == 406) {
          err = error.error;
        } else if(error.status == 500 || error.status == 401 || error.status == 417) {
          err = "INTERNAL SERVER ERROR";
        }  else if(error.status == 200) {
          err = error.error.text;
          if(error.error.text && ((error.error.text).toLowerCase() == 'invalid email' || error.error.text == 'invalid password'))
          {
            AlertError = false;
          } } else if(error.status == 400) {
          err = error.error;
        } else
        {
          err = error.message;
        }
      } else {
        err = error.error || error.json().message;
      }
    } catch (e) {
      err = error.toString();
    }
    if (err == null || err === '' || err === 'undefined' || err === 'unKnown Error' || error.statusText == 'Unknown Error') {
      err = 'Something wrong, pleases contact system administrator';
    }

    if (AlertError) {

      // this.alert(err, Constant.ALERT_TYPE_ERROR);
      throw new Error('');

    } else {
      throw new Error(err);
    }
    return null;
  }
}
