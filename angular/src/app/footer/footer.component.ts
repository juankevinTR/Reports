import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  copyright: any = 2020;
  author: any = {name: 'Juan Kevin', surname: 'Trujillo'};
}
