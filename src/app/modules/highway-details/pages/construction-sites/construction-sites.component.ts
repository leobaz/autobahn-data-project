import { Component } from '@angular/core';
import { Road } from '../../../../shared/models/road.model';

@Component({
  selector: 'app-construction-sites',
  templateUrl: './construction-sites.component.html',
  styleUrl: './construction-sites.component.scss',
})
export class ConstructionSitesComponent {
  selectedConstructionSite: Road | undefined;

  onSelectConstructionSite(constructionSite: Road): void {
    this.selectedConstructionSite = constructionSite;
  }
}
