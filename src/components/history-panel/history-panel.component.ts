import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CurrentStateService } from 'src/services/current-state.service';

@Component({
  selector: 'app-history-panel',
  templateUrl: './history-panel.component.html',
  styleUrls: ['./history-panel.component.scss']
})
export class HistoryPanelComponent implements OnInit {

  constructor(currentState: CurrentStateService) 
  {
    currentState.isOpened.next(true);
   }
  title: string = "HISTORY PANEL";

  ngOnInit(): void {
  }

}
