import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = "Curso de Angular";
  anuncio: string = `O ${ this.nomeProduto } está em promoção!`
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = false;
  foto:string = 'assets/img/crud.png';
  dataValidade = '2021-12-31'

  constructor() {
    // Variaveis de string com concatenação
    // this.anuncio = `O ` + this.nomeProduto + ` esta em promoção!` ;

    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

  }
  ngOnInit(): void {
  }

}
