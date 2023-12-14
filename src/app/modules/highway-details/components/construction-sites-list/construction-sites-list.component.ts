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
import { Subscription } from 'rxjs';
import { Road } from '../../../../shared/models/road.model';
import { ConstructionSitesService } from '../../../../shared/services/construction-sites.service';
import { ErrorService } from '../../../../shared/services/error.service';
import { HighwaysService } from '../../../../shared/services/highways.service';
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
  @Output() selectedConstructionSite: EventEmitter<Road> =
    new EventEmitter<Road>();

  constructor(
    private constructionSitesService: ConstructionSitesService,
    private highwaysService: HighwaysService,
    private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.highwaysService.selectedHighway$.subscribe((highway) => {
      if (highway && this.highwayId !== highway) {
        this.highwayId = highway;
        this.sub = this.constructionSitesService
          .getHighwayConstructionSites(this.highwayId)
          .subscribe({
            next: (data) => {
              this.dataSource.data = data.roadworks;
              this.resultsLength = data.roadworks.length;
            },
            error: () => {
              this.errorService.showErrorSnackBar(
                'There was an error loading the construction sites.'
              );
            },
          });
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onRowClick(row: Road): void {
    this.selectedConstructionSite.emit(row);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.sub.unsubscribe();
  }
}
