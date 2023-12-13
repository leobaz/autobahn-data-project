import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSuspensionsMapComponent } from './current-suspensions-map.component';

describe('CurrentSuspensionsMapComponent', () => {
  let component: CurrentSuspensionsMapComponent;
  let fixture: ComponentFixture<CurrentSuspensionsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentSuspensionsMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentSuspensionsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
