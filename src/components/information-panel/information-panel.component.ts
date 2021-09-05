import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private gameModelService: GameModelService, private playerVariables: PlayerVariablesService) { 
    this.PlayerVariables = playerVariables;
  }
  
  
  ngOnInit(): void {
    
    this.value = Math.floor((this.PlayerVariables.co2_emissions * 25) / 100);
    this.happiness = Math.floor((this.PlayerVariables.utility * 25) / 100);
  }

}
