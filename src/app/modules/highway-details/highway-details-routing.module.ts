import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighwayDetailsComponent } from './pages/highway-details/highway-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HighwayDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighwayDetailsRoutingModule {}
