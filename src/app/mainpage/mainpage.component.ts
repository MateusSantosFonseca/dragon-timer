import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { MainpageService } from './mainpage.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  constructor(private mainpageService: MainpageService) { this.mainpageService.tryResetCountdown("dragon321@") }

  ngOnInit(): void {
    //Iniciando:
    //1- Busca o countdown_atual do firebase
    //2- Caso esteja zerado, troca o 00:00:00 da string para alguma coisa que arremeta a tempo zerado
    //2- Caso nao esteja zerado, pega o tempo atual do firebase, calcula quanto tempo falta em relação a data atual e atualiza a label automaticamente
    //usando a biblioteca la
  }

  teste(){
    
  }

  resetar_countdown() {
    //quando clicar no resetar contador:
    //1- solicita senha
    //2- se tiver certo:
      //1- fecha modal e lanca um update com datetime .now pro countdown timer do firebase
      //2- atualiza o countdown timer do html como datetime .now
      //3- alerta sucesso da atualização
    //2- se tiver errado:
      //1- alerta falando que usuário tava invalido e nao foi resetado o timer
  }

}
