import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriangleService {
  sideA: number;
  sideB: number;
  sideC: number;
  angleA: number;
  angleB: number;
  angleC: number;

  validity: 'valid' | 'invalid' = 'invalid';
  angleClassification: '' | 'acute' | 'right' | 'obtuse' = '';
  typeClassification: '' | 'scalene' | 'isosceles' | 'equilateral' = '';

  constructor() {
  }

  calculateTriangle(sideA: number, sideB: number, sideC: number) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    this.validate();

    if (this.validity == 'valid') {
      this.setTriangleAngles();
      this.getTriangleAngleClassification();
      this.getTriangleTypeClassification();
    } else {
      this.angleClassification = '';
      this.typeClassification = '';
    }
  }

  validate() {
    this.validity = this.triangleIsValid()
      ? "valid"
      : "invalid";
  }

  private triangleIsValid() {
    return this.sideA < this.sideB + this.sideC
      && this.sideB < this.sideA + this.sideC
      && this.sideC < this.sideA + this.sideB;
  }

  private setTriangleAngles() {
    this.angleA = this.getAngleInDegrees(this.sideA, this.sideB, this.sideC);
    this.angleB = this.getAngleInDegrees(this.sideB, this.sideA, this.sideC);
    this.angleC = this.getAngleInDegrees(this.sideC, this.sideA, this.sideB);
  }

  private getAngleInDegrees(side1: number, side2: number, side3: number) {
    return Math.acos(((side2 * side2) + (side3 * side3) - (side1 * side1)) / (2 * side2 * side3)) * 180 / Math.PI;
  }

  private getTriangleAngleClassification() {
    let largestAngle = this.getLargestAngle();

    if (largestAngle < 90) {
      this.angleClassification = "acute";
    } else if (largestAngle === 90) {
      this.angleClassification = "right";
    } else {
      this.angleClassification = "obtuse";
    }
  }

  private getLargestAngle() {
    return Math.max(...[this.angleA, this.angleB, this.angleC]);
  }

  private getTriangleTypeClassification() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      if (this.sideA === this.sideB && this.sideB === this.sideC) {
        this.typeClassification = "equilateral";
        return;
      }
      this.typeClassification = "isosceles";
      return;
    }
    this.typeClassification = "scalene";
  }
}
