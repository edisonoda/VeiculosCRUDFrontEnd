import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-details',
  templateUrl: './veiculo-details.component.html',
  styleUrls: ['./veiculo-details.component.css']
})
export class VeiculoDetailsComponent implements OnInit {
  currentVeiculo = {
    id: 0,
    placa: '',
    chassi: '',
    renavam: 0,
    modelo: '',
    marca: '',
    ano: 0
  };
  message = '';

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getVeiculo(this.route.snapshot.paramMap.get('id'));
  }

  getVeiculo(id: any): void {
    this.veiculoService.get(id)
      .subscribe(
        data => {
          this.currentVeiculo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateVeiculo(): void {
    this.veiculoService.update(this.currentVeiculo.id, this.currentVeiculo)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'O veículo foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }
  

  deleteVeiculo(): void {
    this.veiculoService.delete(this.currentVeiculo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/veiculos']);
        },
        error => {
          console.log(error);
        });
  }
}
