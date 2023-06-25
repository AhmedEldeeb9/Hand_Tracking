import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceCallService} from "../../core/interceptors/http/service-call.service";
import {ServiceurlsService} from "../../core/interceptors/http/serviceurls.service";
import Swal from 'sweetalert2';
import {Subscription} from "rxjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy  {
  userName: any;
  productsubscription: Subscription;
  constructor(private router: Router,private servicCall: ServiceCallService, private serviceUrl: ServiceurlsService) { }

  ngOnInit(): void {

  }

  login(action:any) {
    debugger
    let registerObject: RegisterObject = new RegisterObject();
    registerObject.contact = action.form.value.contact;
    registerObject.addrees = action.form.value.addrees
    registerObject.email = action.form.value.email
    registerObject.phone = action.form.value.phone
    registerObject.position = action.form.value.position
    registerObject.iqama = action.form.value.iqama
    registerObject.companyName = action.form.value.companyName
    registerObject.source = "partner subscription";
    let url = this.serviceUrl.baseUrl + this.serviceUrl.userRegister;
     // @ts-ignore
    this.productsubscription = this.servicCall.postObservable<any>(url, registerObject, null, 'json').subscribe(res => {

      Swal.fire({
        icon: 'success',
        title: 'Good Job! You Have been Registered Successfully',
      })
    })
    this.clearData(action);

  }
  clearData(action: any){
    action.form.value.contact = null;
     action.form.value.addrees = null;
     action.form.value.email = null;
     action.form.value.phone = null;
    action.form.value.position = null;
    action.form.value.iqama = null;
     action.form.value.companyName = null;
  }
  ngOnDestroy() {
    this.productsubscription.unsubscribe();
  }
}
export class RegisterObject{

  addrees: string;
  companyName: string;
  contact: string;
  email: string;
  iqama: string;
  phone: string;
  position: string;
  source: string;

}
