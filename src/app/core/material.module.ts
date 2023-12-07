import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatTableModule, MatListModule, MatIconModule, MatRippleModule],
  exports: [MatTableModule, MatListModule, MatIconModule, MatRippleModule],
})
export class MaterialModule {}
