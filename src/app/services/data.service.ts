import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { firestore } from "firebase";
import {AngularFirestoreCollection,AngularFirestore} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  messages: Observable<Message[]>;
  messageCollection : AngularFirestoreCollection<Message>;

  constructor(private fb: AngularFirestore) { 
    this.messageCollection = fb.collection<Message>("posts");
  }

  public saveMessage(message: Message){
    
    var item = Object.assign({}, message);
    this.messageCollection.add(item);
  }

  retriveMessagesFromDB(){
    this.messages = this.messageCollection.valueChanges();
  }

  public getAllMessages(){
    this.retriveMessagesFromDB();
    return this.messages;
  }
}

