import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwayDetailsComponent } from './highway-details.component';

describe('HighwayDetailsComponent', () => {
  let component: HighwayDetailsComponent;
  let fixture: ComponentFixture<HighwayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighwayDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighwayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
