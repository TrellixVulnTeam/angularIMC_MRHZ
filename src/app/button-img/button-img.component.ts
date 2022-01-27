import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-img',
  templateUrl: './button-img.component.html',
  styleUrls: ['./button-img.component.scss']
})
export class ButtonImgComponent implements OnInit {

  @Input() img?: string;

  @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
