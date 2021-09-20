import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
  constructor(currentState: CurrentStateService, private playerVariables: PlayerVariablesService, private model: GameModelService) 
  {
    currentState.isOpened.next(true);
    this.model.emissoes_totais_do_ano.forEach(element => {
      let convertedValue = element/1000000000;
      let roundedValue = Math.round(convertedValue * 100) / 100;
      this.dataArray.push(roundedValue); 
    });
    this.dataArray.shift();
    console.log(this.dataArray);
   }

  title: string = "HISTORY PANEL";
  public barChartOptions = {
    responsive: true,
    elements: {
      point: {
        radius: 5
      }
    }
      // scales: {
      //   xAxes:[ {
      //     display: true,
      //     type: 'Year'
      //   }],
      //     yAxes: [{
      //       display: true,
      //       type: 'Emissions (MT)'
      //     }]
      // }
  };
  public barChartLabels = this.playerVariables.yearsArray;
  public barChartLegend = true;
  public barChartData = [
    {data: this.dataArray, label: 'Co2 Emissions', fill: false},
    {data:[14,14,14,14,14,14,14,14,14], label: 'Goal', fill: false}
  ];

  ngOnInit(): void {
    
  }
}

