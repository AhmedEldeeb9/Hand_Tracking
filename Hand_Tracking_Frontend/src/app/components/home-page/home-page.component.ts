import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {ServiceCallService} from "../../http/service-call.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Username:string;

  constructor(private downloads: ServiceCallService) {
    debugger
  }
  ngOnInit(): void {
    this.Username = 'Tickets';

  }
  showActionPop: boolean = false;
  Action: any;
  rowData: any;
  addActions(ticket: any){
    this.showActionPop = true;
    this.rowData = ticket;
  }
  downloadFile(){
    debugger
      this.downloads.downloadFile('example.txt');
  }


}


