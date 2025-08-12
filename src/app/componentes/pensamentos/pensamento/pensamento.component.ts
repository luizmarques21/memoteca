import {Component, Input, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false
  }

  constructor(private service: PensamentoService) {
  }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    return this.pensamento.conteudo.length >= 256
      ? 'pensamento-g'
      : 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito ? 'ativo' : 'inativo';
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe()
  }

}
