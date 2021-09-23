import { Injectable } from '@angular/core';
import { Politic } from 'src/interfaces/politic';

@Injectable({
  providedIn: 'root'
})
export class PlayerVariablesService {

  constructor() { }

  starting_year = 2015;
  yearsArray: Array<any> = [2019, 2023, 2027, 2031, 2035, 2039, 2043, 2047, 2050];
  policiesHistoryArray: Map<number,Set<Politic>> = new Map<number, Set<Politic>>(); 

  // Current year Variables
  current_year: number = 2019;
  money: number = 50000000;
  expenditure: number = 0; //"consumo"
  utility: number = 100;
  co2_emissions: number = 70;
  economic_growth: number = 1;
  cost_per_gigawatt: number = 1935; //M€
  efficiency: number = 0.7;
  total_installed_power: number = 0.00;
  renewable_energy: number = 0.00;

  economy_type_percentage_transportation: number = 25.00;    //from 0 to 100, sum of all four 100%
  economy_type_percentage_industry: number = 25.00;
  economy_type_percentage_residential: number = 25.00;
  economy_type_percentage_services: number = 25.00;
  electrification_by_sector_percentage_transportation: number = 25.00;  //from 0 to 100
  electrification_by_sector_percentage_industry: number = 25.00;
  electrification_by_sector_percentage_residential: number = 25.00;
  electrification_by_sector_percentage_services: number = 25.00;

  // Final year predictions
  final_year: number = 2050
  final_year_utility: number = 100
  final_year_emissions: number = 70
  final_year_efficiency: number = 0.00
  final_year_expenditure: number = 0;
  final_year_money: number = 0;
  final_year_economic_growth: number = 1;

  // Final year goals
  utility_goals: number = 1
  emission_goals: number = 14;  // NOTA: No roteiro este valor é de 2 Mt CO2
  economic_growth_goals: number = 1; // Unused as of this version
  // Player decisions here
  investment_renewables_percentage: number = 0.00;
  investment_cost: number = 0;
  economy_type_level_transportation: number = 6;       //from 1 to 11 (visual -5 to 5), maps to percentage
  economy_type_level_industry: number = 6;
  economy_type_level_residential: number = 6;
  economy_type_level_services: number = 6;
  electrification_by_sector_level_transportation: number = 6;   //from 1 to 11 (visual -5 to 5), maps to percentage
  electrification_by_sector_level_industry: number = 6;
  electrification_by_sector_level_residential: number = 6;
  electrification_by_sector_level_services: number = 6;

  extra_year_text: string = "";
  budget: number = this.money * 0.01;

  renewableRatioArray: Array<number> = [];
}
