import {Injectable} from '@angular/core';
import {TriangleService} from "./triangle.service";

class TriangleCornerPoints {
  corner1: Point;
  corner2: Point;
  corner3: Point;
}

class Point {
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  canvas: HTMLCanvasElement;
  canvasWidth = 500;
  ctx: CanvasRenderingContext2D;
  cornerPoints: TriangleCornerPoints = {corner1: {} as Point, corner2: {} as Point, corner3: {} as Point};

  constructor(private triangleService: TriangleService) {
  }

  drawTriangle() {
    this.setupCanvas();
    if (this.triangleService.validity == "valid") {
      let sideA = this.triangleService.sideA;
      let sideB = this.triangleService.sideB;
      let sideC = this.triangleService.sideC;
      let angleA = this.triangleService.angleA;
      let angleB = this.triangleService.angleB;
      let angleC = this.triangleService.angleC;

      this.setCornerPoints(sideA, sideB, sideC, angleC)

      this.drawTriangleSides();
      this.drawSideLabels(sideA, sideB, sideC);
      this.drawAngleLabels(angleA, angleB, angleC);
    }
  }

  private setupCanvas() {
    this.canvas = document.getElementById("triangle") as HTMLCanvasElement;
    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
      this.clearTriangle();
    }
  }

  private clearTriangle() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private setCornerPoints(sideA: number, sideB: number, sideC: number, angleC: number) {
    let factor = this.getFactor(sideA, sideB, sideC);

    this.setCorner1(sideA, factor);
    this.setCorner2();
    this.setCorner3(factor, sideB, angleC);

    this.centerTriangleInCanvas();
  }

  private getFactor(sideA: number, sideB: number, sideC: number): number {
    let sides = [sideA, sideB, sideC];
    let longestSide = Math.max(...sides);

    return (this.canvasWidth * .75) / longestSide;
  }

  private setCorner1(sideA: number, factor: number) {
    this.cornerPoints.corner1.x = Math.round(sideA * factor);
    this.cornerPoints.corner1.y = Math.round(this.canvasWidth);
  }

  private setCorner2() {
    this.cornerPoints.corner2.x = 0;
    this.cornerPoints.corner2.y = this.cornerPoints.corner1.y
  }

  private setCorner3(factor: number, sideB: number, angleC: number) {
    this.cornerPoints.corner3.x = Math.round(this.cornerPoints.corner2.x + factor * sideB * Math.cos(this.getAngleInRadians(angleC)));
    this.cornerPoints.corner3.y = Math.round(this.cornerPoints.corner2.y + factor * sideB * Math.sin(this.getAngleInRadians(angleC)));
  }

  private getAngleInRadians(angle: number) {
    return -angle * Math.PI / 180;
  }

  private centerTriangleInCanvas() {
    let minX = Math.min(this.cornerPoints.corner1.x, this.cornerPoints.corner2.x, this.cornerPoints.corner3.x);
    let maxX = Math.max(this.cornerPoints.corner1.x, this.cornerPoints.corner2.x, this.cornerPoints.corner3.x);
    let minY = Math.min(this.cornerPoints.corner1.y, this.cornerPoints.corner2.y, this.cornerPoints.corner3.y);
    let maxY = Math.max(this.cornerPoints.corner1.y, this.cornerPoints.corner2.y, this.cornerPoints.corner3.y);

    let xShift = ((this.canvasWidth - maxX) - minX) / 2;
    let yShift = ((this.canvasWidth - maxY) - minY) / 2;

    this.cornerPoints.corner1.x = this.cornerPoints.corner1.x + xShift;
    this.cornerPoints.corner2.x = this.cornerPoints.corner2.x + xShift;
    this.cornerPoints.corner3.x = this.cornerPoints.corner3.x + xShift;
    this.cornerPoints.corner1.y = this.cornerPoints.corner1.y + yShift;
    this.cornerPoints.corner2.y = this.cornerPoints.corner2.y + yShift;
    this.cornerPoints.corner3.y = this.cornerPoints.corner3.y + yShift;
  }

  private drawTriangleSides() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.cornerPoints.corner1.x, this.cornerPoints.corner1.y);
    this.ctx.lineTo(this.cornerPoints.corner2.x, this.cornerPoints.corner2.y);
    this.ctx.lineTo(this.cornerPoints.corner3.x, this.cornerPoints.corner3.y);
    this.ctx.lineTo(this.cornerPoints.corner1.x, this.cornerPoints.corner1.y);
    this.ctx.stroke();
  }

  private drawSideLabels(sideA: number, sideB: number, sideC: number) {
    let xOffset = 40;
    let yOffset = 20;

    let midpoint1 = this.getMidpoint(this.cornerPoints.corner1, this.cornerPoints.corner2, 0, yOffset);
    let midpoint2 = this.getMidpoint(this.cornerPoints.corner2, this.cornerPoints.corner3, -xOffset, 0);
    let midpoint3 = this.getMidpoint(this.cornerPoints.corner3, this.cornerPoints.corner1, xOffset, 0);

    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "blue";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(`A = ${sideA}`, midpoint1.x, midpoint1.y);
    this.ctx.fillText(`B = ${sideB}`, midpoint2.x, midpoint2.y);
    this.ctx.fillText(`C = ${sideC}`, midpoint3.x, midpoint3.y);
  }

  private getMidpoint(corner1: Point, corner2: Point, xOffset: number, yOffset: number): Point {
    return {
      x: (corner1.x + corner2.x) / 2 + xOffset,
      y: (corner1.y + corner2.y) / 2 + yOffset
    } as Point;
  }

  private drawAngleLabels(angleA: number, angleB: number, angleC: number) {
    let xOffset = 30;
    let yOffset = 10;

    this.ctx.font = "15px Arial";
    this.ctx.fillStyle = "green";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(`${angleB.toPrecision(4)}°`, this.cornerPoints.corner1.x + xOffset, this.cornerPoints.corner1.y);
    this.ctx.fillText(`${angleC.toPrecision(4)}°`, this.cornerPoints.corner2.x - xOffset, this.cornerPoints.corner2.y);
    this.ctx.fillText(`${angleA.toPrecision(4)}°`, this.cornerPoints.corner3.x, this.cornerPoints.corner3.y - yOffset);
  }
}
