import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Form } from '@angular/forms'

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.css']
})
export class HealthFormComponent implements OnInit {

  constructor(private router: Router) {}
  createHealthSurvey( ){
    this.router.navigate(['health-program1']);
  }
  createAthlete(){
    this.router.navigate(['health-program1']);
  }

  ngOnInit() {
  }

}
