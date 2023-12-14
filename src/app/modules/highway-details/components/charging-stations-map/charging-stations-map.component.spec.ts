import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingStationsMapComponent } from './charging-stations-map.component';

describe('ChargingStationsMapComponent', () => {
  let component: ChargingStationsMapComponent;
  let fixture: ComponentFixture<ChargingStationsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingStationsMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChargingStationsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
