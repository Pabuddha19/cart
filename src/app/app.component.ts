import { BodyComponent } from './myComponents/body/body.component';
import { AfterViewInit, Component, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(BodyComponent) data: any;

  ngAfterViewInit() {}
}
