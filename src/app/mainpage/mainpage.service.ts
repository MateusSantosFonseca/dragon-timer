import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class MainpageService {
  constructor(private angularFireDB: AngularFireDatabase) { }

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
          console.error(error);
        });
    } else {
      alert('nao posso dar push')
    }
  }

  get_countdown() {

  }
}
