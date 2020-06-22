import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { GlobalService } from '../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainpageService {
  senhas: Observable<any[]>;
  countdown_atual: Observable<any[]>

  constructor(private angularFireDB: AngularFireDatabase, private globalService: GlobalService) { 
    this.senhas = angularFireDB.list('logins').valueChanges();
    this.countdown_atual = angularFireDB.list('countdowns').valueChanges();
  }

  updateCountdown() {
    let id = "countdown_atual";
    let data_countdown = new Date();
    data_countdown.setDate(data_countdown.getDate() + 1)
    let dataCountdownString = data_countdown.toString()
    this.angularFireDB.list('countdowns/').set(id, dataCountdownString)
      .catch((error: any) => {
        this.globalService.openSnackBar("Ocorreu um erro ao comunicar com firebase", 2500);
      })
      .finally(() => this.globalService.openSnackBar("O countdown timer foi resetado com sucesso!", 2500));
  }
}
