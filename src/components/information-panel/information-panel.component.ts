import { Component, Input, OnInit } from '@angular/core';
import { GameModelService } from 'src/services/game-model.service';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.scss']
})
export class InformationPanelComponent implements OnInit {

  PIB: number = 0; 
  constructor(private gameModelService: GameModelService) { }
  
  title: string = "INFORMATION PANEL";
  year: number = 2019;
  budget: number = 2000;
  ngOnInit(): void {
    
  }

}
