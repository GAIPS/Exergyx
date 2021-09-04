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
    service.infoActive.subscribe((newBool: boolean) => { this.infoActive = newBool; });
    service.decisionActive.subscribe((newBool: boolean) => { this.decisionActive = newBool; });
    service.historyActive.subscribe((newBool: boolean) => { this.historyActive = newBool; });

  }

  ngOnInit() {
    var option = localStorage.getItem("optionSelected");
    if (option != null && option != "" && option != '') {
      this.service.updateMenuSelection(option);
    }
    this.service.infoActive.subscribe((newBool: boolean) => { this.infoActive = newBool; });
    this.service.decisionActive.subscribe((newBool: boolean) => { this.decisionActive = newBool; });
    this.service.historyActive.subscribe((newBool: boolean) => { this.historyActive = newBool; });

    sessionStorage.setItem("firstRunFlag", "true");
  }



  public updateButtons(button: string) {
    this.service.updateMenuSelection(button);

    this.service.infoActive.subscribe((newBool: boolean) => { this.infoActive = newBool; });
    this.service.decisionActive.subscribe((newBool: boolean) => { this.decisionActive = newBool; });
    this.service.historyActive.subscribe((newBool: boolean) => { this.historyActive = newBool; });
    localStorage.setItem("optionSelected", button);
  }

}
