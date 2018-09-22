import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  constructor(private router: Router) { }

  createHealthSurvey(healthForm: FormGroup){
    debugger;
    console.log(healthForm);
    let myNumber = 3;
    switch (myNumber) {
      case 1:
        this.router.navigate(['health-program1']);
      case 2:
        this.router.navigate(['health-program2']);
      case 3:
        this.router.navigate(['health-program3']);
      default:
        this.router.navigate(['health-program4']);
    }
  }
  ngOnInit() {
  }

}
