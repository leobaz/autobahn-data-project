import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { HighwaysComponent } from './components/highways/highways.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [HighwaysComponent, HomepageComponent],
  imports: [CommonModule, CoreModule, HomeRoutingModule, HttpClientModule],
})
export class HomeModule {}
