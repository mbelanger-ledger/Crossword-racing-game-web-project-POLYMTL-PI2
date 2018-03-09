import { Component, OnInit } from '@angular/core';
import { RaceDataHandlerService} from "../../race-data-handler.service";

const TO_MINUTES: number = 6000;
const TO_SECONDS: number = 100;
const MAX_SECONDS: number = 60;
const MAX_HUNDREDTH_SECOND: number = 100;


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  public constructor(private raceDataHandler: RaceDataHandlerService) { }

  public ngOnInit(): void {
  }

  public get hundredthSecond(): number {
    return this.raceDataHandler.hundrethSecondElapsed % MAX_HUNDREDTH_SECOND;
  }

  public get second(): number {
    return Math.floor(this.raceDataHandler.hundrethSecondElapsed / TO_SECONDS) % MAX_SECONDS;
  }

  public get minutes(): number {
    return Math.floor(this.raceDataHandler.hundrethSecondElapsed / TO_MINUTES);
  }
}
