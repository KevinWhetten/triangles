import {Component} from '@angular/core';
import {TriangleService} from "../../../services/triangle.service";
import {DrawingService} from "../../../services/drawing.service";

@Component({
  selector: 'app-side-inputs',
  templateUrl: './side-inputs.component.html',
  styleUrls: ['./side-inputs.component.scss']
})
export class SideInputsComponent {
  sideA: number;
  sideB: number;
  sideC: number;

  constructor(private triangleService: TriangleService, private drawingService: DrawingService) {
  }

  changed() {
    if (this.inputValidated()) {
      this.triangleService.calculateTriangle(this.sideA, this.sideB, this.sideC);
      this.drawingService.drawTriangle();
    }
  }

  private inputValidated() {
    if (this.sideA < 0 || this.sideA === null) {
      this.sideA = NaN;
      return false;
    }
    if (this.sideB < 0 || this.sideB === null) {
      this.sideB = NaN;
      return false;
    }
    if (this.sideC < 0 || this.sideC === null) {
      this.sideC = NaN;
      return false;
    }
    return true;
  }
}
