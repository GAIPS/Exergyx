import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { CurrentStateService } from 'src/services/current-state.service';
import { ServerService } from 'src/services/server.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor(private currentState: CurrentStateService, private snackBar: MatSnackBar, private serverService: ServerService ) { }

  public authenticated = this.currentState.isAuthenticated.value;
  public username = "";
  public password = "";
  public f!: NgForm;
  private resultObject: any = null;
  public firstyear: any = null;
  public firstyearValues = [];
  public map = new Map<string, string>();
  public map2 = new Map<string, string>();
  public yearArray = ["2019","2023", "2027", "2031", "2035", "2039", "2043", "2047", "2051"];


  ngOnInit(): void {
   this.serverService.getEvents().then((response: any) => {
     this.resultObject = response;
   });

  }

  onSubmit(form: any) {
    if(form.valid) {
      let isValid = this.currentState.checkLogin(form.value.username, form.value.password);
      if(isValid) {
        this.currentState.isAuthenticated.next(true);
        this.authenticated = this.currentState.isAuthenticated.value;
      }
      else {
        this.showToaster();
      }
    }
    else {
      this.showToaster();
    }
  }

  public showToaster() {
    this.snackBar.open("Invalid credentials", "close", {
      duration: 3000,

    });
  }

  loadResults() {
    if(this.resultObject != null) {
      let text = "-------- Report --------";
      let keys = Object.keys(this.resultObject);

      for (var innerObjKey in keys) {
        let userEntry = this.resultObject[innerObjKey]; // each submited user entry
        text += `\n >>>>>>>>>> SUBMISSION #${userEntry.id} <<<<<<<<<<`;
        text += "\n";
        let userObject = JSON.parse(userEntry.state);
        let innerKeys = Object.keys(userObject);

        for (var keyEntry in innerKeys) {
          let year = innerKeys[keyEntry];
          text += `\n >>> Year: ${year}`;
          let yearState = userObject[year].state;
          let yearDecision = userObject[year].decisions;

          text += `\n   --------------------`;
          text += `\n   |   System State   |`;
          text += `\n   --------------------`;

          for (var key in yearState) {
            let value = yearState[key];
            text += `\n     ${key} --> ${value}`;
          }
          text += `\n   ----------------------`;
          text += `\n   |  Player Decisions  |`;
          text += `\n   ----------------------`;

          for (var dKey in yearDecision) {
            let value = yearDecision[dKey];
            this.map2.set(dKey, value);
            text += `\n     ${dKey} --> ${value}`;
          }
          text += `\n`;
          text += `\n`;
        }
        
      }
      this.download(text);
    }
  }

  download(text: string) {
    let file = new Blob([text], {type: '.txt'});
    let a = document.createElement("a"),
            url = URL.createObjectURL(file);
    a.href = url;
    let ts = moment().format('DD-MM-YYYY-H:mm');
    a.download = `Report_${ts}`;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0); 
}
}
