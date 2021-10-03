import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-view',
  templateUrl: './final-view.component.html',
  styleUrls: ['./final-view.component.scss']
})
export class FinalViewComponent implements OnInit {

  public isWin: boolean = false;
  constructor() { }

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

  }

}
