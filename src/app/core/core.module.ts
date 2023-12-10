import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    MaterialModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  exports: [HeaderComponent, MaterialModule, GoogleMapsModule],
})
export class CoreModule {}
