import { Component, Input } from '@angular/core';
import { ConstructionSite } from '../../../../shared/models/construction-site.model';

@Component({
  selector: 'app-construction-site-details',
  templateUrl: './construction-site-details.component.html',
  styleUrl: './construction-site-details.component.scss',
})
export class ConstructionSiteDetailsComponent {
  @Input() constructionSite: ConstructionSite | undefined;
}
