import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestAreasMapComponent } from './rest-areas-map.component';

describe('RestAreasMapComponent', () => {
  let component: RestAreasMapComponent;
  let fixture: ComponentFixture<RestAreasMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestAreasMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestAreasMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
