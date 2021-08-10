import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Politic } from 'src/interfaces/politic';
import { GameModelService } from 'src/services/game-model.service';
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

  constructor( gameModel: GameModelService, public dialog: MatDialog) {
    this.politics =  gameModel.initPolitics();
    this.selectedPolitic = this.politics[0];
    console.log(this.selectedPolitic.desc);
   }
  
  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogLayoutComponent);
  }

  public addToCart(id: number) {
    this.politics.forEach(element => {
      if(element.id === id) {
        this.cartCollection.add(element);
        return;
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
    this.cartCollection.delete(item);
  }

}