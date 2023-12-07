import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, MaterialModule, HttpClientModule],
  exports: [HeaderComponent, MaterialModule],
})
export class CoreModule {}
