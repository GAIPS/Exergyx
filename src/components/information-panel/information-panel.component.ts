import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { naturalEventNew } from 'src/interfaces/naturalEventNew';
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
  currentRatioDiff = 0;
  renewableRatioArray: Array<number> = [];

  PlayerVariables: PlayerVariablesService;
  Model: GameModelService;
  currentNew: naturalEventNew = {
    id:0,
    title: "Nothing Relevant happened",
    description: "Nothing relevant to show right now.",
    effect: "",
    type: "Global",
    amount: 0,
    used: false,
    affects:""
  };



  constructor(private gameModelService: GameModelService, private playerVariables: PlayerVariablesService, private currentState: CurrentStateService) { 
    this.PlayerVariables = playerVariables;
    this.Model = gameModelService;
    currentState.isOpened.next(true);
    this.loadNews();
  }
  
  ngOnInit(): void {
    
    this.value = Math.floor((this.PlayerVariables.co2_emissions * 25) / 100);
    this.happiness =this.PlayerVariables.utility;

    this.currentRatio = this.getRenewableRatio();
    this.currentRatioDiff = this.getRenewableRatioDiff();
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
    var historyArray = this.PlayerVariables.powerToInstallHistoryArray;

    var diff = 0;
    if(historyArray.length > 1) {
      
      diff = historyArray[historyArray.length-1] - historyArray[historyArray.length-2] < 0 ? 0 : historyArray[historyArray.length-1] - historyArray[historyArray.length-2];
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
    if(renewableRatioArray.length > 1) {
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

  public loadNews() {
    var eventsArray = this.Model.getEvents();
    eventsArray.forEach(e => {
      if(e.used === true) {
       let i = eventsArray.indexOf(e);
       if(i > -1) {
         eventsArray.splice(i,1);
       }
      }
    });
    let yearsArray = this.playerVariables.yearsArray;
    let compareIndex = yearsArray.indexOf(this.playerVariables.current_year);
    if((compareIndex > 0) && (compareIndex % 2 != 0)) {
      var randomIndex = Math.floor(Math.random() * eventsArray.length);
      this.currentState.updateActiveNew(this.playerVariables.current_year, eventsArray[randomIndex]);
      this.currentState.activeNew.subscribe(eventNew => this.currentNew = eventNew);
      this.Model.naturalEvents.forEach(e => {
        if (e === this.currentNew) {
          e.used = true;
        }
      });
    }
  }

  public getBudgetDiff() {
    var budgetArray = this.playerVariables.budgetHistory;
    var diff = 0;
    if(budgetArray.length>1) {
      diff = budgetArray[budgetArray.length-1] - budgetArray[budgetArray.length-2];
    }
    return diff;
  }

}
