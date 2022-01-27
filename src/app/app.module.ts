import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoricoComponent } from './historico/historico.component';
import { ButtonImgComponent } from './button-img/button-img.component';
import { InputRangeComponent } from './input-range/input-range.component';
import {FormsModule} from "@angular/forms";
import { LogHistoricoComponent } from './log-historico/log-historico.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoricoComponent,
    ButtonImgComponent,
    InputRangeComponent,
    LogHistoricoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FormsModule,
        FormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
