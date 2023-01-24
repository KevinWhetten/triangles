import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideInputsComponent } from './side-inputs.component';

describe('SideInputsComponent', () => {
  let component: SideInputsComponent;
  let fixture: ComponentFixture<SideInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
