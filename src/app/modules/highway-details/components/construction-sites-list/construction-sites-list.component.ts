import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConstructionSitesService } from '../../../../core/services/construction-sites.service';
import { ConstructionSite } from '../../../../shared/models/construction-site.model';
@Component({
  selector: 'app-construction-sites-list',
  templateUrl: './construction-sites-list.component.html',
  styleUrl: './construction-sites-list.component.scss',
})
export class ConstructionSitesListComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );
  private routeSub: Subscription = new Subscription();
  private sub: Subscription = new Subscription();
  highwayId?: string;
  displayedColumns: string[] = ['title', 'subtitle', 'blocked', 'startTime'];
  dataSource = new MatTableDataSource<any>();
  resultsLength = 0;
  @Output() selectedConstructionSite: EventEmitter<ConstructionSite> =
    new EventEmitter<ConstructionSite>();

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
            this.dataSource.data = data.roadworks;
            this.resultsLength = data.roadworks.length;
          });
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onRowClick(row: ConstructionSite): void {
    this.selectedConstructionSite.emit(row);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.sub.unsubscribe();
  }
}
