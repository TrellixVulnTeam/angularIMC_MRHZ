import {Component, Input, OnInit} from '@angular/core';
import {Historico} from "../historico";

@Component({
  selector: 'app-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent {

  @Input() public historico?: Historico;
  @Input() public valueToRange: number = 0;

  @Input() medida?: string;

  public restar(): void {
    if(this.historico !== undefined) {
      if(this.medida === 'Centimetros') {
        this.historico.estatura = this.historico.estatura = (this.historico.estatura === 0 ? 0 : this.historico.estatura - 1)
      }else if(this.medida === 'Kilogramos') {
        this.historico.peso = this.historico.peso = (this.historico.peso === 0 ? 0 : this.historico.peso - 1);
      }
    }
  }

  public sumar(): void {
    if(this.historico !== undefined) {
      if(this.medida === 'Centimetros') {
        this.historico.estatura = this.historico.estatura = (this.historico.estatura === 300 ? 300 : this.historico.estatura + 1)
      }else if(this.medida === 'Kilogramos') {
        this.historico.peso = this.historico.peso = (this.historico.peso === 300 ? 300 : this.historico.peso + 1)
      }
    }
  }

}
