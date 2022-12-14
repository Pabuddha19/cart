import { CountService } from 'src/app/count.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input()notifyValue:any

  constructor(public count: CountService) {}

  ngOnInit(): void {}
}
