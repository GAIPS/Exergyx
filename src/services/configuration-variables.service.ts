import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationVariablesService {

  constructor() { }

  // CONSTANTES (podem ser alteradas, resultando num jogo diferente)
  ANO_INICIAL: number = 2011;
  FINAL_YEAR: number = 2050;

  POTENCIA_MAXIMA_SOLAR: number = 25; //GW Fonte: 
  POTENCIA_MAXIMA_VENTO: number = 7.500;
  POTENCIA_MAXIMA_VENTO_OFFSHORE: number = 10;

  CUSTO_POR_GIGAWATT_INSTALADO: number = 2100; //???? #euro/GW #necessário dividir por tipo de energia

  PERCENTAGEM_A_RETIRAR_DO_PIB: number = 0.16; //cenário pessimista

  POPULACAO: number = 6800505; //2014
  ALFA: number = 1270; //cenário pessimista
  HORAS_POR_ANO: number = 8760; //24 * 365

  PERCENTAGEM_INPUT_SETAS: number = 0.005; //0.5% (A CONFIRMAR)

  EFICIENCIA_TRANSPORTES: number = 0.0128; // ???? #valores a corrigir #na passagem de exergia final para útil
  EFICIENCIA_INDUSTRIA: number = 0.2484; //????
  EFICIENCIA_RESIDENCIAL: number = 0.1972; // ????
  EFICIENCIA_SERVICOS: number = 0.3046; //????

  FATOR_DE_EMISSAO_CARVAO: number = 94.6; //kg CO2 / TJ
  FATOR_DE_EMISSAO_PETROLEO: number = 74.3;
  FATOR_DE_EMISSAO_GAS_NATURAL: number = 56.1;
  FATOR_DE_EMISSAO_COMB_RENOVAVEIS: number = 0.00;

  FATOR_DE_PRODUCAO_SOLAR: number = 0.1960;
  FATOR_DE_PRODUCAO_VENTO: number = 0.2690;
  FATOR_DE_PRODUCAO_VENTO_OFFSHORE: number = 0.2200;
  FATOR_DE_PRODUCAO_HIDRO: number = 0.1180;

  POTENCIA_ANUAL_HIDRO: number = 5.57; //GW

  INEFICIENCIA_PRIMARIO_PARA_FINAL: number = 1.1;

  MAXIMO_PRODUZIDO_POR_GAS_NATURAL: number = 13550; //GWh

  EFICIENCIA_DE_PRODUCAO_DE_ELETRICIDADE_COM_GAS_NATURAL: number = 0.55;
  EFICIENCIA_DE_PRODUCAO_DE_ELETRICIDADE_COM_CARVAO: number = 0.40;

  // VALORES DO ANO ZERO(e.g. 2014)
  POTENCIA_DO_ANO_ZERO_SOLAR: number = 0.493; //GW
  POTENCIA_DO_ANO_ZERO_VENTO: number = 5.099;
  POTENCIA_DO_ANO_ZERO_VENTO_OFFSHORE: number = 0.5;

  CUSTO_TOTAL_DO_ANO_ZERO: number = 0.00; //valor 2014 ???? #i.e.custo da potência de todas as fontes renováveis consideradas
  CUSTO_DO_ANO_ZERO_SOLAR: number = 0.00;
  CUSTO_DO_ANO_ZERO_VENTO: number = 0.00;
  CUSTO_DO_ANO_ZERO_VENTO_OFFSHORE: number = 0.00;

  PIB_DO_ANO_ZERO: number = 169110000000;
  ORCAMENTO_ANO_ZERO: number = this.PIB_DO_ANO_ZERO * 0.01;

  CAPITAL_DO_ANO_ZERO: number = 532630000000;

  EFF1960: number = 0.12; //Eficiência Agregada de 1960(12 %)
  EFICIENCIA_AGREGADA_DO_ANO_ZERO: number = 0.1638; //16.38 % #valor a ser corrigido

  SHARES_EXERGIA_FINAL_TRANSPORTES_DO_ANO_ZERO: number = 0.3497; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_DO_ANO_ZERO: number = 0.3748; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_DO_ANO_ZERO: number = 0.1608; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_DO_ANO_ZERO: number = 0.1147; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_CARVAO_DO_ANO_ZERO: number = 0.00; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_CARVAO_DO_ANO_ZERO: number = 1.00; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_CARVAO_DO_ANO_ZERO: number = 0.00; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_CARVAO_DO_ANO_ZERO: number = 0.00; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_PETROLEO_DO_ANO_ZERO: number = 0.69193929; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_PETROLEO_DO_ANO_ZERO: number = 0.2247621; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_PETROLEO_DO_ANO_ZERO: number = 0.06297832; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_PETROLEO_DO_ANO_ZERO: number = 0.02032029; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_ELETRICIDADE_DO_ANO_ZERO: number = 0.00633745; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_ELETRICIDADE_DO_ANO_ZERO: number = 0.3920005; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_ELETRICIDADE_DO_ANO_ZERO: number = 0.25003673; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_ELETRICIDADE_DO_ANO_ZERO: number = 0.35162532; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_GAS_NATURAL_DO_ANO_ZERO: number = 0.00717314; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_GAS_NATURAL_DO_ANO_ZERO: number = 0.71186682; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_GAS_NATURAL_DO_ANO_ZERO: number = 0.15300413; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_GAS_NATURAL_DO_ANO_ZERO: number = 0.12795591; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_COMB_RENOVAVEIS_DO_ANO_ZERO: number = 0.12144785; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_COMB_RENOVAVEIS_DO_ANO_ZERO: number = 0.50117928; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_COMB_RENOVAVEIS_DO_ANO_ZERO: number = 0.35719767; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_COMB_RENOVAVEIS_DO_ANO_ZERO: number = 0.0201752; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_HEAT_DO_ANO_ZERO: number = 0.00; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_HEAT_DO_ANO_ZERO: number = 0.91065034; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_HEAT_DO_ANO_ZERO: number = 0.03657347; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_HEAT_DO_ANO_ZERO: number = 0.05277619; //percentagem decimal

}
