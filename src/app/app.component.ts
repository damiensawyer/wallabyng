import { DamienService } from './services/damien.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  first = 100;
  second = 4300;
  addition = 0;
  constructor(@Inject(DamienService) public service: DamienService) {}

  public ngOnInit(): void {
    this.addition = this.service.addNumbers(this.first, this.second);
  }
}
