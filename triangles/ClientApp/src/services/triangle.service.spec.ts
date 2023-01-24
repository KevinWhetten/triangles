import {TestBed} from '@angular/core/testing';

import {TriangleService} from './triangle.service';

describe('TriangleService', () => {
  let service: TriangleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriangleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should determine valid triangle', () => {
    service.sideA = 3;
    service.sideB = 4;
    service.sideC = 5;

    service.validateTriangle();

    expect(service.validity).toEqual('valid');
  });

  it('should determine valid triangle', () => {
    service.sideA = 1;
    service.sideB = 1;
    service.sideC = 1.99;

    service.validateTriangle();

    expect(service.validity).toEqual('valid');
  });

  it('should determine invalid triangle', () => {
    service.sideA = 5;
    service.sideB = 1;
    service.sideC = 1;

    service.validateTriangle();

    expect(service.validity).toEqual('invalid');
  });

  it('should determine invalid triangle', () => {
    service.sideA = 1;
    service.sideB = 5;
    service.sideC = 1;

    service.validateTriangle();

    expect(service.validity).toEqual('invalid');
  });

  it('should determine invalid triangle', () => {
    service.sideA = 1;
    service.sideB = 1;
    service.sideC = 5;

    service.validateTriangle();

    expect(service.validity).toEqual('invalid');
  });

  it('should determine invalid triangle', () => {
    service.sideA = 1;
    service.sideB = 1;
    service.sideC = 2;

    service.validateTriangle();

    expect(service.validity).toEqual('invalid');
  });

  it('should determine acute triangle', () => {
    service.sideA = 1;
    service.sideB = 1;
    service.sideC = 1;

    service.getTriangleAngleClassification();

    expect(service.angleClassification).toEqual("acute");
  });

  it('should determine right triangle', () => {
    service.sideA = 3;
    service.sideB = 4;
    service.sideC = 5;

    service.getTriangleAngleClassification();

    expect(service.angleClassification).toEqual("right");
  });

  it('should determine obtuse triangle', () => {
    service.sideA = 3;
    service.sideB = 3;
    service.sideC = 5;

    service.getTriangleAngleClassification();

    expect(service.angleClassification).toEqual("obtuse");
  });

  it('should determine scalene triangle', () => {
    service.sideA = 3;
    service.sideB = 4;
    service.sideC = 5;

    service.getTriangleTypeClassification();

    expect(service.typeClassification).toEqual("scalene")
  });

  it('should determine isosceles triangle', () => {
    service.sideA = 4;
    service.sideB = 4;
    service.sideC = 5;

    service.getTriangleTypeClassification();

    expect(service.typeClassification).toEqual("isosceles")
  });

  it('should determine isosceles triangle', () => {
    service.sideA = 4;
    service.sideB = 5;
    service.sideC = 5;

    service.getTriangleTypeClassification();

    expect(service.typeClassification).toEqual("isosceles")
  });

  it('should determine equilateral triangle', () => {
    service.sideA = 4;
    service.sideB = 4;
    service.sideC = 4;

    service.getTriangleTypeClassification();

    expect(service.typeClassification).toEqual("equilateral")
  });

  it('should determine acute equilateral triangle', () => {
    service.sideA = 4;
    service.sideB = 4;
    service.sideC = 4;

    service.calculateTriangle();

    expect(service.angleClassification).toEqual('acute');
    expect(service.typeClassification).toEqual('equilateral');
  });

  it('should determine acute isosceles triangle', () => {
    service.sideA = 4;
    service.sideB = 5;
    service.sideC = 5;

    service.calculateTriangle();

    expect(service.angleClassification).toEqual('acute');
    expect(service.typeClassification).toEqual('isosceles');
  });

  it('should determine acute scalene triangle', () => {
    service.sideA = 4;
    service.sideB = 5;
    service.sideC = 6;

    service.calculateTriangle();

    expect(service.angleClassification).toEqual('acute');
    expect(service.typeClassification).toEqual('scalene');
  });

  it('should determine right isosceles triangle', () => {
    service.sideA = 70;
    service.sideB = 70;
    service.sideC = 99;

    service.calculateTriangle();

    expect(service.angleClassification).toEqual('right');
    expect(service.typeClassification).toEqual('isosceles');
  });

  it('should determine right scalene triangle', () => {
    service.sideA = 3;
    service.sideB = 4;
    service.sideC = 5;

    service.calculateTriangle();

    expect(service.angleClassification).toEqual('right');
    expect(service.typeClassification).toEqual('scalene');
  });
});
