import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../app-routes.module';
import { TrackEditorService } from '../racing-game/track-editor/track-editor.service';
import { RacingGameModule } from '../racing-game/racing-game.module';
import { RacingGameComponent } from '../racing-game/racing-game.component';
import { TrackEditorComponent } from '../racing-game/track-editor/track-editor.component';
import { TrackEditorRenderService } from '../racing-game/track-editor/track-editor-render.service';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    routes,
  ],
  declarations: [
    AdminComponent,
    TrackEditorComponent
  ],
  exports: [
    AdminComponent,
  ],

  providers: [
    TrackEditorService,
    TrackEditorRenderService
  ]
})
export class AdminModule { }
