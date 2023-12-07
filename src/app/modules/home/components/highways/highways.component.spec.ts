import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwaysComponent } from './highways.component';

describe('HighwaysComponent', () => {
  let component: HighwaysComponent;
  let fixture: ComponentFixture<HighwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighwaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
