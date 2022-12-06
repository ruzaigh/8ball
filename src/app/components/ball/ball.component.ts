import { Component } from '@angular/core';
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent {
  public eightBall: string | any;
  public clickBall: boolean = false;
  constructor(
    private messageService: MessageService,
  ) { }

  generateRandomQuestion() {
    this.clickBall = true;
    const randomQuestion = Math.floor(Math.random() * 8);
    this.eightBall = '';
    this.eightBall = this.messageService.defaultMessages()[0].messages[randomQuestion].message;
  }
}
