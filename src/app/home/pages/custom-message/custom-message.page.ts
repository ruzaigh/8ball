import { Component, OnInit} from '@angular/core';
import {MessageService} from "../../../services/message.service";
import {Message} from "../../../services/message.model";
import {AuthService} from "../../../services/auth.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-custom-message',
  templateUrl: './custom-message.page.html',
  styleUrls: ['./custom-message.page.scss'],
})
export class CustomMessagePage implements OnInit {
  defaultMessage: Array<Message> | any;
  constructor(
    private messageService: MessageService,
  ) {
  }

  ngOnInit() {
    this.defaultMessages();
  }

  defaultMessages() {
    this.defaultMessage = this.messageService.defaultMessages();
  }


}
