import { Injectable } from "@angular/core";

@Injectable()
export class DamienService {
  constructor() {}

  addNumbers(a: number, b: number) {
    return a + b;
  }
}
