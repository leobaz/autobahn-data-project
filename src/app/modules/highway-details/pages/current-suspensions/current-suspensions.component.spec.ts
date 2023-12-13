import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSuspensionsComponent } from './current-suspensions.component';

describe('CurrentSuspensionsComponent', () => {
  let component: CurrentSuspensionsComponent;
  let fixture: ComponentFixture<CurrentSuspensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentSuspensionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentSuspensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
