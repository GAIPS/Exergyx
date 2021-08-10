import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Shares } from 'src/interfaces/shares';
import { PlayerVariablesService } from 'src/services/player-variables.service';

@Component({
  selector: 'app-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.scss']
})
export class DialogLayoutComponent implements OnInit {

  displayedColumns = ['Economy Sector', 'Exergy Shares', 'Eletrification'];
  dataSource: Shares[] = [];
  constructor(playerVariables: PlayerVariablesService ,public dialog: MatDialog) {
    this.dataSource = [
      {
        name: "Transports", 
        shares: playerVariables.economy_type_percentage_transportation , 
        eletrification: playerVariables.electrification_by_sector_percentage_transportation 
      },
      {
        name: "Industry", 
        shares: playerVariables.economy_type_percentage_industry, 
        eletrification: playerVariables.electrification_by_sector_percentage_industry
      },
      {
        name: "Residential", 
        shares: playerVariables.economy_type_percentage_residential, 
        eletrification: playerVariables.electrification_by_sector_percentage_residential
      },
      {
        name: "Services", 
        shares: playerVariables.economy_type_percentage_services, 
        eletrification: playerVariables.electrification_by_sector_percentage_services
      }
    ]
  }
 
  
  ngOnInit(): void {
  }

  public close() {
    setTimeout(()=>{this.dialog.closeAll();}, 200);
  }


}
