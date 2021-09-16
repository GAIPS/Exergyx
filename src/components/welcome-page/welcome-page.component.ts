import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentStateService } from 'src/services/current-state.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {


  constructor(private service: CurrentStateService, private router: Router) {
    service.isOpened.next(false);
   }

  ngOnInit(): void {
    localStorage.removeItem("optionSelected");
  }

  public initSystem() {
    localStorage.setItem("optionSelected", "decision");
    this.router.navigateByUrl("/decision");
    this.service.updateMenuSelection("decision");
  
  }

}
