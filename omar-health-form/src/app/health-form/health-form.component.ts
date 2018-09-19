import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Form } from '@angular/forms'
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.css']
})
export class HealthFormComponent implements OnInit {

  constructor(private router: Router) {}
  createHealthSurvey(healthForm){
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
  createAthlete(){

  }

  ngOnInit() {
  }

}
