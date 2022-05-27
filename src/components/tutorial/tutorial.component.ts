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
  public consented: boolean = true;

  public tutorials = [
    {
      title:"Congratulations",
      text:"Due to your skils and knowledge, you have been chosen as the next in line for the portuguese government."
    },
    {
      title: "Less Co2 Emissions, More Happiness for the Population",
      text: "Your mission is to assure that Portugal uses its economic and energetic resources to reach the optimal levels of CO2 Emissions (must reach close to Zero) and Population Happiness (the higher the better) until 2050."
    },
    {
      title: "Electrify your Economy to reduce CO2 Emissions",
      text: "To reduce the CO2 Emissions, it is necessary to electrify to a significant extent the economic sectors. "
    },
    {
      title: "More eletrification, More economic growth!",
      text: "The higher the electrification of economic sectors, the higher the aggregated efficiency, which promotes economic growth. Thus, the increase in efficiency might cause an increase in energy use (rebound effect)."
    },
    {
      title: "How do I get extra energy?",
      text: "To have extra renewable energy, you need to install Renewable Power."
    },
    {
      title: "What can I do?",
      text: "You can make different decisions, including the installation of infrastructures to produce electricity, or increase the electrification of each economic sector."
    },
    {
      title: "How much should I invest?",
      text: "Enough to achieve your targets. However, the more you invest, the less budget you will have for population consumption (expenditure)."
    },
    {
      title: "Make your Population Happier!",
      text: "The higher the value of expenditure and the lower the value for the CO2 emissions, the higher will be the population happiness."
    }, 
    { 
      title: "Good Luck with your mission!",
      text:"With your influence, you can help the government take the necessary actions to ensure the success of your misison."
    }

  ]

  constructor(private service: CurrentStateService, private router: Router,) { 
    service.isOpened.next(false);
  }

  ngOnInit(): void {

  }

  public next() {
    var newIndex = this.currentIndex + 1;
    if(newIndex <= this.tutorials.length-1) {
      this.currentIndex = newIndex;
    }
    else {
      this.service.updateMenuSelection("decision");
      this.router.navigateByUrl("/decision");
    }
  }

  public skip() {
    this.service.updateMenuSelection("decision");
    this.router.navigateByUrl("/decision");
  }

  public back() {
    var newIndex = this.currentIndex - 1;
    if(newIndex >= this.MIN_INDEX) {
      this.currentIndex = newIndex;
    }
  }

}
