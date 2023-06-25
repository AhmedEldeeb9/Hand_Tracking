import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {GMapModule} from "primeng/gmap";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {TabViewModule} from "primeng/tabview";
import {CalendarModule} from "primeng/calendar";
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    GMapModule,
    DropdownModule,
    InputNumberModule,
    ConfirmDialogModule,
    RadioButtonModule,
    TableModule,
    ToastModule,
    TabViewModule,
    CalendarModule,

  ],
  providers: [

  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
// AOT compilation support

