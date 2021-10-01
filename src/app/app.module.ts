import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVeiculoComponent } from './components/add-veiculo/add-veiculo.component';
import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';
import { VeiculoDetailsComponent } from './components/veiculo-details/veiculo-details.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddVeiculoComponent,
    VeiculosListComponent,
    VeiculoDetailsComponent,
    FormsModule,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
