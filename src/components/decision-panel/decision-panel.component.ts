import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { Politic } from 'src/interfaces/politic';
import { CurrentStateService } from 'src/services/current-state.service';
import { GameModelService } from 'src/services/game-model.service';
import { PlayerVariablesService } from 'src/services/player-variables.service';


@Component({
  selector: 'app-decision-panel',
  templateUrl: './decision-panel.component.html',
  styleUrls: ['./decision-panel.component.scss'],
})
export class DecisionPanelComponent implements OnInit {

  title: string = "DECISION PANEL";
  showActive = false;
  calculated_budget = 0;
  showTable = false;
  tab = "Transports";




  // Temp values for testing
  FINAL_YEAR: number = 2050;
  year: number = 2019;
  budget: number = 2000;
  efficiency: number = 99;
  ratio: number = 32;

  politics: Array<Politic> = [];
  allPolitics: Array<Array<Politic>> = [];
  selectedPolitic: Politic | undefined;
  displayedColumns = ["Policy Name", "Economy Sector", "Price", "getdetails"];
  clickedRow = new Set<Politic>();
  cartCollection = new Set<Politic>();
  use = false;
  installedPower = 0;
  powerToInstall = 0;
  totalPowerCost = 0;
  addedPoliticsCost = 0;
  remainingBudget = 0;

   // Storage of the history of the player's decisions
   decisions_investment_renewables: Array<number> = [];
   decisions_shares_transportation: Array<number> = [];
   decisions_shares_industry: Array<number> = [];
   decisions_shares_residential: Array<number> = [];
   decisions_shares_services: Array<number> = [];
   decisions_eletrification_transportation: Array<number> = [];
   decisions_eletrification_industry: Array<number> = [];
   decisions_eletrification_residential: Array<number> = [];
   decisions_eletrification_services: Array<number> = [];
   renewable_energy_amounts : Array<number> = [];
   total_co2_emissions : Array<number> = [];
   total_efficiency_results: Array<number> = [];
   decisions_economy_type_transportation: Array<number> = [];
   decisions_transports_eletrification: Array<number> = [];
   decisions_industries_eletrification: Array<number> = [];
   decisions_services_eletrification: Array<number> = [];
   decisions_residential_eletrification: Array<number> = [];
   prev_pib_value: Array<number> = [];
   prev_expenditure_value: Array<number> = [];
   prev_utility_value: Array<number> = [];
   renewable_ratio: Array<number> = [];
   current_ratio = 33.95
   simulator_used = false //true when the model debug simulator is used
 
   total_cost = 0
   

  PlayerVariables: PlayerVariablesService;
  Model: GameModelService;


  constructor( playerVariable: PlayerVariablesService , gameModel: GameModelService, private route: ActivatedRoute,
    private router: Router, private currentState: CurrentStateService ) {
      currentState.isOpened.next(true);
      this.PlayerVariables = playerVariable;
      this.Model = gameModel;
      this.allPolitics =  gameModel.initPolitics();
      this.politics = this.allPolitics[0];
      this.selectedPolitic = this.politics[0];
      this.installedPower = this.PlayerVariables.total_installed_power;

      var isFirstRun = sessionStorage.getItem("firstRunFlag");
      if(isFirstRun ==="true") {
        this.initial_model_loading();
        this.firstRun();
        sessionStorage.setItem("firstRunFlag", "false");
      }
   }

  ngOnInit(): void {
   
  }


  public addToCart(id: number) {
    this.politics.forEach(element => {
      if(element.id === id) {
        var tempcalc = this.PlayerVariables.budget-element.price;
        if(tempcalc >= 0) {
          element.isUsed=!element.isUsed;
          this.cartCollection.add(element);
          this.addedPoliticsCost += element.price;
          this.PlayerVariables.budget -= element.price;
          return;
        }
      }
    });
  }

  public changeSelectedPolicy(row: any) {
    this.clickedRow.clear();
    this.politics.forEach(x => {
      if(x.id === row.id) {
        this.selectedPolitic = x;
        this.clickedRow.add(row);
        return;
      }
    });
  }

  public removeFromCart(item: Politic) {
    item.isUsed=!item.isUsed;
    this.cartCollection.delete(item);
    this.addedPoliticsCost -= item.price;
    this.PlayerVariables.budget += item.price;
  }

  public reducePower() {
    var ticCost = 0.1*this.PlayerVariables.cost_per_gigawatt;
    var tempVal = this.powerToInstall - 0.1;
    if(tempVal >= 0) {
      this.powerToInstall = tempVal;
      this.PlayerVariables.budget += ticCost; 
      this.totalPowerCost = this.powerToInstall * this.PlayerVariables.cost_per_gigawatt;
    }
    else {
      this.powerToInstall = 0;
    }
  }

  public addPower() {
    var ticCost = 0.1*this.PlayerVariables.cost_per_gigawatt;
    var tempVal = this.powerToInstall + 0.1;
    var tempcalc= this.PlayerVariables.budget - ticCost;
    if(tempcalc >= 0) {
      if(tempVal <= 10) {
        this.PlayerVariables.budget = tempcalc;
        this.powerToInstall = tempVal;
        this.totalPowerCost = this.powerToInstall * this.PlayerVariables.cost_per_gigawatt;
        
      }
      else {
        this.powerToInstall = 10;
      }
    }
  }

  public submitDecision() {
    this.process_politic();
    this.processNextYear();
    this.updateHistory();
    this.checkGame();    
  }

  public get_renewable_ratio() {
    if(this.Model.eletricidade_nao_renovavel_do_ano.length > 2) {
      var total_energy = this.Model.eletricidade_nao_renovavel_do_ano[this.Model.eletricidade_nao_renovavel_do_ano.length-1] + this.PlayerVariables.renewable_energy;
      var result = Math.min(((this.PlayerVariables.renewable_energy/total_energy) * 100), 100);
      this.current_ratio = result;
      return result
    }
     
    else {
      return 33.95
    }
      
  }

  public initial_model_loading() {
    this.PlayerVariables.starting_year = this.Model.ANO_INICIAL;
    this.PlayerVariables.current_year = this.Model.ano_atual;
    this.PlayerVariables.final_year = this.FINAL_YEAR;
    this.PlayerVariables.money = this.Model.pib_do_ano[this.Model.ano_atual_indice];
    this.PlayerVariables.expenditure = this.Model.consumo_do_ano[this.Model.consumo_do_ano.length-1];
    this.PlayerVariables.utility = this.Model.utilidade_do_ano[this.Model.ano_atual_indice];
    console.log(this.Model.utilidade_do_ano);
    this.PlayerVariables.co2_emissions = this.Model.emissoes_totais_do_ano[this.Model.emissoes_totais_do_ano.length-1]  * Math.pow(10, -9);
    this.PlayerVariables.economic_growth = 1;
    this.PlayerVariables.cost_per_gigawatt = this.Model.CUSTO_POR_GIGAWATT_INSTALADO;
    this.PlayerVariables.efficiency = this.Model.eficiencia_agregada_do_ano[this.Model.ano_atual_indice];
    this.PlayerVariables.total_installed_power = this.Model.potencia_do_ano_solar[this.Model.ano_atual_indice] + this.Model.potencia_do_ano_vento_offshore[this.Model.ano_atual_indice] + this.Model.potencia_do_ano_vento[this.Model.ano_atual_indice] + this.Model.POTENCIA_ANUAL_HIDRO;
    this.PlayerVariables.renewable_energy = this.Model.eletricidade_renovavel_do_ano[this.Model.ano_atual_indice];
    
    this.PlayerVariables.economy_type_percentage_transportation = this.Model.shares_exergia_final_transportes_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.economy_type_percentage_industry = this.Model.shares_exergia_final_industria_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.economy_type_percentage_residential = this.Model.shares_exergia_final_residencial_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.economy_type_percentage_services = this.Model.shares_exergia_final_servicos_do_ano[this.Model.ano_atual_indice] * 100.0;
    
    this.PlayerVariables.electrification_by_sector_percentage_transportation = this.Model.shares_exergia_final_transportes_eletricidade_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.electrification_by_sector_percentage_industry = this.Model.shares_exergia_final_industria_eletricidade_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.electrification_by_sector_percentage_residential = this.Model.shares_exergia_final_residencial_eletricidade_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.electrification_by_sector_percentage_services = this.Model.shares_exergia_final_servicos_eletricidade_do_ano[this.Model.ano_atual_indice] * 100.0;
    
    this.PlayerVariables.budget = this.Model.pib_do_ano[this.Model.ano_atual_indice]*0.01;

     // Storage of the history of the player's decisions
     this.decisions_investment_renewables = [this.PlayerVariables.investment_renewables_percentage];
     this.decisions_shares_transportation = [this.PlayerVariables.economy_type_level_transportation];
     this.decisions_shares_industry = [this.PlayerVariables.economy_type_level_industry];
     this.decisions_shares_residential = [this.PlayerVariables.economy_type_level_residential];
     this.decisions_shares_services = [this.PlayerVariables.economy_type_level_services];
     this.decisions_eletrification_transportation  = [this.PlayerVariables.electrification_by_sector_level_transportation];
     this.decisions_eletrification_industry = [this.PlayerVariables.electrification_by_sector_level_industry];
     this.decisions_eletrification_residential = [this.PlayerVariables.electrification_by_sector_level_residential];
     this.decisions_eletrification_services = [this.PlayerVariables.electrification_by_sector_level_services];
     this.renewable_energy_amounts = [this.PlayerVariables.renewable_energy];
     this.total_co2_emissions = [this.PlayerVariables.co2_emissions];
     this.total_efficiency_results = [this.PlayerVariables.efficiency];
     this.decisions_economy_type_transportation = [this.PlayerVariables.economy_type_percentage_transportation];
     this.decisions_transports_eletrification = [this.PlayerVariables.electrification_by_sector_percentage_transportation];
     this.decisions_industries_eletrification = [this.PlayerVariables.electrification_by_sector_percentage_industry];
     this.decisions_services_eletrification = [this.PlayerVariables.electrification_by_sector_percentage_services];
     this.decisions_residential_eletrification = [this.PlayerVariables.electrification_by_sector_percentage_residential];
     this.prev_pib_value =[this.PlayerVariables.money];
     this.prev_expenditure_value = [this.PlayerVariables.expenditure];
     this.prev_utility_value = [this.PlayerVariables.utility];
     this.renewable_ratio = [];
     this.current_ratio = 33.95;
     this.simulator_used = false; //true when the model debug simulator is used
     this.total_cost = 0;
     this.calculated_budget = 0;
  }

  public process_politic() {
	
    //reset values before setting
    this.PlayerVariables.electrification_by_sector_level_transportation = 6;
    this.PlayerVariables.electrification_by_sector_level_industry = 6;
    this.PlayerVariables.electrification_by_sector_level_services = 6;
    this.PlayerVariables.electrification_by_sector_level_residential = 6;
	
  this.cartCollection.forEach(politic => {
    var impactArray = politic.impact;
    if(this.PlayerVariables.investment_renewables_percentage < 20.00) {
      this.PlayerVariables.investment_renewables_percentage += impactArray[0];
    }
    if(this.PlayerVariables.investment_renewables_percentage > 19.99) {
      this.PlayerVariables.investment_renewables_percentage = 20.00;
    }

    if(politic.type == "Transports") {
			if(this.PlayerVariables.electrification_by_sector_level_transportation < 30) {
				this.PlayerVariables.electrification_by_sector_level_transportation += impactArray[1];
      }
    }
		else if(politic.type == "Industry") {
			if(this.PlayerVariables.electrification_by_sector_level_industry < 30) {
				this.PlayerVariables.electrification_by_sector_level_industry += impactArray[1];
      }
    }
		else if(politic.type == "Services") {
			if(this.PlayerVariables.electrification_by_sector_level_services < 30){
				this.PlayerVariables.electrification_by_sector_level_services += impactArray[1];	
      }
    }	
		else if(politic.type == "Residential"){
			if(this.PlayerVariables.electrification_by_sector_level_residential < 30){
				this.PlayerVariables.electrification_by_sector_level_residential += impactArray[1];
      }
    }
		else {
			console.log("ERROR: @process_politics");
    } 
  });
  }

  public processNextYear() {
    this.storeDecisionHistory();
    this.sendGameDecisionsToModel();
    this.updateModel();
    this.updateGameAfterModel();
	
  }

  public storeDecisionHistory() {
    this.PlayerVariables.investment_renewables_percentage += this.powerToInstall;
    this.decisions_investment_renewables.push(this.PlayerVariables.investment_renewables_percentage);
    this.decisions_shares_transportation.push(this.PlayerVariables.economy_type_level_transportation);
    this.decisions_shares_industry.push(this.PlayerVariables.economy_type_level_industry);
    this.decisions_shares_residential.push(this.PlayerVariables.economy_type_level_residential);
    this.decisions_shares_services.push(this.PlayerVariables.economy_type_level_services);
    this.decisions_eletrification_transportation .push(this.PlayerVariables.electrification_by_sector_level_transportation);
    this.decisions_eletrification_industry.push(this.PlayerVariables.electrification_by_sector_level_industry);
    this.decisions_eletrification_residential.push(this.PlayerVariables.electrification_by_sector_level_residential);
    this.decisions_eletrification_services.push(this.PlayerVariables.electrification_by_sector_level_services);
    this.renewable_energy_amounts.push(this.PlayerVariables.renewable_energy);
    this.total_co2_emissions.push(this.PlayerVariables.co2_emissions);
 
    this.total_efficiency_results.push(this.PlayerVariables.efficiency);
    this.decisions_transports_eletrification.push(this.PlayerVariables.electrification_by_sector_percentage_transportation);
    this.decisions_industries_eletrification.push(this.PlayerVariables.electrification_by_sector_percentage_industry);
    this.decisions_services_eletrification.push(this.PlayerVariables.electrification_by_sector_percentage_services);
    this.decisions_residential_eletrification.push(this.PlayerVariables.electrification_by_sector_percentage_residential);
    this.prev_pib_value.push(this.PlayerVariables.money);
    this.prev_expenditure_value.push(this.PlayerVariables.expenditure);
    this.prev_utility_value.push(this.PlayerVariables.utility);
    this.renewable_ratio.push(this.current_ratio);
  }

  public sendGameDecisionsToModel() {
    this.Model.input_potencia_a_instalar = this.PlayerVariables.investment_renewables_percentage;

    this.Model.input_percentagem_tipo_economia_transportes = this.PlayerVariables.economy_type_level_transportation - 6;
    this.Model.input_percentagem_tipo_economia_industria = this.PlayerVariables.economy_type_level_industry - 6;
    this.Model.input_percentagem_tipo_economia_residencial = this.PlayerVariables.economy_type_level_residential - 6;
    this.Model.input_percentagem_tipo_economia_servicos = this.PlayerVariables.economy_type_level_services - 6;

    this.Model.input_percentagem_eletrificacao_transportes = this.PlayerVariables.electrification_by_sector_level_transportation - 6;
    this.Model.input_percentagem_eletrificacao_industria = this.PlayerVariables.electrification_by_sector_level_industry - 6;
    this.Model.input_percentagem_eletrificacao_residencial = this.PlayerVariables.electrification_by_sector_level_residential - 6;
    this.Model.input_percentagem_eletrificacao_servicos = this.PlayerVariables.electrification_by_sector_level_services - 6;
  }

  public updateModel() {
    this.Model.mudar_de_ano();
    this.Model.calcular_distribuicao_por_fonte();
    this.Model.calcular_custo();
    this.Model.calcular_investimento();
    this.Model.calcular_capital();
    this.Model.calcular_labour();
    this.Model.calcular_tfp();
    this.Model.calcular_pib();
    this.Model.calcular_exergia_util();
    this.Model.calcular_exergia_final();
    this.Model.calcular_shares_de_exergia_final_por_setor();
    this.Model.calcular_valores_absolutos_de_exergia_final_por_setor();
    this.Model.calcular_eletrificacao_etc_de_setores();
    this.Model.calcular_shares_de_exergia_final_por_setor_por_carrier();
    this.Model.calcular_valores_absolutos_de_exergia_final_por_setor_por_carrier();
    this.Model.calcular_eficiencia_por_setor();
    this.Model.calcular_eficiencia_agregada();
    this.Model.calcular_valores_absolutos_de_exergia_final_por_carrier();
    this.Model.calcular_emissoes_CO2_carvao_petroleo_gas_natural();
    this.Model.calcular_eletricidade_de_fontes_renovaveis();
    this.Model.calcular_eletricidade_nao_renovavel();
    this.Model.calcular_emissoes_nao_renovaveis();
    this.Model.calcular_emissoes_totais();
    this.Model.calcular_consumo();
    this.Model.calcular_utilidade();
  }

  public updateGameAfterModel() {
    this.PlayerVariables.current_year = this.Model.ano_atual;
    this.PlayerVariables.money = this.Model.pib_do_ano[this.Model.pib_do_ano.length-1];
    this.calculated_budget = (this.PlayerVariables.money * 1000) * 0.01; //1% of PIB in Millions
    this.PlayerVariables.budget = (this.PlayerVariables.money * 1000) * 0.01;
    this.PlayerVariables.expenditure = this.Model.consumo_do_ano[this.Model.consumo_do_ano.length-1];
    this.PlayerVariables.utility = this.Model.utilidade_do_ano[this.Model.ano_atual_indice];
    this.PlayerVariables.co2_emissions = this.Model.emissoes_totais_do_ano[this.Model.ano_atual_indice] * Math.pow(10, -9);
    this.PlayerVariables.economic_growth = 1;
    this.PlayerVariables.cost_per_gigawatt = this.Model.CUSTO_POR_GIGAWATT_INSTALADO;
    this.PlayerVariables.efficiency = this.Model.eficiencia_agregada_do_ano[this.Model.ano_atual_indice];
    this.PlayerVariables.total_installed_power = this.Model.potencia_do_ano_solar[this.Model.ano_atual_indice] + this.Model.potencia_do_ano_vento_offshore[this.Model.ano_atual_indice] + this.Model.potencia_do_ano_vento[this.Model.ano_atual_indice] + this.Model.POTENCIA_ANUAL_HIDRO;
    this.PlayerVariables.renewable_energy = this.Model.eletricidade_renovavel_do_ano[this.Model.ano_atual_indice];
    
    this.PlayerVariables.economy_type_percentage_transportation = this.Model.shares_exergia_final_transportes_do_ano[this.Model.ano_atual_indice] * 100.0 ;
    this.PlayerVariables.economy_type_percentage_industry = this.Model.shares_exergia_final_industria_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.economy_type_percentage_residential = this.Model.shares_exergia_final_residencial_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.economy_type_percentage_services = this.Model.shares_exergia_final_servicos_do_ano[this.Model.ano_atual_indice] * 100.0;

    this.PlayerVariables.electrification_by_sector_percentage_transportation = this.Model.shares_exergia_final_transportes_eletricidade_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.electrification_by_sector_percentage_industry = this.Model.shares_exergia_final_industria_eletricidade_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.electrification_by_sector_percentage_residential = this.Model.shares_exergia_final_residencial_eletricidade_do_ano[this.Model.ano_atual_indice] * 100.0;
    this.PlayerVariables.electrification_by_sector_percentage_services = this.Model.shares_exergia_final_servicos_eletricidade_do_ano[this.Model.ano_atual_indice] * 100.0;
  }

  public firstRun() {
    this.processNextYear();
  }

  public openConfirmationDialog() {
    this.showActive = true;
    this.showTable = false;
  }

  public confirm() {
    this.submitDecision();
    this.showActive = false;
    this.currentState.updateMenuSelection("info");
    this.router.navigateByUrl("/information"); 
  }

  public decline() {
    this.showActive = false;
  }

  public toggleTable() {
    this.showTable = !this.showTable;
  }

  public onTabChange(event: MatTabChangeEvent) {
    var clickedTab = event.index;
    if(clickedTab == 0) {
      this.tab = "Transports";
      this.politics = this.allPolitics[0];
    }
    else if(clickedTab == 1) {
      this.tab ="Industry";
      this.politics = this.allPolitics[1];
    }
    else if(clickedTab == 2) {
      this.tab = "Residential";
      this.politics = this.allPolitics[2];
    }

    else if(clickedTab == 3) {
      this.tab = "Services";
      this.politics = this.allPolitics[3];
    }
  }

  public checkGame() {
    if(this.PlayerVariables.current_year >= this.PlayerVariables.final_year) {
      this.validateGame();
    }
  }

  public validateGame() {
    var emissionsSuccess = false;
    var happynessSuccess = false;
    if(this.PlayerVariables.co2_emissions <= this.PlayerVariables.final_year_emissions) {
      emissionsSuccess = true;
      if(this.PlayerVariables.utility >= this.PlayerVariables.utility_goals) {
        happynessSuccess = true;
        this.winGame();
      }
      else {
        this.loseGame();
      }
    }
    else {
      this.loseGame();
    }
  }

  public winGame() {
    console.log("VICTORY!");
  }

  public loseGame() {
    console.log("GAME OVER!");
  }

  public updateHistory() {
    this.PlayerVariables.policiesHistoryArray.set(this.PlayerVariables.current_year-4,this.cartCollection);
  }

}