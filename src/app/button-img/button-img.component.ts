import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-img',
  templateUrl: './button-img.component.html',
  styleUrls: ['./button-img.component.scss']
})
export class ButtonImgComponent{

  @Input() img?: string;

  @Input() text?: string;


}
