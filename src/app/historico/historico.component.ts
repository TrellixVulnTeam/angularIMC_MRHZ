import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Historico } from '../historico';
import {HISTORICOS} from "../mock-histoico";
//IMC

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  @Output() historicoCreated: EventEmitter<Historico> = new EventEmitter();

  public historico: Historico = {
    nombre: '',
    estatura: 0,
    peso: 0,
    isMan: true,
    estado: '',
    color: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  public calcularIMC (): void {
    if (this.historico.peso === 0 || this.historico.estatura === 0 || this.historico.nombre === '') {
      console.log("Si el monstruo de las galletas tiene 0 galletas, y tu tienes 0 amigos, no teneis nada que compartir ni nadie con quien compartir, ahora el monstruo de las galletas esta triste porque no tiene galletas, y tu estas triste porque no tienes amigos");
      this.historico.estado = "Por favor rellene los campos para poder realizar el calculo como es debido";
      this.historico.color = '#FF0100';
      return;
    }

    //console.log("Es un hombre " + this.historico.isMan + " mide " + this.historico.estatura + " peso " + this.historico.peso + " te llamas " + this.historico.nombre);
    var imc: number = this.historico.peso  / ((this.historico.estatura / 100) * (this.historico.estatura / 100));
    console.log(imc)
    if (imc < 18.5) {
      console.log("Tu abuela no te quiere mucho, o la visitas poco");
      this.historico.estado = "Su peso es inferior al normal";
      this.historico.color = '#FF0100';
    } else if (imc > 18.5 && imc < 24.9) {
      this.historico.color = '#1FE1BD';
      console.log("Tas nice")
      this.historico.estado = "Usted se encuentra bien de peso";
    } else if(imc > 25 && imc < 29.9) {
      this.historico.color = "#42A900";
      this.historico.estado = "Su peso es superior al normal";
    } else {
      this.historico.estado = "Usted esta obeso";
      this.historico.color = '#FF0100';
      console.log("No necesitas esta app para saber como estas")
    }


  }

  public clear() :void {
    this.historico.estatura = 0;
    this.historico.peso = 0;
    this.historico.nombre = '';
    this.historico.isMan = true;
  }

  public save() :void {
    if (this.historico.peso === 0 || this.historico.estatura === 0 || this.historico.nombre === '') {
      this.historico.estado = "Por favor rellene los campos para poder realizar el calculo como es debido";
      return;
    }
    this.calcularIMC();
    this.historicoCreated.emit(this.historico);
    //this.historicos.push(this.historico);

    this.clear();
  }
}
