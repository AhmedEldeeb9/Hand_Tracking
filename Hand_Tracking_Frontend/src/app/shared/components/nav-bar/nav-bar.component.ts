import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedServiceService} from "../../../shared-service.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output("action") action: EventEmitter<any> = new EventEmitter();
  @Input("title") title : any;
  @Input("actionTitle") actionTitle : any;
  constructor() { }

  ngOnInit(): void {

  }

  doaction() {
    this.action.emit();
  }
}
