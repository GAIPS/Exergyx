import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameModelService } from 'src/services/game-model.service';
import { PlayerVariablesService } from 'src/services/player-variables.service';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.scss']
})
export class InformationPanelComponent implements OnInit {

  title: string = "INFORMATION PANEL";
  value: number = 0;
  happiness: number = 0;

  PlayerVariables: PlayerVariablesService;
  Model: GameModelService

  constructor(private gameModelService: GameModelService, private playerVariables: PlayerVariablesService) { 
    this.PlayerVariables = playerVariables;
    this.Model = gameModelService;
  }
  
  
  ngOnInit(): void {
    
    this.value = Math.floor((this.PlayerVariables.co2_emissions * 25) / 100);
    this.happiness =Math.floor(this.PlayerVariables.utility);
    console.log(this.happiness);
  }

  public getGdpDiff() {
    var gdpArray = this.Model.pib_do_ano;
    var diff = 0;
    if (gdpArray.length > 2) {
      diff = gdpArray[gdpArray.length-1] - gdpArray[gdpArray.length-2];
    } 
    return diff;
  }

  public getHappinessDiff() {
    var happinessArray = this.Model.utilidade_do_ano;
    var diff = 0;
    if(happinessArray.length > 2) {
      diff = happinessArray[happinessArray.length-1] - happinessArray[happinessArray.length-2];
    }
    return diff;
  }

  public getExpenditureDiff() {
    var expendArray = this.Model.consumo_do_ano;
    var diff = 0;
    if (expendArray.length > 2) {
      diff = expendArray[expendArray.length-1] - expendArray[expendArray.length-2];
    }
    return diff;
  }

}
