import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  navpar: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
}
