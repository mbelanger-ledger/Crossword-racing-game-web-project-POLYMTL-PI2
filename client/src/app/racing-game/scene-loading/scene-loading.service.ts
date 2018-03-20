import { Injectable } from '@angular/core';
import { SkyboxService } from '../skybox.service';
import { SceneLightsService } from '../scene-lights/scene-lights.service';



@Injectable()
export class SceneLoadingService {

    private scene: THREE.Scene;

    public constructor(private skyboxService: SkyboxService,
                       private sceneLightsService: SceneLightsService) { }

    public initialize(scene: THREE.Scene): void {
        this.scene = scene;
        this.generateScene();
    }

    private generateScene(): void {
        this.skyboxService.initialize(this.scene);
        this.sceneLightsService.initialize(this.scene);
    }


    public changeSceneState(): void {
        this.skyboxService.changeSceneState();
        this.sceneLightsService.changeSceneState();
    }

}
