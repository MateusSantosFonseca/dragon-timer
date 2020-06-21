import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MainpageService } from './mainpage.service';

import { FormsModule } from '@angular/forms';

import { GlobalService } from '../global';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  senha: string;
  constructor(private mainpageService: MainpageService, private globalService: GlobalService) { 
    // atualiza o valor do html do timer pro valor recuperado do firebase e inicializa o timer
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
    } else {
      this.mainpageService.tryResetCountdown(this.senha);
    }

    this.senha = "";
    // atualiza o countdown timer com o get countdown_atual do firebase
  }

}
