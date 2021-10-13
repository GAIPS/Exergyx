import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentStateService } from 'src/services/current-state.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  public currentIndex: number = 0;
  private MIN_INDEX: number = 0;
  public consented: boolean = false;

  public tutorials = [
    {
      title:"Congratulations",
      text:"Due to your skils and knowledge, you have been chosen as the next in line for the portuguese government."

    },
    {
      title: "Less Co2 Emissions, More Happiness for the Population",
      text: "Your mission is to assure that Portugal uses its economical and energetic resources to reach the optimal levels of CO2 Emissions (must reach close to Zero) and Population Happiness (the higher the better) until 2050."
    },
    {
      title: "Electrify your Economy to reduce CO2 Emissions",
      text: "To reduce the CO2 Emissions, it is necessary to exist a significative electrification of your Economy Sectors. (More Eletrification Percentage than Exergy’s)."
    },
    {
      title: "More eletrification, More economical growth!",
      text: "The more electrification you add to those sectors the higher will be the aggregated efficiency, which helps promote the economical growth and therefore helps increasing the usage of energy."
    },
    {
      title: "How do I get extra energy?",
      text: "To have extra energy in a reweable manner, you need to invest in instalations of Renewable Power. "
    },
    {
      title: "How do I invest in Renewable Power?",
      text: "You can make different decisions, including the installation of infrastructures that inscreases the production of Electric Renewable Power, and rise up the electrification of one of the sectors."
    },
    {
      title: "Invest more in Renewable Power!",
      text: "However, the more you invest in energy, the less budget you will have to increase the Expendure value."
    },
    {
      title: "Make your Population Happier!",
      text: "The higher the value of Expenditure and the lower the value for the CO2 Emissions are, the higher will be the Population Happiness."
    }, 
    { 
      title: "Good Luck with your mission!",
      text:"With your influence, you can help the government taking the necessary actions to insure the success of your misison."
    }

  ]

  constructor(private service: CurrentStateService, private router: Router,) { 
    service.isOpened.next(false);
  }

  ngOnInit(): void {

  }

  public skip() {
    var newIndex = this.currentIndex + 1;
    if(newIndex <= this.tutorials.length-1) {
      this.currentIndex = newIndex;
    }
    else {
      this.service.updateMenuSelection("decision");
      this.router.navigateByUrl("/decision");
    }
  }

  public back() {
    var newIndex = this.currentIndex - 1;
    if(newIndex >= this.MIN_INDEX) {
      this.currentIndex = newIndex;
    }
  }

  public confirmConsent() {
    this.consented = true;
  }

}
