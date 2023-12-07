import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionSitesComponent } from './pages/construction-sites/construction-sites.component';

export const routes: Routes = [
  {
    path: '',
    component: ConstructionSitesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighwayDetailsRoutingModule {}
