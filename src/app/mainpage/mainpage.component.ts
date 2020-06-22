import { Component } from '@angular/core';

import { MainpageService } from './mainpage.service';

import { FormsModule } from '@angular/forms';

import { GlobalService } from '../global';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  dragon_senha: string;
  senha: string;
  countdown_atual: string;

  constructor(private mainpageService: MainpageService, private globalService: GlobalService) { 
    this.dragon_senha = this.mainpageService.senhas[0]
    this.mainpageService.senhas.subscribe(senha => this.dragon_senha = String(senha[0]))
    this.mainpageService.countdown_atual.subscribe(countdown => this.countdown_atual = String(((Number(new Date(countdown[0]).valueOf() - new Date().valueOf() - 1000) / 1000).toFixed(0))))
  }

  getCountdownAtual() {
    let countdown_number = Number(this.countdown_atual)
    if (Number(this.countdown_atual) <= 0)
      return 0;
    else
      return countdown_number;
  }

  resetarCountdown() {
    if (this.senha == "" || this.senha == undefined) {
      this.globalService.openSnackBar("A senha não foi inserida, favor inserir antes de tentar resultar o countdown timer.", 2500);
    } else if (this.dragon_senha == this.senha) {
      this.mainpageService.updateCountdown();
    } else {
      this.globalService.openSnackBar("Senha inválida, inserir novamente.", 2500);
    }

    this.senha = "";
  }

}
