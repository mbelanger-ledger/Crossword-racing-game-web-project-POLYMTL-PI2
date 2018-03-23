import { RaceProgression } from "./raceProgression";
import { Subject } from "rxjs/Subject";
import { MAX_N_LAPS } from "../constants";

export class UserRaceProgression extends RaceProgression {

    private _endOfRace$: Subject<void>;

    public constructor( _carPosition: THREE.Vector3, _waypoints: [number, number, number][]) {
        super(_carPosition, _waypoints);
        this._endOfRace$ = new Subject();
    }

    public get endOfRace$(): Subject<void> {
        return this._endOfRace$;
    }

    public update(): void {
        super.update();
        if ( this.nLap === MAX_N_LAPS) {
            this._endOfRace$.next();
            this._endOfRace$.complete();
        }
    }
}
