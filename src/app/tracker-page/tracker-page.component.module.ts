import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TrackerPageComponent } from './tracker-page.component';

@NgModule({
  declarations: [
    TrackerPageComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [TrackerPageComponent]
})
export class TrackerPageModule { }
