import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentStateService } from 'src/services/current-state.service';
import { ServerService } from 'src/services/server.service';

@Component({
  selector: 'app-final-view',
  templateUrl: './final-view.component.html',
  styleUrls: ['./final-view.component.scss']
})
export class FinalViewComponent implements OnInit {

  public isWin: boolean = false;
  public showId: boolean = false;
  public submissionId: number = 0;

  constructor(private router: Router, private serverService: ServerService, private currentState: CurrentStateService) { }

  ngOnInit(): void {
    var val = sessionStorage.getItem("isWin");
    switch (val) {
      case "true":
        this.isWin = true;
        break;
    
      case "false":
        this.isWin = false;
        break;
      
      default:
        break;
    }
    this.getEvents();
    this.createEvent();
  }

  createEvent() {
    let jsonObject: any = {}; 
    let map = this.currentState.getStoreState(); 
    map.forEach((value, key) => {  
        jsonObject[key] = value;  
    });  

    let obj = JSON.stringify(jsonObject);
    
    this.serverService.createEvent(obj).then(() => {
      this.getEvents();
    });
  }

  getEvents() {
    this.serverService.getEvents().then((response: any) => {
    });
  }

  public getSubmissionId() {
    this.showId = true;
    this.serverService.getEvents().then((response: any) => {
      let key = Object.keys(response[response.length-1])[0];
      this.submissionId = response[response.length-1][key];
    });
  }
}
