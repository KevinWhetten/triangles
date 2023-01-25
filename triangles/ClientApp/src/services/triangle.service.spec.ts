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

  it('should determine valid triangle (3, 4, 5)', () => {
    service.sideA = 3;
    service.sideB = 4;
    service.sideC = 5;

    service.validate();

    expect(service.validity).toEqual('valid');
  });

  it('should determine valid triangle (1, 1, 1.99)', () => {
    service.sideA = 1;
    service.sideB = 1;
    service.sideC = 1.99;

    service.validate();

    expect(service.validity).toEqual('valid');
  });

  it('should determine invalid triangle (5, 1, 1)', () => {
    service.sideA = 5;
    service.sideB = 1;
    service.sideC = 1;

    service.validate();

    expect(service.validity).toEqual('invalid');
  });

  it('should determine invalid triangle (1, 5, 1)', () => {
    service.sideA = 1;
    service.sideB = 5;
    service.sideC = 1;

    service.validate();

    expect(service.validity).toEqual('invalid');
  });

  it('should determine invalid triangle (1, 1, 5)', () => {
    service.sideA = 1;
    service.sideB = 1;
    service.sideC = 5;

    service.validate();

    expect(service.validity).toEqual('invalid');
  });

  it('should determine invalid triangle (1, 1, 2)', () => {
    service.sideA = 1;
    service.sideB = 1;
    service.sideC = 2;

    service.validate();

    expect(service.validity).toEqual('invalid');
  });

  it('should determine acute triangle (1, 1, 1)', () => {
    service.sideA = 1;
    service.sideB = 1;
    service.sideC = 1;

    service.setTriangleAngles();
    service.setTriangleAngleClassification();

    expect(service.angleClassification).toEqual("acute");
  });

  it('should determine right triangle (3, 4, 5)', () => {
    service.sideA = 3;
    service.sideB = 4;
    service.sideC = 5;

    service.setTriangleAngles();
    service.setTriangleAngleClassification();

    expect(service.angleClassification).toEqual("right");
  });

  it('should determine obtuse triangle (3, 3, 5)', () => {
    service.sideA = 3;
    service.sideB = 3;
    service.sideC = 5;

    service.setTriangleAngles();
    service.setTriangleAngleClassification();

    expect(service.angleClassification).toEqual("obtuse");
  });

  it('should determine scalene triangle (3, 4, 5)', () => {
    service.sideA = 3;
    service.sideB = 4;
    service.sideC = 5;

    service.setTriangleTypeClassification();

    expect(service.typeClassification).toEqual("scalene")
  });

  it('should determine isosceles triangle (4, 4, 5)', () => {
    service.sideA = 4;
    service.sideB = 4;
    service.sideC = 5;

    service.setTriangleTypeClassification();

    expect(service.typeClassification).toEqual("isosceles")
  });

  it('should determine isosceles triangle (4, 5, 5)', () => {
    service.sideA = 4;
    service.sideB = 5;
    service.sideC = 5;

    service.setTriangleTypeClassification();

    expect(service.typeClassification).toEqual("isosceles")
  });

  it('should determine equilateral triangle (4, 4, 4)', () => {
    service.sideA = 4;
    service.sideB = 4;
    service.sideC = 4;

    service.setTriangleTypeClassification();

    expect(service.typeClassification).toEqual("equilateral")
  });

  it('should determine acute equilateral triangle (4, 4, 4)', () => {
    let sideA = 4;
    let sideB = 4;
    let sideC = 4;

    service.calculateTriangle(sideA, sideB, sideC);

    expect(service.angleClassification).toEqual('acute');
    expect(service.typeClassification).toEqual('equilateral');
  });

  it('should determine acute isosceles triangle (4, 5, 5)', () => {
    let sideA = 4;
    let sideB = 5;
    let sideC = 5;

    service.calculateTriangle(sideA, sideB, sideC);

    expect(service.angleClassification).toEqual('acute');
    expect(service.typeClassification).toEqual('isosceles');
  });

  it('should determine acute scalene triangle (4, 5, 6)', () => {
    let sideA = 4;
    let sideB = 5;
    let sideC = 6;

    service.calculateTriangle(sideA, sideB, sideC);

    expect(service.angleClassification).toEqual('acute');
    expect(service.typeClassification).toEqual('scalene');
  });

  it('should determine right isosceles triangle (3, 3, 3sqrt(2))', () => {
    let sideA = 3;
    let sideB = 3;
    let sideC = 3 * Math.sqrt(2);

    service.calculateTriangle(sideA, sideB, sideC);

    expect(service.angleClassification).toEqual('right');
    expect(service.typeClassification).toEqual('isosceles');
  });

  it('should determine right scalene triangle (3, 4, 5)', () => {
    let sideA = 3;
    let sideB = 4;
    let sideC = 5;

    service.calculateTriangle(sideA, sideB, sideC);

    expect(service.angleClassification).toEqual('right');
    expect(service.typeClassification).toEqual('scalene');
  });
});
