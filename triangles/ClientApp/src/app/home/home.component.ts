import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  sideA: number;
  sideB: number;
  sideC: number;
  angleA: number;
  angleB: number;
  angleC: number;

  validity: 'valid' | 'invalid' = 'invalid';
  angle: '' | 'acute' | 'right' | 'obtuse' = '';
  sides: '' | 'scalene' | 'isosceles' | 'equilateral' = '';

  calculateTriangle() {
    this.setValidity();
    if (this.validity == 'valid') {
      this.setAngle();
      this.setSides();
    } else {
      this.angle = '';
      this.sides = '';
    }
  }

  setValidity() {
    if (this.isValid()) {
      this.validity = "valid";
    } else {
      this.validity = "invalid";
    }
  }

  private isValid() {
    return this.sideA < this.sideB + this.sideC
      && this.sideB < this.sideA + this.sideC
      && this.sideC < this.sideA + this.sideB;
  }

  setAngle() {
    if (!this.isValid()) {
      this.angle = '';
      return;
    }

    this.angleA = this.getAngle(this.sideA, this.sideB, this.sideC);
    this.angleB = this.getAngle(this.sideB, this.sideA, this.sideC);
    this.angleC = this.getAngle(this.sideC, this.sideA, this.sideB);

    let largestAngle = Math.max(...[this.angleA, this.angleB, this.angleC]);

    if (largestAngle < 90) {
      this.angle = "acute";
    } else if (largestAngle === 90) {
      this.angle = "right";
    } else {
      this.angle = "obtuse";
    }
  }

  private getAngle(side1: number, side2: number, side3: number) {
    return Math.acos(((side2 * side2) + (side3 * side3) - (side1 * side1)) / (2 * side2 * side3)) * 180 / Math.PI;
  }

  setSides() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      if (this.sideA === this.sideB && this.sideB === this.sideC) {
        this.sides = "equilateral";
        return;
      }
      this.sides = "isosceles";
      return;
    }
    this.sides = "scalene";
  }
}

