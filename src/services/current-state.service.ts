import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentStateService {

  infoActive: BehaviorSubject<boolean>;
  decisionActive: BehaviorSubject<boolean>;
  historyActive: BehaviorSubject<boolean>;


  constructor() {
    this.infoActive = new BehaviorSubject<boolean>(false);
    this.decisionActive = new BehaviorSubject<boolean>(false);
    this.historyActive = new BehaviorSubject<boolean>(false);
  }

    isFirstRun = true;
  

  public updateMenuSelection(option: string) {

    if (option === "info") {
      this.infoActive.next(true);
      this.decisionActive.next(false);
      this.historyActive.next(false);
    }
    else if (option === "decision") {
      this.infoActive.next(false);
      this.decisionActive.next(true);
      this.historyActive.next(false);
    }
    else if (option == "history") {
      this.infoActive.next(false);
      this.decisionActive.next(false);
      this.historyActive.next(true);
    }
    else {
      this.infoActive.next(false);
      this.decisionActive.next(false);
      this.historyActive.next(false);
    }
  }
}
