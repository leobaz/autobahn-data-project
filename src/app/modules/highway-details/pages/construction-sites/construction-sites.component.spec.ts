import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionSitesComponent } from './construction-sites.component';

describe('ConstructionSitesComponent', () => {
  let component: ConstructionSitesComponent;
  let fixture: ComponentFixture<ConstructionSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionSitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
