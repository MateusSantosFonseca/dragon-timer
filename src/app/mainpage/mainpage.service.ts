import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { first } from 'rxjs/operators'

import { GlobalService } from '../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainpageService {
  senhas: Observable<any[]>;

  constructor(private angularFireDB: AngularFireDatabase, private globalService: GlobalService) { 
    this.senhas = angularFireDB.list('logins').valueChanges();
  }

  updateCountdown() {
    let id = "countdown_atual"
    let substituto = new Date().toLocaleString()
    this.angularFireDB.list('countdowns/').set(id, substituto)
      .catch((error: any) => {
        this.globalService.openSnackBar("Ocorreu um erro: " + error, 3000);
      })
      .finally(() => this.globalService.openSnackBar("O countdown timer foi resetado com sucesso!", 3000));
  }

  get_countdown() {

  }
}
