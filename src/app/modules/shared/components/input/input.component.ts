import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text'
  @Input() label: string = 'label'
  @Input() controlName: string = ''
  name = new FormControl(this.controlName);

  constructor() { }

  ngOnInit(): void {
  }

}
