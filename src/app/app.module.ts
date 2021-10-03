import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DecisionPanelComponent } from 'src/components/decision-panel/decision-panel.component';
import { HistoryPanelComponent } from 'src/components/history-panel/history-panel.component';
import { InformationPanelComponent } from 'src/components/information-panel/information-panel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ChartsModule } from 'ng2-charts';
import {MatSortModule} from '@angular/material/sort';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { WelcomePageComponent } from 'src/components/welcome-page/welcome-page.component';
import { FinalViewComponent } from 'src/components/final-view/final-view.component';



@NgModule({
  declarations: [
    AppComponent,
    DecisionPanelComponent,
    HistoryPanelComponent,
    InformationPanelComponent,
    WelcomePageComponent,
    FinalViewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    ChartsModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
