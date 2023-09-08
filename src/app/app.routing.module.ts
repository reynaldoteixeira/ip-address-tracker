import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackerPageComponent } from './tracker-page/tracker-page.component';

const routes: Routes = [
    { path:'', component: TrackerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }