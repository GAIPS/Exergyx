import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision-panel',
  templateUrl: './decision-panel.component.html',
  styleUrls: ['./decision-panel.component.scss']
})
export class DecisionPanelComponent implements OnInit {

  constructor() { }
  title: string = "DECISION PANEL";

  ngOnInit(): void {
  }

}
