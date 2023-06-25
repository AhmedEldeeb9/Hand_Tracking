
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  displayConfirm: boolean | undefined;
  content: any;
  constructor(

  ) {}

  ngOnInit(): void {
this.content="Vodafone uses cookies on its website. A cookie is a small file that is sent by Vodafone or a third party engaged by Vodafone to your browser. This is stored on your computer with the aim that Vodafone (or a third party) can recognize your browser and track what has happened in the past on the website.\n" +
  "\n" +
  "This website uses:\n" +
  "\n" +
  "Functional cookies: These cookies ensure that the website works properly. They remember if you are logged in already or which settings you have provided before. For this kind of cookies it is not required to ask for permission because they are required for the website to work.\n" +
  "\n" +
  "Analytical cookies: With this type of cookie we can track visitor statistics. Based on these statistics we can see information like your location and which screen size you are using. This information makes it possible to constantly improve the usability of our website. Because the impact of analytical cookies on your privacy is very limited, you do not have to give permission and you can take advantage of the benefits of these cookies.\n" +
  "\n" +
  "If you do not want Vodafone to use these cookies, you can do the following:\n" +
  "\n" +
  "Remove the cookies from your browser\n" +
  "Change the settings of your browser so that cookies are not accepted Automatically\n" +
  "If the cookie settings are set too severe it may be that the Vodafone website and other websites may not function properly."

  }


  ConvermDialog($event: MouseEvent) {

  }

  displayDialog() {
    debugger
    this.displayConfirm=true
  }
}
