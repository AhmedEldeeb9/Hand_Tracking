import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import {ServiceurlsService} from "../../../../core/interceptors/http/serviceurls.service";
import {ServiceCallService} from "../../../../core/interceptors/http/service-call.service";
@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.css']
})
export class MiddleHeaderComponent implements OnInit {
  items: MenuItem[] =[];
  userName=localStorage.getItem('userName');

  @Input() headerList: any
  @Input() Logo: any

  constructor(private router: Router, private serviceUrl: ServiceurlsService,
              private serviceCall: ServiceCallService) {
  }

   ngOnInit() {
     debugger
     this.items = [
       {
         label: 'Downloads',
           command: () => {
             this.router.navigate(['DeviceDashboard']);
           }
         },
       {
         label: 'Documentation',
               command: () => {
                 this.router.navigate(['user']);
               }

         },
           {
             label: 'Help',

                 command: () => {
                   this.router.navigate(['zipcodecheck']);
                 }},
     ];
  }


}

