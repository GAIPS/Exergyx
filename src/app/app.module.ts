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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DecisionPanelComponent,
    HistoryPanelComponent,
    InformationPanelComponent,
  
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
