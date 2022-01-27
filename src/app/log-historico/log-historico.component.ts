import { Component, OnInit } from '@angular/core';
import {HISTORICOS} from "../mock-histoico";

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

}
