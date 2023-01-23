import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine valid triangle', () => {
    component.sideA = 3;
    component.sideB = 4;
    component.sideC = 5;

    component.setValidity();

    expect(component.validity).toEqual('valid');
  });

  it('should determine valid triangle', () => {
    component.sideA = 1;
    component.sideB = 1;
    component.sideC = 1.99;

    component.setValidity();

    expect(component.validity).toEqual('valid');
  });

  it('should determine invalid triangle', () => {
    component.sideA = 5;
    component.sideB = 1;
    component.sideC = 1;

    component.setValidity();

    expect(component.validity).toEqual('invalid');
  });

  it('should determine invalid triangle', () => {
    component.sideA = 1;
    component.sideB = 5;
    component.sideC = 1;

    component.setValidity();

    expect(component.validity).toEqual('invalid');
  });

  it('should determine invalid triangle', () => {
    component.sideA = 1;
    component.sideB = 1;
    component.sideC = 5;

    component.setValidity();

    expect(component.validity).toEqual('invalid');
  });

  it('should determine invalid triangle', () => {
    component.sideA = 1;
    component.sideB = 1;
    component.sideC = 2;

    component.setValidity();

    expect(component.validity).toEqual('invalid');
  });

  it('should determine acute triangle', () => {
    component.sideA = 1;
    component.sideB = 1;
    component.sideC = 1;

    component.setAngle();

    expect(component.angle).toEqual("acute");
  });

  it('should determine right triangle', () => {
    component.sideA = 3;
    component.sideB = 4;
    component.sideC = 5;

    component.setAngle();

    expect(component.angle).toEqual("right");
  });

  it('should determine obtuse triangle', () => {
    component.sideA = 3;
    component.sideB = 3;
    component.sideC = 5;

    component.setAngle();

    expect(component.angle).toEqual("obtuse");
  });

  it('should determine scalene triangle', () => {
    component.sideA = 3;
    component.sideB = 4;
    component.sideC = 5;

    component.setSides();

    expect(component.sides).toEqual("scalene")
  });

  it('should determine isosceles triangle', () => {
    component.sideA = 4;
    component.sideB = 4;
    component.sideC = 5;

    component.setSides();

    expect(component.sides).toEqual("isosceles")
  });

  it('should determine isosceles triangle', () => {
    component.sideA = 4;
    component.sideB = 5;
    component.sideC = 5;

    component.setSides();

    expect(component.sides).toEqual("isosceles")
  });

  it('should determine equilateral triangle', () => {
    component.sideA = 4;
    component.sideB = 4;
    component.sideC = 4;

    component.setSides();

    expect(component.sides).toEqual("equilateral")
  });

  it('should determine acute equilateral triangle', () => {
    component.sideA = 4;
    component.sideB = 4;
    component.sideC = 4;

    component.calculateTriangle();

    expect(component.angle).toEqual('acute');
    expect(component.sides).toEqual('equilateral');
  });

  it('should determine acute isosceles triangle', () => {
    component.sideA = 4;
    component.sideB = 5;
    component.sideC = 5;

    component.calculateTriangle();

    expect(component.angle).toEqual('acute');
    expect(component.sides).toEqual('isosceles');
  });

  it('should determine acute scalene triangle', () => {
    component.sideA = 4;
    component.sideB = 5;
    component.sideC = 6;

    component.calculateTriangle();

    expect(component.angle).toEqual('acute');
    expect(component.sides).toEqual('scalene');
  });

  it('should determine right isosceles triangle', () => {
    component.sideA = 70;
    component.sideB = 70;
    component.sideC = 99;

    component.calculateTriangle();

    expect(component.angle).toEqual('right');
    expect(component.sides).toEqual('isosceles');
  });

  it('should determine right scalene triangle', () => {
    component.sideA = 3;
    component.sideB = 4;
    component.sideC = 5;

    component.calculateTriangle();

    expect(component.angle).toEqual('right');
    expect(component.sides).toEqual('scalene');
  });
});
