import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegidstrationComponent } from './regidstration.component';

describe('RegidstrationComponent', () => {
  let component: RegidstrationComponent;
  let fixture: ComponentFixture<RegidstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegidstrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegidstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
