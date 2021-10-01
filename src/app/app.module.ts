import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVeiculoComponent } from './components/add-veiculo/add-veiculo.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';
import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVeiculoComponent,
    TutorialDetailsComponent,
    VeiculoListComponent,
    VeiculosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
