import { Message } from '../models/message';
import { DataService } from './../services/data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allMessages : Message[] = [];

  constructor(private data : DataService) {
    //get data
    data.getAllMessages().subscribe(list => {
      console.log("messages", list);
      this.allMessages = list;
    });
  }

}
