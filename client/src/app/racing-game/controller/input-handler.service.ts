import { Injectable } from '@angular/core';
import { Command } from './Command';
import { CommandTurnLeft } from './CommandTurnLeft';
import { CommandAccelerate } from './commandAccelerate';
import { CommandBrake } from './commandBrake';
import { CommandTurnRight } from './commandTurnRight';
import { CommandCamera } from './commandCamera';
import { CommandNightDay } from './commandNightDay';
import { RenderService } from '../render-service/render.service';
import { CameraService } from '../camera.service';
import { SceneLoaderService } from '../scene-loader/scene-loader.service';

const W_KEYCODE: number = 87;
const A_KEYCODE: number = 65;
const S_KEYCODE: number = 83;
const D_KEYCODE: number = 68;
const C_KEYCODE: number = 67;
const N_KEYCODE: number = 78;

@Injectable()
export class InputHandlerService {
    private keyA: Command;
    private keyW: Command;
    private keyS: Command;
    private keyD: Command;
    private keyC: Command;
    private keyN: Command;

    public constructor(private renderService: RenderService, private cameraService: CameraService ,
                       private sceneLoaderService: SceneLoaderService) {
        this.keyA = new CommandTurnLeft();
        this.keyW = new CommandAccelerate();
        this.keyS = new CommandBrake();
        this.keyD = new CommandTurnRight();
        this.keyC = new CommandCamera();
        this.keyN = new CommandNightDay();
    }

    public handleInput(event: KeyboardEvent, isKeyDown: boolean): void {
        switch (event.keyCode) {
            case A_KEYCODE:
                this.keyA.execute(isKeyDown, this.renderService.car);
                break;
            case W_KEYCODE:
                this.keyW.execute(isKeyDown, this.renderService.car);
                break;
            case S_KEYCODE:
                this.keyS.execute(isKeyDown, this.renderService.car);
                break;
            case D_KEYCODE:
                this.keyD.execute(isKeyDown, this.renderService.car);
                break;
            case C_KEYCODE:
                this.keyC.execute(isKeyDown, this.renderService.car, this.cameraService);
                break;
            case N_KEYCODE:
                this.keyN.execute(isKeyDown, this.renderService.car, this.sceneLoaderService);
                break;
            default:
                break;
        }
    }

}
