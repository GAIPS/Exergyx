import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformationPanelComponent } from 'src/components/information-panel/information-panel.component';
import { DecisionPanelComponent } from 'src/components/decision-panel/decision-panel.component';
import { HistoryPanelComponent } from 'src/components/history-panel/history-panel.component';
import { WelcomePageComponent } from 'src/components/welcome-page/welcome-page.component';
import { FinalViewComponent } from 'src/components/final-view/final-view.component';
import { TutorialComponent } from 'src/components/tutorial/tutorial.component';
import { CreditsInfoComponent } from 'src/components/credits-info/credits-info.component';
import { AdminPanelComponent } from 'src/components/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'information', component: InformationPanelComponent },
  { path: 'decision', component: DecisionPanelComponent },
  { path: 'history', component: HistoryPanelComponent },
  { path: 'result', component: FinalViewComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'credits', component: CreditsInfoComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: '**', component: WelcomePageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
