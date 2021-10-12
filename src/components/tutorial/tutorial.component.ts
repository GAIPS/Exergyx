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
  private MAX_INDEX: number = 6;
  private MIN_INDEX: number = 0;

  public tutorials = [
    {
      title: "Less Co2 Emissions, More Happiness for the Population",
      text: "Your mission is to assure that Portugal uses its economical and energetic resources to reach the optimal levels of CO2 Emissions (must reach close to Zero) and Population Happiness (the higher the better) until 2050."
    },
    {
      title: "Electrify your Economy to reduce CO2 Emissions",
      text: "To reduce the CO2 Emissions, it is necessary that exists a significative electrification of your Economy Sectors. (More Eletrification Percentage than Exergy’s)."
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
      text: "You can make different decissions, including the installation of infrastructures that rise up the production of Electric Renewable Power, and rise up the electrification of one of the sectors."
    },
    {
      title: "Invest more in Renewable Power!",
      text: "However, the more you invest in energy, the less budget you will have to rise the Expendure value."
    },
    {
      title: "Make your Population Happier!",
      text: "The heigher the value of Expenditure and the lower the value for the CO2 Emissions are, the heigher will be the Population Happiness."
    }

  ]

  constructor(private service: CurrentStateService, private router: Router,) { 
    service.isOpened.next(false);
  }

  ngOnInit(): void {

  }

  public skip() {
    var newIndex = this.currentIndex + 1;
    if(newIndex <= this.MAX_INDEX) {
      this.currentIndex = newIndex;
    }
    else {
      this.router.navigateByUrl("/decision");
    }
  }

  public back() {
    var newIndex = this.currentIndex - 1;
    if(newIndex >= this.MIN_INDEX) {
      this.currentIndex = newIndex;
    }
  }

}
