import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { MapComponent } from '../../shared/components/map/map.component';
import { ChargingStationsMapComponent } from './components/charging-stations-map/charging-stations-map.component';
import { ConstructionSiteDetailsComponent } from './components/construction-site-details/construction-site-details.component';
import { ConstructionSitesListComponent } from './components/construction-sites-list/construction-sites-list.component';
import { CurrentSuspensionsMapComponent } from './components/current-suspensions-map/current-suspensions-map.component';
import { RestAreasMapComponent } from './components/rest-areas-map/rest-areas-map.component';
import { HighwayDetailsRoutingModule } from './highway-details-routing.module';
import { ChargingStationsComponent } from './pages/charging-stations/charging-stations.component';
import { ConstructionSitesComponent } from './pages/construction-sites/construction-sites.component';
import { CurrentSuspensionsComponent } from './pages/current-suspensions/current-suspensions.component';
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
    CurrentSuspensionsComponent,
    CurrentSuspensionsMapComponent,
    ChargingStationsComponent,
    ChargingStationsMapComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    HighwayDetailsRoutingModule,
    MapComponent,
  ],
})
export class HighwayDetailsModule {}
