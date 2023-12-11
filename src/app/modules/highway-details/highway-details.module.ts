import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { MapComponent } from '../../shared/components/map/map.component';
import { ConstructionSiteDetailsComponent } from './components/construction-site-details/construction-site-details.component';
import { ConstructionSitesListComponent } from './components/construction-sites-list/construction-sites-list.component';
import { RestAreasMapComponent } from './components/rest-areas-map/rest-areas-map.component';
import { HighwayDetailsRoutingModule } from './highway-details-routing.module';
import { ConstructionSitesComponent } from './pages/construction-sites/construction-sites.component';
import { HighwayDetailsComponent } from './pages/highway-details/highway-details.component';
import { RestAreasComponent } from './pages/rest-areas/rest-areas.component';

@NgModule({
  declarations: [
    ConstructionSitesListComponent,
    ConstructionSitesComponent,
    HighwayDetailsComponent,
    ConstructionSiteDetailsComponent,
    RestAreasComponent,
    RestAreasMapComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    HighwayDetailsRoutingModule,
    MapComponent,
  ],
})
export class HighwayDetailsModule {}
