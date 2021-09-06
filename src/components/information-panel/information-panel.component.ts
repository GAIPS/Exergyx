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
    this.happiness =this.PlayerVariables.utility;
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

  public getInstalledPowerDiff() {
    this.Model.potencia_do_ano_solar[this.Model.ano_atual_indice] + 
    this.Model.potencia_do_ano_vento_offshore[this.Model.ano_atual_indice] + 
    this.Model.potencia_do_ano_vento[this.Model.ano_atual_indice] + 
    this.Model.POTENCIA_ANUAL_HIDRO;

    var diff = 0;
    if(this.Model.potencia_do_ano_solar.length > 2) {
      var oldVal = this.Model.potencia_do_ano_solar[this.Model.potencia_do_ano_solar.length-2] + 
      this.Model.potencia_do_ano_vento_offshore[this.Model.potencia_do_ano_vento_offshore.length-2] +
      this.Model.potencia_do_ano_vento[this.Model.potencia_do_ano_vento.length-2] + this.Model.POTENCIA_ANUAL_HIDRO;

      var newVal = this.Model.potencia_do_ano_solar[this.Model.potencia_do_ano_solar.length-1] + 
      this.Model.potencia_do_ano_vento_offshore[this.Model.potencia_do_ano_vento_offshore.length-1] +
      this.Model.potencia_do_ano_vento[this.Model.potencia_do_ano_vento.length-1] + this.Model.POTENCIA_ANUAL_HIDRO;

      diff = newVal - oldVal;
    }
    return diff;
  }

  public getRenweableElectricityDiff() {
    var renEleArray = this.Model.eletricidade_renovavel_do_ano;
    var diff = 0;
    if (renEleArray.length > 2) {
      diff = renEleArray[renEleArray.length-1] - renEleArray[renEleArray.length-2];
    }
    return diff;
  }

}
