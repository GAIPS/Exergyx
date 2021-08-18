import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Politic } from 'src/interfaces/politic';
import { GameModelService } from 'src/services/game-model.service';
import { PlayerVariablesService } from 'src/services/player-variables.service';
import { DialogLayoutComponent } from '../dialog-layout/dialog-layout.component';

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
  displayedColumns = ["Policy Name", "Economy Sector", "Price", "getdetails"];
  clickedRow = new Set<Politic>();
  cartCollection = new Set<Politic>();
  use = false;
  installedPower = 0;
  powerToInstall = 0;
  totalPowerCost = 0;
  addedPoliticsCost = 0;
  remainingBudget = 0;
  PlayerVariables: PlayerVariablesService;


  constructor( playerVariable: PlayerVariablesService , gameModel: GameModelService, public dialog: MatDialog) {
    this.PlayerVariables = playerVariable;
    this.politics =  gameModel.initPolitics();
    this.selectedPolitic = this.politics[0];
    this.installedPower = playerVariable.total_installed_power;
    this.remainingBudget = gameModel.pib_do_ano[gameModel.ano_atual_indice]*0.01 * 1000;
   }
  
  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogLayoutComponent);
  }

  public addToCart(id: number) {
    this.politics.forEach(element => {
      if(element.id === id) {
        var tempcalc = this.remainingBudget-element.price;
        if(tempcalc >= 0) {
          element.isUsed=!element.isUsed;
          this.cartCollection.add(element);
          this.addedPoliticsCost += element.price;
          this.remainingBudget -= element.price;
          return;
        }
      }
    });
  }

  public changeSelectedPolicy(row: any) {
    this.clickedRow.clear();
    this.politics.forEach(x => {
      if(x.id === row.id) {
        this.selectedPolitic = x;
        this.clickedRow.add(row);
        return;
      }
    });
  }

  public isInCart(row: any) {
    console.log(row);

  }

  public removeFromCart(item: Politic) {
    item.isUsed=!item.isUsed;
    this.cartCollection.delete(item);
    this.addedPoliticsCost -= item.price;
    this.remainingBudget += item.price;
  }

  public reducePower() {
    var ticCost = 0.1*this.PlayerVariables.cost_per_gigawatt;
    var tempVal = this.powerToInstall - 0.1;
    if(tempVal >= 0) {
      this.powerToInstall = tempVal;
      this.remainingBudget += ticCost; 
      this.totalPowerCost = this.powerToInstall * this.PlayerVariables.cost_per_gigawatt;
    }
    else {
      this.powerToInstall = 0;
    }
  }

  public addPower() {
    var ticCost = 0.1*this.PlayerVariables.cost_per_gigawatt;
    var tempVal = this.powerToInstall + 0.1;
    var tempcalc= this.remainingBudget - ticCost;
    if(tempcalc >= 0) {
      if(tempVal <= 10) {
        this.remainingBudget = tempcalc;
        this.powerToInstall = tempVal;
        this.totalPowerCost = this.powerToInstall * this.PlayerVariables.cost_per_gigawatt;
        
      }
      else {
        this.powerToInstall = 10;
      }
    }
  }

}