import {Component, OnInit, ViewChild} from '@angular/core';
import {BallComponent} from "../components/ball/ball.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // @ts-ignore
  @ViewChild(BallComponent, {static: true}) ball: BallComponent;
  constructor() { }

  ngOnInit() {
  }


}
