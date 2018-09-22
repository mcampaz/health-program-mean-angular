import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {Form, FormGroup, NgForm} from '@angular/forms'
import {forEach} from "@angular/router/src/utils/collection";
import {Athlete} from "../../models/athlete";

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.css']
})
export class HealthFormComponent implements OnInit {
  public  athlete;
  genders = ['female', 'male', 'other'];
  constructor(private router: Router) {

  }

  createAthlete(athleteForm: NgForm){
    debugger;
    this.mapFormValues(athleteForm);
  }

  mapFormValues(form: NgForm){
    // this.athlete = new Athlete(
    //   form.controls['firstName'].value,
    //   form.controls['lastName'].value,
    //   form.controls['athleteAge'].value,
    //   form.controls['athleteSex'].value);
    // this.athlete.officeNumber = form.controls['officeNumber'].value;
    // this.athlete.athleteEmail = form.controls['athleteEmail'].value;
    // this.athlete.athleteAge = form.controls['address'].value;
    // this.athlete.athleteSex = form.controls['cellNumber'].value);
    this.router.navigate(['athlete-result']);
  }

  ngOnInit() {
  }

}
