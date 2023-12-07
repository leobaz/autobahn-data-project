import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConstructionSitesService } from '../../../../core/services/construction-sites.service';
import { ConstructionSite } from '../../../../shared/models/construction-site.model';
@Component({
  selector: 'app-construction-sites-list',
  templateUrl: './construction-sites-list.component.html',
  styleUrl: './construction-sites-list.component.scss',
})
export class ConstructionSitesListComponent implements OnInit, OnDestroy {
  private routeSub: Subscription = new Subscription();
  private sub: Subscription = new Subscription();
  highwayId?: string;
  displayedColumns: string[] = ['title', 'subtitle', 'blocked', 'startTime'];
  dataSource: ConstructionSite[] = [];

  constructor(
    private route: ActivatedRoute,
    private constructionSitesService: ConstructionSitesService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.highwayId = params['highwayId'];
      if (this.highwayId) {
        this.sub = this.constructionSitesService
          .getHighwayConstructionSites(this.highwayId)
          .subscribe((data) => {
            this.dataSource = data.roadworks;
          });
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.sub.unsubscribe();
  }
}
