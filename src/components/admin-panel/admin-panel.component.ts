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
  public count: number = 0;
  public lastDate = "";
  public title = "Admin Panel";


  ngOnInit(): void {
   this.serverService.getEvents().then((response: any) => {
     this.resultObject = response;
     let keys = Object.keys(this.resultObject);
     this.count = keys.length;
     this.lastDate = this.resultObject[keys.length-1].timeStamp;
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

  downloadCSV() {
    if(this.resultObject != null) {
      const replacer = (key: any, value: any) => (value === null ? '' : value);
      let keys = Object.keys(this.resultObject);
      var header = this.getCsvHeader();
      var csv = [];

      for (var innerObjKey in keys) {
        let userEntry = this.resultObject[innerObjKey]; // each submited user entry
        let stateObject = JSON.parse(userEntry.state); 
        let stateObjectYearsKeys = Object.keys(stateObject);

        for (var yearKey in stateObjectYearsKeys) {
          let year = stateObjectYearsKeys[yearKey];
          let yearState = stateObject[year].state;
          let yearDecision = stateObject[year].decisions;

          csv.push(header.map((fieldName) => {
            let content = userEntry[fieldName] ? userEntry[fieldName] : (yearState[fieldName] ? yearState[fieldName] : yearDecision[fieldName]);
            if(fieldName === "Year") {
              content = year;
            }
            else if(fieldName === "state") {
              content = "State";
            }
            else if(fieldName === "Decisions") {
              content = "Decisions"
            }
            return JSON.stringify(content, replacer);
          })
          .join(';'));
        }
      }

      csv.unshift(header.join(';'));
      const csvArray = csv.join('\r\n');

      const a = document.createElement('a');
      const blob = new Blob([csvArray], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);

      a.href = url;
      a.download = 'myFile.csv';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }
  }

  getCsvHeader() {
    let headerKeys = Object.keys(this.resultObject[0]);
      var header: any[] = [headerKeys[0], "Year", headerKeys[1]];
      let userEntry = this.resultObject[0]; // each submited user entry
      let userObject = JSON.parse(userEntry.state);
      let years = Object.keys(userObject);
      let year = years[0];
      let yearState = userObject[year].state;
      let yearDecision = userObject[year].decisions;
      for (var key in yearState) {
        header.push(key);
      }
      header.push("Decisions");
      for (var dKey in yearDecision) {
        header.push(dKey);
      }
      header.push(headerKeys[2]);
      return header;
  }
}
