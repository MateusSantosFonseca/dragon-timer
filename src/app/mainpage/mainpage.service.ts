import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { first } from 'rxjs/operators'

import { GlobalService } from '../global';

@Injectable({
  providedIn: 'root'
})

export class MainpageService {
  constructor(private angularFireDB: AngularFireDatabase, private globalService: GlobalService) { }

  tryResetCountdown(senha_argumento) {
    this.angularFireDB.list('logins')
      .valueChanges()
      .pipe(first())
      .subscribe(senha => this.updateCountdown(senha, senha_argumento))
  }

  updateCountdown(senha, senha_argumento) {
    if (senha == senha_argumento) {
      let id = "countdown_atual"
      let substituto = new Date().toLocaleString()
      this.angularFireDB.list('countdowns/').set(id, substituto)
        .catch((error: any) => {
          this.globalService.openSnackBar("Ocorreu um erro: " + error, 3000);
        })
        .finally(() => this.globalService.openSnackBar("O countdown timer foi resetado com sucesso!", 3000));
    } else {
      this.globalService.openSnackBar("Senha incorreta, não foi possível resetar o countdown timer!", 3000);
    }
  }

  get_countdown() {

  }
}
