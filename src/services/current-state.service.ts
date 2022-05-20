import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { decisionObject } from 'src/interfaces/decisionObject';
import { naturalEventNew } from 'src/interfaces/naturalEventNew';
import { Politic } from 'src/interfaces/politic';
import { stateObject } from 'src/interfaces/stateObject';
import { storeObject } from 'src/interfaces/storeObject';

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
  storeState: Map<string,storeObject> = new Map<string,storeObject>();
  isAuthenticated: BehaviorSubject<boolean>;




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
    this.isAuthenticated = new BehaviorSubject<boolean>(false);
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

  public updateStoreState(year: string, stateObj: stateObject, decisionObj: decisionObject) {
    let currentStoreObj: storeObject = {
      state: stateObj,
      decisions: decisionObj
    };
    if(!this.storeState.has(year)) {
      this.storeState.set(year, currentStoreObj);
    }
    console.log(this.storeState);
  }

  public getStoreState(): Map<string, storeObject> {
    return this.storeState;
  }

  public checkLogin(usr: string, pswd: string) {
    if(usr ==='admin' && pswd ==='admin') {
      return true;
    }
    return false;
  }
}
