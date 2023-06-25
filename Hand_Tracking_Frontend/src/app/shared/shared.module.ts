import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MiddleHeaderComponent } from "./components/header/middle-header/middle-header.component";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";



@NgModule({
  declarations: [FooterComponent, HeaderComponent,
    NavBarComponent,
    MiddleHeaderComponent,
     ],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        RouterModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient],
            },
        }),
        DialogModule,
        ButtonModule,
        MenubarModule,
    ],

    exports: [
        FooterComponent,
        HeaderComponent,
        NavBarComponent,

    ]
})
export class SharedModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'assets/i18n/','.json')
}
