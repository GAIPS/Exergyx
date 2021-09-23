import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartPluginsOptions } from 'chart.js';
import { Politic } from 'src/interfaces/politic';
import { CurrentStateService } from 'src/services/current-state.service';
import { GameModelService } from 'src/services/game-model.service';
import { PlayerVariablesService } from 'src/services/player-variables.service';


@Component({
  selector: 'app-history-panel',
  templateUrl: './history-panel.component.html',
  styleUrls: ['./history-panel.component.scss']
})
export class HistoryPanelComponent implements OnInit {

  public dataArray: Array<any> = [];
  public happinessArray: Array<any> = [];
  public policiesArray: Map<number,Set<Politic>> = new Map<number, Set<Politic>>(); 
  public selectedYearPolicies: Array<Politic> =  [];
  public displayedColumns = ["Policy Name", "Economy Sector", "Price"];
  public currentTabYear = 2019;
  public currentTabIndex = 0;
  public selectedYearInstalledPower: number = 0;
  public selectedYearPowerCost:number = 0; 


  constructor(currentState: CurrentStateService, private playerVariables: PlayerVariablesService, private model: GameModelService) 
  {
    currentState.isOpened.next(true);
    this.model.emissoes_totais_do_ano.forEach(element => {
      let convertedValue = element/1000000000;
      let roundedValue = Math.round(convertedValue * 100) / 100;
      this.dataArray.push(roundedValue); 
    });
    this.dataArray.shift();
    this.model.utilidade_do_ano.forEach(element => {
      let roundedValue = Math.round(element*100)/100;
      this.happinessArray.push(roundedValue);
    })
    this.happinessArray.shift();
    console.log(this.happinessArray);

    this.policiesArray = this.playerVariables.policiesHistoryArray;
    var tempSet = this.policiesArray.get(this.currentTabYear);
    this.selectedYearPolicies = Array.from(tempSet ? tempSet : []);

    this.selectedYearInstalledPower = playerVariables.powerToInstallHistoryArray[this.currentTabIndex+1] | 0;
    this.selectedYearPowerCost = playerVariables.costOfInstallationHistoryArray[this.currentTabIndex+1] | 0;
    
   }

  title: string = "HISTORY PANEL";

  
  public tabs: Array<any> = this.playerVariables.yearsArray;

  public barChartOptions: ChartOptions = {
    legend: {
      labels: {
          filter: function(legendItem, chartData) {
           if (legendItem.datasetIndex === 0) {
             return false;
           }
          return true;
          }
       }
   },
    responsive: true,
    elements: {
      point: {
        radius: 5
      }
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Years'    
        }
      }],
      yAxes: [{
        id: "y",
        position: 'left',
        type: 'linear',
        ticks: {
          max:80,
          beginAtZero:true
        },
        scaleLabel: {
          display: true,
          labelString: 'Emissions MT'    
        }
      },
      {
        id: "y1",
        position: 'right',
        type: 'linear',
        ticks: {
          min: 0,
          beginAtZero:true,
        },
        scaleLabel: {
          display: true,
          labelString: 'Happiness'    
        },
        gridLines: {
          drawOnChartArea: true
      }
      }]
    },
  };
  public barChartLabels = this.playerVariables.yearsArray;
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    {data:[14,14,14,14,14,14,14,14,14], label: 'Goal', fill: false,   yAxisID: 'y', pointRadius:0},
    {data: this.dataArray, label: 'Co2 Emissions', fill: false,   yAxisID: 'y'},
    {data: this.happinessArray, label: 'Happiness', fill: false, yAxisID: 'y1' }
    
  ];

  ngOnInit(): void {
    
  }
  onTabChange(event: MatTabChangeEvent) {
    this.currentTabIndex = event.index;
    this.currentTabYear = parseInt(event.tab.textLabel);
    var tempSet = this.policiesArray.get(this.currentTabYear);
    this.selectedYearPolicies = Array.from(tempSet ? tempSet : []);
    this.selectedYearInstalledPower = this.playerVariables.powerToInstallHistoryArray[this.currentTabIndex+1];
    this.selectedYearPowerCost = this.playerVariables.costOfInstallationHistoryArray[this.currentTabIndex+1];
    console.log(this.playerVariables.powerToInstallHistoryArray);
  }
  onTabChange2(event: MatTabChangeEvent) {
    
  }
}

