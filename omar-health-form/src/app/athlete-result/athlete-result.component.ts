import { Component, OnInit } from '@angular/core';
import {Athlete} from "../../models/athlete";

@Component({
  selector: 'app-athlete-result',
  templateUrl: './athlete-result.component.html',
  styleUrls: ['./athlete-result.component.css']
})
export class AthleteResultComponent implements OnInit {

  constructor(private athlete: Athlete) { }

  ngOnInit() {
  }

}
