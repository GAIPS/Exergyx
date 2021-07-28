import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformationPanelComponent } from 'src/components/information-panel/information-panel.component';
import { DecisionPanelComponent } from 'src/components/decision-panel/decision-panel.component';
import { HistoryPanelComponent } from 'src/components/history-panel/history-panel.component';

const routes: Routes = [
  { path: 'information', component: InformationPanelComponent },
  { path: 'decision', component: DecisionPanelComponent },
  { path: 'history', component: HistoryPanelComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
