import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {
  veiculo = {
    id: 0,
    placa: '',
    chassi: '',
    renavam: 0,
    modelo: '',
    marca: '',
    ano: 0
  };
  submitted = false;

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
  }

  saveVeiculo(): void {
    const data = {
      id: this.veiculo.id,
      placa: this.veiculo.placa,
      chassi: this.veiculo.chassi,
      renavam: this.veiculo.renavam,
      modelo: this.veiculo.modelo,
      marca: this.veiculo.marca,
      ano: this.veiculo.ano
    };

    this.veiculoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newVeiculo(): void {
    this.submitted = false;
    this.veiculo = {
      id: 0,
      placa: '',
      chassi: '',
      renavam: 0,
      modelo: '',
      marca: '',
      ano: 0
    };
  }

}