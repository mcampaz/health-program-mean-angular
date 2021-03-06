import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HealthProgram1Component } from './health-program1/health-program1.component';
import { HealthProgram2Component } from './health-program2/health-program2.component';
import { HealthProgram3Component } from './health-program3/health-program3.component';
import { HealthProgram4Component } from './health-program4/health-program4.component';
import { HealthFormComponent } from './health-form/health-form.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { AthleteResultComponent } from './athlete-result/athlete-result.component';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { AthleteService } from '../services/athlete.service';


const routes = [
    { path: '', component: HealthFormComponent },
    { path: 'athlete-result', component: AthleteResultComponent },
    { path: 'survey-form', component: SurveyFormComponent },
    { path: 'health-program1', component: HealthProgram1Component },
    { path: 'health-program2', component: HealthProgram2Component },
    { path: 'health-program3', component: HealthProgram3Component },
    { path: 'health-program4', component: HealthProgram4Component },
    { path: 'athlete-list', component: AthleteListComponent }
  ];

var currentAthlete: ContentScriptGlobalScope;

@NgModule({
  declarations: [
    AppComponent,
    HealthProgram1Component,
    HealthProgram2Component,
    HealthProgram3Component,
    HealthProgram4Component,
    HealthFormComponent,
    SurveyFormComponent,
    AthleteResultComponent,
    AthleteListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AthleteService],
  bootstrap: [AppComponent]
})

export class AppModule { }
