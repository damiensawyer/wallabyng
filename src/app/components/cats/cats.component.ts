import { DamienService } from '../../services/damien.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  message: string;
  constructor(public service: DamienService) {}

  ngOnInit() {
    this.message = `Adding numbers 1 + 10 = ${this.service.addNumbers(1, 10)}`;
  }
}
