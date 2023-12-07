import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionSitesListComponent } from './construction-sites-list.component';

describe('ConstructionSitesListComponent', () => {
  let component: ConstructionSitesListComponent;
  let fixture: ComponentFixture<ConstructionSitesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionSitesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionSitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
