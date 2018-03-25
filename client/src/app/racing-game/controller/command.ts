import { Car } from "../car/car";
import { CameraService } from "../camera.service";
import { SceneLoaderService } from "../scene-loader/scene-loader.service";

export abstract class Command {
    public abstract execute(isKeyDown: boolean, car?: Car, service?: CameraService | SceneLoaderService): void;
}
