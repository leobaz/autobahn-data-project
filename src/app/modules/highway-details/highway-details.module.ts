import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { ConstructionSiteDetailsComponent } from './components/construction-site-details/construction-site-details.component';
import { ConstructionSitesListComponent } from './components/construction-sites-list/construction-sites-list.component';
import { HighwayDetailsRoutingModule } from './highway-details-routing.module';
import { ConstructionSitesComponent } from './pages/construction-sites/construction-sites.component';
import { HighwayDetailsComponent } from './pages/highway-details/highway-details.component';

@NgModule({
  declarations: [
    ConstructionSitesListComponent,
    ConstructionSitesComponent,
    HighwayDetailsComponent,
    ConstructionSiteDetailsComponent,
  ],
  imports: [CommonModule, CoreModule, HighwayDetailsRoutingModule],
})
export class HighwayDetailsModule {}
