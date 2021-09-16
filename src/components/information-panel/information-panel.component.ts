import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CurrentStateService } from 'src/services/current-state.service';

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
  currentRatio = 0;
  renewableRatioArray: Array<number> = [];

  PlayerVariables: PlayerVariablesService;
  Model: GameModelService



  constructor(private gameModelService: GameModelService, private playerVariables: PlayerVariablesService, private currentState: CurrentStateService) { 
    this.PlayerVariables = playerVariables;
    this.Model = gameModelService;
    currentState.isOpened.next(true);
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

  public getRenewableRatio() {
    if(this.Model.eletricidade_nao_renovavel_do_ano.length > 0) {
      var total_energy = this.Model.eletricidade_nao_renovavel_do_ano[this.Model.eletricidade_nao_renovavel_do_ano.length-1] + this.PlayerVariables.renewable_energy;
      var result = Math.min(((this.PlayerVariables.renewable_energy/total_energy) * 100), 100);
      this.currentRatio = result;
      this.PlayerVariables.renewableRatioArray.push(result);
      return result;
    }
    else {
      return 33.95;
    }
  }

  public getRenewableRatioDiff() {
    var renewableRatioArray =  this.PlayerVariables.renewableRatioArray;
    var diff = 0;
    if(renewableRatioArray.length > 2) {
      diff = renewableRatioArray[renewableRatioArray.length-1] - renewableRatioArray[renewableRatioArray.length-2];
    }
    return diff;
  }

  public getEmissionsDiff() {
    var emissionsArray = this.Model.emissoes_totais_do_ano;
    var diff = 0;
    if (emissionsArray.length > 2) {
      diff = emissionsArray[emissionsArray.length-1] - emissionsArray[emissionsArray.length-2];
    }
    return diff * Math.pow(10, -9);
  }

  public getEfficiencyDiff() {
    var efficiencyArray = this.Model.eficiencia_agregada_do_ano;
    var diff = 0;
    if (efficiencyArray.length > 2) {
      diff = efficiencyArray[efficiencyArray.length-1] - efficiencyArray[efficiencyArray.length-2];
    }
    return diff*100;
  }

}
