import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { naturalEventNew } from 'src/interfaces/naturalEventNew';
import { Politic } from 'src/interfaces/politic';

@Injectable({
  providedIn: 'root'
})
export class CurrentStateService {

  infoActive: BehaviorSubject<boolean>;
  decisionActive: BehaviorSubject<boolean>;
  historyActive: BehaviorSubject<boolean>;
  isOpened: BehaviorSubject<boolean>;
  activeNew: BehaviorSubject<naturalEventNew>;
  currentYear: number = 2019;
  cartCollection: BehaviorSubject<Set<Politic>>;
  currentCartPrice: BehaviorSubject<number>;
  powerToInstall: BehaviorSubject<number>;
  totalPowerCost: BehaviorSubject<number>;




  constructor() {
    this.infoActive = new BehaviorSubject<boolean>(false);
    this.decisionActive = new BehaviorSubject<boolean>(false);
    this.historyActive = new BehaviorSubject<boolean>(false);
    this.isOpened = new BehaviorSubject<boolean>(false);
    this.activeNew = new BehaviorSubject<naturalEventNew>({
      id:0,
      title: "",
      description: "",
      effect: "",
      type: "",
      amount: 0,
      used: false,
      affects:""
    });
    this.cartCollection = new BehaviorSubject<Set<Politic>>(new Set<Politic>());
    this.currentCartPrice = new BehaviorSubject<number>(0);
    this.powerToInstall = new BehaviorSubject<number>(0);
    this.totalPowerCost = new BehaviorSubject<number>(0);
  }

    isFirstRun = true;
  
  public updateMenuSelection(option: string) {
    if (option === "info") {
      this.infoActive.next(true);
      this.decisionActive.next(false);
      this.historyActive.next(false);
    }
    else if (option === "decision") {
      this.infoActive.next(false);
      this.decisionActive.next(true);
      this.historyActive.next(false);
    }
    else if (option == "history") {
      this.infoActive.next(false);
      this.decisionActive.next(false);
      this.historyActive.next(true);
    }
    else {
      this.infoActive.next(false);
      this.decisionActive.next(false);
      this.historyActive.next(false);
    }
  }

  public updateActiveNew(currentYear: number, eventNew: naturalEventNew) {
    if(this.currentYear < currentYear) {
      this.activeNew.next(eventNew);
      this.currentYear = currentYear;
    }
  }

  public getActiveNew(): BehaviorSubject<naturalEventNew> {
    return this.activeNew;
  }

  public getCartCollection(): BehaviorSubject<Set<Politic>> {
    return this.cartCollection;
  }

}
