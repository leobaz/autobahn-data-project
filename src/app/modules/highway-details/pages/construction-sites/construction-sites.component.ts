import { Component } from '@angular/core';
import { ConstructionSite } from '../../../../shared/models/construction-site.model';

@Component({
  selector: 'app-construction-sites',
  templateUrl: './construction-sites.component.html',
  styleUrl: './construction-sites.component.scss',
})
export class ConstructionSitesComponent {
  selectedConstructionSite: ConstructionSite | undefined;

  onSelectConstructionSite(constructionSite: ConstructionSite): void {
    this.selectedConstructionSite = constructionSite;
  }
}
