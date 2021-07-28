import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  infoActive = false;
  decisionActive = false;
  historyActive = false;
  title = 'exergyX';
  
public updateButtons (button: string) {
  if(button === "info") {
    this.infoActive = true;
    this.decisionActive = false;
    this.historyActive = false;
  }
  else if (button === "decision") {
    this.infoActive = false;
    this.decisionActive = true;
    this.historyActive = false;
  }
  else if (button == "history") {
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
