import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {

  private baseUrl = 'http://localhost:8091/myapi/download';
  constructor(
    private http: HttpClient){}

  downloadFile(fileName: string): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/octet-stream',
      'responseType': 'blob'
    });

    this.http.get(`${this.baseUrl}/downloadFile?fileName=${fileName}`, { headers: headers, responseType: 'blob' })
      .subscribe(blob => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(objectUrl);
      });
  }

}
