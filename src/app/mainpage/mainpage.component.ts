import { Component, OnInit } from '@angular/core';

import { MainpageService } from './mainpage.service';

import { FormsModule } from '@angular/forms';

import { GlobalService } from '../global';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  dragon_senha: string;
  senha: string;
  countdown_atual: string;

  constructor(private mainpageService: MainpageService, private globalService: GlobalService) { 
    // atualiza o valor do html do timer pro valor recuperado do firebase e inicializa o timer
    this.dragon_senha = this.mainpageService.senhas[0]
    this.mainpageService.senhas.subscribe(senha => this.dragon_senha = String(senha[0]))
    this.mainpageService.countdown_atual.subscribe(countdown => this.countdown_atual = String(((Number(new Date(countdown[0]).valueOf() - new Date().valueOf()) / 1000).toFixed(0))))
  }

  ngOnInit(): void {
    //Iniciando:
    //1- Busca o countdown_atual do firebase
    //2- Caso esteja zerado, troca o 00:00:00 da string para alguma coisa que arremeta a tempo zerado
    //2- Caso nao esteja zerado, pega o tempo atual do firebase, calcula quanto tempo falta em relação a data atual e atualiza a label automaticamente
    //talvez usando a biblioteca
  }

  resetar_countdown() {
    if (this.senha == "" || this.senha == undefined) {
      this.globalService.openSnackBar("A senha não foi inserida, favor inserir antes de tentar resultar o countdown timer.", 3000);
    } else if (this.dragon_senha == this.senha) {
      this.mainpageService.updateCountdown();
    } else {
      this.globalService.openSnackBar("Senha inválida, inserir novamente.", 3000);
    }

    this.senha = "";
    // atualiza o countdown timer com o get countdown_atual do firebase
  }

}
