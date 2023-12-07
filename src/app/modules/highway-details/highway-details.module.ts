import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { ConstructionSitesListComponent } from './components/construction-sites-list/construction-sites-list.component';
import { HighwayDetailsRoutingModule } from './highway-details-routing.module';
import { ConstructionSitesComponent } from './pages/construction-sites/construction-sites.component';

@NgModule({
  declarations: [ConstructionSitesListComponent, ConstructionSitesComponent],
  imports: [CommonModule, CoreModule, HighwayDetailsRoutingModule],
})
export class HighwayDetailsModule {}
