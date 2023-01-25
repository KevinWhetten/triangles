import {Component} from '@angular/core';
import {TriangleService} from "../../../../services/triangle.service";

@Component({
  selector: 'app-validity',
  templateUrl: './validity.component.html',
  styleUrls: ['./validity.component.css']
})
export class ValidityComponent {
  validity: "valid" | "invalid";
  angleClassification: "" | "acute" | "right" | "obtuse";
  typeClassification: "" | "scalene" | "isosceles" | "equilateral";

  constructor(private triangleService: TriangleService) {
  }

  isValid() {
    this.triangleService.validate();
    this.validity = this.triangleService.validity;
    this.angleClassification = this.triangleService.angleClassification;
    this.typeClassification = this.triangleService.typeClassification;
    return this.validity === "valid";
  }
}
