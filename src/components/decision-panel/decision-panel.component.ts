import { Component, OnInit } from '@angular/core';
import { Politic } from 'src/interfaces/politic';
import { GameModelService } from 'src/services/game-model.service';

@Component({
  selector: 'app-decision-panel',
  templateUrl: './decision-panel.component.html',
  styleUrls: ['./decision-panel.component.scss']
})
export class DecisionPanelComponent implements OnInit {

  title: string = "DECISION PANEL";
  // Temp values for testing
  year: number = 2019;
  budget: number = 2000;
  efficiency: number = 99;
  ratio: number = 32;
  politics: Array<Politic> = [];
  selectedPolitic: Politic | undefined;

  constructor( gameModel: GameModelService) {
   this.politics =  gameModel.initPolitics();
   this.selectedPolitic = this.politics[0];
   }
  


  ngOnInit(): void {

  }
}