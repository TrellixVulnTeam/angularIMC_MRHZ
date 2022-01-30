import { Component, OnInit } from '@angular/core';
import {HISTORICOS} from "../mock-histoico";
import {Historico} from "../historico";

@Component({
  selector: 'app-log-historico',
  templateUrl: './log-historico.component.html',
  styleUrls: ['./log-historico.component.scss']
})
export class LogHistoricoComponent implements OnInit {

  constructor() { }

  public historicos = HISTORICOS;
  ngOnInit(): void {
  }

  public onHeroCreated(historico:Historico) {
    console.log(historico);

    var perico: Historico = {
      nombre: '',
      isMan: false,
      estatura: 0,
      peso: 0,
      estado: '',
      color: ''
    };
    Object.assign(perico, historico);;

    this.historicos.push(perico);
  }

}
