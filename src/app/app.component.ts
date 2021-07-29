import { Component, OnInit } from '@angular/core';
import { CurrentStateService } from 'src/services/current-state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'exergyX';
  infoActive = false;
  decisionActive = false;
  historyActive = false;

  constructor(private service: CurrentStateService) {

  }

  ngOnInit() {
    var option = localStorage.getItem("optionSelected");
    if (option != null && option != "" && option != '') {
      this.service.updateMenuSelection(option);
    }
    this.infoActive = this.service.infoActive;
    this.decisionActive = this.service.decisionActive;
    this.historyActive = this.service.historyActive;
  }



  public updateButtons(button: string) {
    this.service.updateMenuSelection(button);

    this.infoActive = this.service.infoActive;
    this.decisionActive = this.service.decisionActive;
    this.historyActive = this.service.historyActive;

    localStorage.setItem("optionSelected", button);
  }

}
