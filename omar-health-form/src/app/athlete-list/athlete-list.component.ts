import { Component, OnInit } from '@angular/core';
import { AthleteService} from "../../services/athlete.service";

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent implements OnInit {

  public athletes = [];
  public errorMsg;

  constructor(private _athleteService: AthleteService) { }

  ngOnInit() {
    this._athleteService.getAthletes()
      .subscribe(data => this.athletes = data,
                error => this.errorMsg = error);
  }

}
