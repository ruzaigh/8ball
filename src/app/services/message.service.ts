import { Injectable } from '@angular/core';
import {Message} from "./message.model";
import {BehaviorSubject} from "rxjs";
import {AuthService} from "./auth.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // messages: Array<Message> = [];
  private messages$ = new BehaviorSubject<Message[]>([]);
  private defaultMessage: Array<Message> =[]
  constructor(
    // private http: HttpClient,
    private auth: AuthService
  ) {}
  userId: string | any;
  defaultMessages() {
    return this.defaultMessage =[
      {
        title: 'Default Messages',
        checked: true,
        messages: [
          {id: 1, message: 'It is certain'},
          {id: 2, message: 'It is decidedly so'},
          {id: 3, message: 'Without a doubt'},
          {id: 4, message: 'Yes definitely'},
          {id: 5, message: 'You may rely on it'},
          {id: 6, message: 'As I see it, yes'},
          {id: 7, message: 'Most likely'},
          {id: 8, message: 'Outlook good'},
          ]
      }
    ]
  }

  currentUserId(){
    return this.auth.userId().then(res => {
      this.userId = res;
    })

  }

  // createCustomeMessage(
  //   message: string
  // ) {
  //   let gerneratedId: string;
  //   const newMessage = new Message(
  //     Math.random().toString(),
  //     message,
  //     this.auth.userId ?? ''
  //   );
  //
  //   return this.http.post<{ name: string }>('https://todoapp-75f25-default-rtdb.firebaseio.com/notes.json',
  //     {...newNote, id: null})
  //     .pipe(
  //       switchMap((resData) => {
  //         gerneratedId = resData.name;
  //         return this.notes;
  //       }),
  //       take(1),
  //       tap(notes => {
  //         newNote.id = gerneratedId;
  //         this.notes.next(notes.concat(newNote));
  //       })
  //     );
  // }
}
