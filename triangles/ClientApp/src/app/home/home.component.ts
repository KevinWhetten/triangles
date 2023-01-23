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
    this.drawTriangle();
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

  drawTriangle() {
    const canvas = document.getElementById("triangle");
    // @ts-ignore
    if (canvas.getContext) {
      // @ts-ignore
      const ctx = canvas.getContext("2d");

      let pixelCount = 300;

      if (this.angle == "right") {
        let longestSide = Math.max(...[this.sideA, this.sideB, this.sideC]);

        if (longestSide == this.sideA) {
          ctx.moveTo(0, 0);
          ctx.lineTo(0, pixelCount);
          let factor = pixelCount / longestSide;

          let longerSide = Math.max(...[this.sideB, this.sideC]);

          if (longerSide == this.sideB) {
            // (x1+l⋅cos(a),y1+l⋅sin(a))
            let angle = 90 - this.angleC;
            let length = this.sideB * factor;
            let x = length * Math.cos(angle);
            let y = 300 + length * Math.sin(angle);

            ctx.lineTo(x, y);
            ctx.lineTo(0, 0);
            ctx.stroke();
          } else if (longerSide == this.sideC) {

          }
        } else if (longestSide == this.sideC) {
          let longerSide = Math.max(...[this.sideA, this.sideB]);
          let factor = pixelCount / longerSide;

          if (longerSide == this.sideA) {
            ctx.moveTo(0, 0);
            ctx.lineTo(0, pixelCount);
            ctx.lineTo(factor * this.sideB, pixelCount);
            ctx.lineTo(0, 0);
            ctx.stroke();
          } else if (longerSide == this.sideB) {
            ctx.moveTo(0, 0);
            ctx.lineTo(0, factor * this.sideA);
            ctx.lineTo(pixelCount, factor * this.sideA);
            ctx.lineTo(0, 0);
            ctx.stroke();
          }
        }
      }
    }
  }
}

