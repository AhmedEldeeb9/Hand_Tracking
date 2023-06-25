import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../../shared-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  desktopHeaderData: any;
  logo: any;
  constructor(
  ) {}

  ngOnInit(): void {

  }




}
