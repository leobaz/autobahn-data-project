import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionSiteDetailsComponent } from './construction-site-details.component';

describe('ConstructionSiteDetailsComponent', () => {
  let component: ConstructionSiteDetailsComponent;
  let fixture: ComponentFixture<ConstructionSiteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionSiteDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionSiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
