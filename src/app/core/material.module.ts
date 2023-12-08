import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  imports: [
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatPaginatorModule,
    MatTabsModule,
  ],
  exports: [
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatPaginatorModule,
    MatTabsModule,
  ],
})
export class MaterialModule {}
