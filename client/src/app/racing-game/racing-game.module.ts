import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { RacingGameSceneComponent } from "./racing-game-scene/racing-game-scene.component";
import { RacingGameComponent } from "./racing-game.component";
import { GameComponent } from "./game-component/game.component";
import { RenderService } from "./render-service/render.service";
import { TrackEditorRenderService } from "./track-editor/track-editor-render.service";
import { TrackEditorService } from "./track-editor/track-editor.service";
import { TracksProxyService } from "../racing-game/tracks-proxy.service";
import { CameraService } from "./camera.service";
import { SkyboxService } from "./skybox.service";
import { routes } from "../app-routes.module";
import { RaceDataHandlerService } from "./race-data-handler.service";
import { AudioService } from "./audio/audio.service";
@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    routes
  ],

  declarations: [
    RacingGameComponent,
    GameComponent,
    RacingGameSceneComponent
  ],

  exports: [
    RacingGameComponent,
  ],

  providers: [
    RenderService,
    TrackEditorRenderService,
    TrackEditorService,
    CameraService,
    SkyboxService,
    TracksProxyService,
    RaceDataHandlerService,
    AudioService
  ],

})
export class RacingGameModule { }
