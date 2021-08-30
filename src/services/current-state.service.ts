import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentStateService {

  constructor() { }

  isFirstRun = true;
  infoActive = false;
  decisionActive = false;
  historyActive = false;

  public updateMenuSelection(option: string) {

    if (option === "info") {
      this.infoActive = true;
      this.decisionActive = false;
      this.historyActive = false;
    }
    else if (option === "decision") {
      this.infoActive = false;
      this.decisionActive = true;
      this.historyActive = false;
    }
    else if (option == "history") {
      this.infoActive = false;
      this.decisionActive = false;
      this.historyActive = true;
    }
    else {
      this.infoActive = false;
      this.decisionActive = false;
      this.historyActive = false;
    }
  }
}
