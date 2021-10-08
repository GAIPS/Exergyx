import { Injectable } from '@angular/core';
import { naturalEventNew } from 'src/interfaces/naturalEventNew';
import { Politic } from 'src/interfaces/politic';

@Injectable({
  providedIn: 'root'
})
export class GameModelService {

  constructor() { }
  ANO_INICIAL: number = 2015;

  POTENCIA_MAXIMA_SOLAR: number = 18.6; //GW revisto
  POTENCIA_MAXIMA_VENTO: number = 15.0;
  POTENCIA_MAXIMA_VENTO_OFFSHORE: number = 10;

  CUSTO_POR_GIGAWATT_INSTALADO_SOLAR: number = 995000000; // euro/GW
  CUSTO_POR_GIGAWATT_INSTALADO_VENTO: number = 1231000000;
  CUSTO_POR_GIGAWATT_INSTALADO_VENTO_OFFSHORE: number = 3581000000;

  CUSTO_POR_GIGAWATT_INSTALADO: number = 1936; //euro/GW #esta é uma média dos valores acima, para apresentação estatística. Os valores a usar são os acima.

  PERCENTAGEM_A_RETIRAR_DO_PIB: number = 0.16; //cenário pessimista

  POPULACAO: number = 6800505;
  ALFA: number = 1270; //cenário pessimista
  HORAS_POR_ANO: number = 8760; //24 * 365

  PERCENTAGEM_INPUT_SETAS: number = 0.005; //0.5% (A CONFIRMAR)

  EFICIENCIA_TRANSPORTES: number = 0.1329; //na passagem de exergia final para útil
  EFICIENCIA_INDUSTRIA: number = 0.3799;
  EFICIENCIA_RESIDENCIAL: number = 0.1209;
  EFICIENCIA_SERVICOS: number = 0.1529;

  EFICIENCIA_TRANSPORTES_ELETRICIDADE: number = 0.88; //na passagem de exergia final para útil
  EFICIENCIA_TRANSPORTES_CARVAO: number = 0.00; //na passagem de exergia final para útil #Nota tese: ASSUMIMOS QUE HÁ SETORES QUE NAO VOLTARÃO A UTILIZAR CARVÃO
  EFICIENCIA_TRANSPORTES_PETROLEO: number = 0.13; //na passagem de exergia final para útil
  EFICIENCIA_TRANSPORTES_GAS_NATURAL: number = 0.08; //na passagem de exergia final para útil
  EFICIENCIA_TRANSPORTES_COMB_RENOVAVEIS: number = 0.13; //na passagem de exergia final para útil
  EFICIENCIA_TRANSPORTES_HEAT: number = 0.00; //na passagem de exergia final para útil

  EFICIENCIA_INDUSTRIA_ELETRICIDADE: number = 0.75; //na passagem de exergia final para útil
  EFICIENCIA_INDUSTRIA_CARVAO: number = 0.39; //na passagem de exergia final para útil
  EFICIENCIA_INDUSTRIA_PETROLEO: number = 0.24; //na passagem de exergia final para útil
  EFICIENCIA_INDUSTRIA_GAS_NATURAL: number = 0.30; //na passagem de exergia final para útil
  EFICIENCIA_INDUSTRIA_COMB_RENOVAVEIS: number = 0.20; //na passagem de exergia final para útil
  EFICIENCIA_INDUSTRIA_HEAT: number = 0.27; //na passagem de exergia final para útil

  EFICIENCIA_RESIDENCIAL_ELETRICIDADE: number = 0.17; //na passagem de exergia final para útil
  EFICIENCIA_RESIDENCIAL_CARVAO: number = 0.00; //na passagem de exergia final para útil
  EFICIENCIA_RESIDENCIAL_PETROLEO: number = 0.09; //na passagem de exergia final para útil
  EFICIENCIA_RESIDENCIAL_GAS_NATURAL: number = 0.09; //na passagem de exergia final para útil
  EFICIENCIA_RESIDENCIAL_COMB_RENOVAVEIS: number = 0.09; //na passagem de exergia final para útil
  EFICIENCIA_RESIDENCIAL_HEAT: number = 0.09; //na passagem de exergia final para útil

  EFICIENCIA_SERVICOS_ELETRICIDADE: number = 0.17; //na passagem de exergia final para útil
  EFICIENCIA_SERVICOS_CARVAO: number = 0.00; //na passagem de exergia final para útil
  EFICIENCIA_SERVICOS_PETROLEO: number = 0.09; //na passagem de exergia final para útil
  EFICIENCIA_SERVICOS_GAS_NATURAL: number = 0.09; //na passagem de exergia final para útil
  EFICIENCIA_SERVICOS_COMB_RENOVAVEIS: number = 0.09; //na passagem de exergia final para útil
  EFICIENCIA_SERVICOS_HEAT: number = 0.09; //na passagem de exergia final para útil

  FATOR_DE_EMISSAO_CARVAO: number = 94.6 * 1000; // kg CO2 / TJ
  FATOR_DE_EMISSAO_PETROLEO: number = 73.3 * 1000;
  FATOR_DE_EMISSAO_GAS_NATURAL: number = 56.1 * 1000;
  FATOR_DE_EMISSAO_COMB_RENOVAVEIS: number = 0.00 * 1000;



  FATOR_DE_PRODUCAO_SOLAR: number = 0.1960;
  FATOR_DE_PRODUCAO_VENTO: number = 0.2690;
  FATOR_DE_PRODUCAO_VENTO_OFFSHORE: number = 0.2200;
  FATOR_DE_PRODUCAO_HIDRO: number = 0.1180;

  POTENCIA_ANUAL_HIDRO: number = 5.57; //GW

  INEFICIENCIA_PRIMARIO_PARA_FINAL: number = 1.1;

  MAXIMO_PRODUZIDO_POR_GAS_NATURAL: number = 13550; //GWh

  EFICIENCIA_DE_PRODUCAO_DE_ELETRICIDADE_COM_GAS_NATURAL: number = 0.55;
  EFICIENCIA_DE_PRODUCAO_DE_ELETRICIDADE_COM_CARVAO: number = 0.40;


  // VALORES DO ANO ZERO (e.g. 2014)
  POTENCIA_DO_ANO_ZERO_SOLAR: number = 0.493; //GW
  POTENCIA_DO_ANO_ZERO_VENTO: number = 5.099;
  POTENCIA_DO_ANO_ZERO_VENTO_OFFSHORE: number = 0;

  CUSTO_TOTAL_DO_ANO_ZERO: number = 0.00; //i.e. custo da potência de todas as fontes renováveis consideradas. Preencher se houver necessidade de mostrar ao jogador.
  CUSTO_DO_ANO_ZERO_SOLAR: number = 0.00;
  CUSTO_DO_ANO_ZERO_VENTO: number = 0.00;
  CUSTO_DO_ANO_ZERO_VENTO_OFFSHORE: number = 0.00;

  PIB_DO_ANO_ZERO: number = 169.11; //milhares de milhões de euros
  ORCAMENTO_ANO_ZERO: number = this.PIB_DO_ANO_ZERO * 0.01;
  CAPITAL_DO_ANO_ZERO: number = 532.63; //milhares de milhões de euros

  EFF1960: number = 0.14; //Eficiência Agregada de 1960(0.142140933352638) (João)
  EFICIENCIA_AGREGADA_DO_ANO_ZERO: number = 0.2252; //22.52 % (Laura)

  EXERGIA_FINAL_DO_ANO_ZERO: number = 688470.92; //TJ

  EXERGIA_FINAL_TRANSPORTES_DO_ANO_ZERO: number = 241842.02; //TJ
  EXERGIA_FINAL_INDUSTRIA_DO_ANO_ZERO: number = 256121.43; //TJ
  EXERGIA_FINAL_RESIDENCIAL_DO_ANO_ZERO: number = 111174.31; //TJ
  EXERGIA_FINAL_SERVICOS_DO_ANO_ZERO: number = 79333.15; //TJ

  SHARES_EXERGIA_FINAL_TRANSPORTES_DO_ANO_ZERO: number = 0.3513; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_DO_ANO_ZERO: number = 0.3720; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_DO_ANO_ZERO: number = 0.1615; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_DO_ANO_ZERO: number = 0.1152; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_CARVAO_DO_ANO_ZERO: number = 0.00; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_CARVAO_DO_ANO_ZERO: number = 0.0005713; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_CARVAO_DO_ANO_ZERO: number = 0.00; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_CARVAO_DO_ANO_ZERO: number = 0.00; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_PETROLEO_DO_ANO_ZERO: number = 0.9431958; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_PETROLEO_DO_ANO_ZERO: number = 0.2899247; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_PETROLEO_DO_ANO_ZERO: number = 0.0844385; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_PETROLEO_DO_ANO_ZERO: number = 0.1867464; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_ELETRICIDADE_DO_ANO_ZERO: number = 0.0044963; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_ELETRICIDADE_DO_ANO_ZERO: number = 0.2626102; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_ELETRICIDADE_DO_ANO_ZERO: number = 0.7604949; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_ELETRICIDADE_DO_ANO_ZERO: number = 0.385896; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_GAS_NATURAL_DO_ANO_ZERO: number = 0.0021784; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_GAS_NATURAL_DO_ANO_ZERO: number = 0.2041305; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_GAS_NATURAL_DO_ANO_ZERO: number = 0.118457; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_GAS_NATURAL_DO_ANO_ZERO: number = 0.1010773; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_COMB_RENOVAVEIS_DO_ANO_ZERO: number = 0.0501295; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_COMB_RENOVAVEIS_DO_ANO_ZERO: number = 0.1953363; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_COMB_RENOVAVEIS_DO_ANO_ZERO: number = 0.3507302; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_COMB_RENOVAVEIS_DO_ANO_ZERO: number = 0.0253863; //percentagem decimal

  SHARES_EXERGIA_FINAL_TRANSPORTES_HEAT_DO_ANO_ZERO: number = 0.00; //percentagem decimal
  SHARES_EXERGIA_FINAL_INDUSTRIA_HEAT_DO_ANO_ZERO: number = 0.0474271; //percentagem decimal
  SHARES_EXERGIA_FINAL_RESIDENCIAL_HEAT_DO_ANO_ZERO: number = 0.0055501; //percentagem decimal
  SHARES_EXERGIA_FINAL_SERVICOS_HEAT_DO_ANO_ZERO: number = 0.0112233; //percentagem decimal

  EXERGIA_FINAL_CARVAO_DO_ANO_ZERO: number = 146.32; //TJ
  EXERGIA_FINAL_PETROLEO_DO_ANO_ZERO: number = 329820.48; //TJ
  EXERGIA_FINAL_ELETRICIDADE_DO_ANO_ZERO: number = 171581.67; //TJ
  EXERGIA_FINAL_GAS_NATURAL_DO_ANO_ZERO: number = 73443.77; //TJ

  UTILIDADE_DO_ANO_UM: number = 6606903717100.8291;

  // VARIÁVEIS
  ano_atual_indice: number = 0;
  ano_atual: number = this.ano_atual_indice + this.ANO_INICIAL;

  // VARS DECISOES
  input_potencia_a_instalar: number = 0.0;

  input_percentagem_tipo_economia_transportes: number = 0.0;
  input_percentagem_tipo_economia_industria: number = 0.0;
  input_percentagem_tipo_economia_residencial: number = 0.0;
  input_percentagem_tipo_economia_servicos: number = 0.0;

  input_percentagem_eletrificacao_transportes: number = 0.0;
  input_percentagem_eletrificacao_industria: number = 0.0;
  input_percentagem_eletrificacao_residencial: number = 0.0;
  input_percentagem_eletrificacao_servicos: number = 0.0;

  // VARS 1)
  potencia_solar_instantanea: number = 0.0;
  potencia_vento_instantanea: number = 0.0;
  potencia_vento_offshore_instantanea: number = 0.0;

  potencia_do_ano_solar: Array<number> = [this.POTENCIA_DO_ANO_ZERO_SOLAR];
  potencia_do_ano_vento: Array<number> = [this.POTENCIA_DO_ANO_ZERO_VENTO];
  potencia_do_ano_vento_offshore: Array<number> = [this.POTENCIA_DO_ANO_ZERO_VENTO_OFFSHORE];

  // VARS 2)
  custo_total_do_ano: Array<number> = [this.CUSTO_TOTAL_DO_ANO_ZERO];
  custo_do_ano_solar: Array<number> = [this.CUSTO_DO_ANO_ZERO_SOLAR];
  custo_do_ano_vento: Array<number> = [this.CUSTO_DO_ANO_ZERO_VENTO];
  custo_do_ano_vento_offshore: Array<number> = [this.CUSTO_DO_ANO_ZERO_VENTO_OFFSHORE];

  // VARS 3)
  pib_do_ano: Array<number> = [this.PIB_DO_ANO_ZERO];
  investimento_total_do_ano: Array<number> = [0.0];
  investimento_para_capital_do_ano: Array<number> = [0.0];
  orcamento_ano: Array<number> = [this.ORCAMENTO_ANO_ZERO];

  // VARS 4)
  capital_do_ano: Array<number> = [this.CAPITAL_DO_ANO_ZERO];

  // VARS 5)
  labour_do_ano: Array<number> = [0];

  // VARS 6) e 15)
  tfp_do_ano: Array<number> = [0.00];
  eficiencia_agregada_do_ano: Array<number> = [this.EFICIENCIA_AGREGADA_DO_ANO_ZERO]; //percentagem decimal #USADA NO PASSO 15)

  // VARS 8)
  exergia_util_do_ano: Array<number> = [0.0]; //TJ

  // VARS 9)
  exergia_final_do_ano: Array<number> = [this.EXERGIA_FINAL_DO_ANO_ZERO]; //TJ

  // VARS 10)
  shares_exergia_final_transportes_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_TRANSPORTES_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_industria_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_INDUSTRIA_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_residencial_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_RESIDENCIAL_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_servicos_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_SERVICOS_DO_ANO_ZERO]; //percentagem decimal

  // VARS 11)
  shares_exergia_final_transportes_carvao_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_TRANSPORTES_CARVAO_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_industria_carvao_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_INDUSTRIA_CARVAO_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_residencial_carvao_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_RESIDENCIAL_CARVAO_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_servicos_carvao_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_SERVICOS_CARVAO_DO_ANO_ZERO]; //percentagem decimal

  shares_exergia_final_transportes_petroleo_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_TRANSPORTES_PETROLEO_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_industria_petroleo_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_INDUSTRIA_PETROLEO_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_residencial_petroleo_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_RESIDENCIAL_PETROLEO_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_servicos_petroleo_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_SERVICOS_PETROLEO_DO_ANO_ZERO]; //percentagem decimal

  shares_exergia_final_transportes_eletricidade_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_TRANSPORTES_ELETRICIDADE_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_industria_eletricidade_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_INDUSTRIA_ELETRICIDADE_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_residencial_eletricidade_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_RESIDENCIAL_ELETRICIDADE_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_servicos_eletricidade_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_SERVICOS_ELETRICIDADE_DO_ANO_ZERO]; //percentagem decimal

  shares_exergia_final_transportes_gas_natural_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_TRANSPORTES_GAS_NATURAL_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_industria_gas_natural_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_INDUSTRIA_GAS_NATURAL_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_residencial_gas_natural_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_RESIDENCIAL_GAS_NATURAL_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_servicos_gas_natural_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_SERVICOS_GAS_NATURAL_DO_ANO_ZERO]; //percentagem decimal

  shares_exergia_final_transportes_comb_renovaveis_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_TRANSPORTES_COMB_RENOVAVEIS_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_industria_comb_renovaveis_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_INDUSTRIA_COMB_RENOVAVEIS_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_residencial_comb_renovaveis_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_RESIDENCIAL_COMB_RENOVAVEIS_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_servicos_comb_renovaveis_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_SERVICOS_COMB_RENOVAVEIS_DO_ANO_ZERO]; //percentagem decimal

  shares_exergia_final_transportes_heat_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_TRANSPORTES_HEAT_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_industria_heat_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_INDUSTRIA_HEAT_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_residencial_heat_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_RESIDENCIAL_HEAT_DO_ANO_ZERO]; //percentagem decimal
  shares_exergia_final_servicos_heat_do_ano: Array<number> = [this.SHARES_EXERGIA_FINAL_SERVICOS_HEAT_DO_ANO_ZERO]; //percentagem decimal

  // VARS 12)
  exergia_final_transportes_do_ano: Array<number> = [this.EXERGIA_FINAL_TRANSPORTES_DO_ANO_ZERO]; //TJ
  exergia_final_industria_do_ano: Array<number> = [this.EXERGIA_FINAL_INDUSTRIA_DO_ANO_ZERO];
  exergia_final_residencial_do_ano: Array<number> = [this.EXERGIA_FINAL_RESIDENCIAL_DO_ANO_ZERO];
  exergia_final_servicos_do_ano: Array<number> = [this.EXERGIA_FINAL_SERVICOS_DO_ANO_ZERO];

  // VARS 13)
  exergia_final_transportes_carvao_do_ano: Array<number> = [0.00]; //TJ
  exergia_final_industria_carvao_do_ano: Array<number> = [0.00];
  exergia_final_residencial_carvao_do_ano: Array<number> = [0.00];
  exergia_final_servicos_carvao_do_ano: Array<number> = [0.00];

  exergia_final_transportes_petroleo_do_ano: Array<number> = [0.00];
  exergia_final_industria_petroleo_do_ano: Array<number> = [0.00];
  exergia_final_residencial_petroleo_do_ano: Array<number> = [0.00];
  exergia_final_servicos_petroleo_do_ano: Array<number> = [0.00];

  exergia_final_transportes_eletricidade_do_ano: Array<number> = [0.00];
  exergia_final_industria_eletricidade_do_ano: Array<number> = [0.00];
  exergia_final_residencial_eletricidade_do_ano: Array<number> = [0.00];
  exergia_final_servicos_eletricidade_do_ano: Array<number> = [0.00];

  exergia_final_transportes_gas_natural_do_ano: Array<number> = [0.00];
  exergia_final_industria_gas_natural_do_ano: Array<number> = [0.00];
  exergia_final_residencial_gas_natural_do_ano: Array<number> = [0.00];
  exergia_final_servicos_gas_natural_do_ano: Array<number> = [0.00];

  exergia_final_transportes_comb_renovaveis_do_ano: Array<number> = [0.00];
  exergia_final_industria_comb_renovaveis_do_ano: Array<number> = [0.00];
  exergia_final_residencial_comb_renovaveis_do_ano: Array<number> = [0.00];
  exergia_final_servicos_comb_renovaveis_do_ano: Array<number> = [0.00];

  exergia_final_transportes_heat_do_ano: Array<number> = [0.00];
  exergia_final_industria_heat_do_ano: Array<number> = [0.00];
  exergia_final_residencial_heat_do_ano: Array<number> = [0.00];
  exergia_final_servicos_heat_do_ano: Array<number> = [0.00];

  eletrificacao_transportes: Array<number> = [this.SHARES_EXERGIA_FINAL_TRANSPORTES_ELETRICIDADE_DO_ANO_ZERO];
  eletrificacao_industria: Array<number> = [this.SHARES_EXERGIA_FINAL_INDUSTRIA_ELETRICIDADE_DO_ANO_ZERO];
  eletrificacao_residencial: Array<number> = [this.SHARES_EXERGIA_FINAL_RESIDENCIAL_ELETRICIDADE_DO_ANO_ZERO];
  eletrificacao_servicos: Array<number> = [this.SHARES_EXERGIA_FINAL_SERVICOS_ELETRICIDADE_DO_ANO_ZERO];

  carvao_transportes: Array<number> = [(this.SHARES_EXERGIA_FINAL_TRANSPORTES_CARVAO_DO_ANO_ZERO * this.EXERGIA_FINAL_CARVAO_DO_ANO_ZERO) / this.EXERGIA_FINAL_TRANSPORTES_DO_ANO_ZERO];
  carvao_industria: Array<number> = [(this.SHARES_EXERGIA_FINAL_INDUSTRIA_CARVAO_DO_ANO_ZERO * this.EXERGIA_FINAL_CARVAO_DO_ANO_ZERO) / this.EXERGIA_FINAL_INDUSTRIA_DO_ANO_ZERO];
  carvao_residencial: Array<number> = [(this.SHARES_EXERGIA_FINAL_RESIDENCIAL_CARVAO_DO_ANO_ZERO * this.EXERGIA_FINAL_CARVAO_DO_ANO_ZERO) / this.EXERGIA_FINAL_RESIDENCIAL_DO_ANO_ZERO];
  carvao_servicos: Array<number> = [(this.SHARES_EXERGIA_FINAL_SERVICOS_CARVAO_DO_ANO_ZERO * this.EXERGIA_FINAL_CARVAO_DO_ANO_ZERO) / this.EXERGIA_FINAL_SERVICOS_DO_ANO_ZERO];

  petroleo_transportes: Array<number> = [(this.SHARES_EXERGIA_FINAL_TRANSPORTES_PETROLEO_DO_ANO_ZERO * this.EXERGIA_FINAL_PETROLEO_DO_ANO_ZERO) / this.EXERGIA_FINAL_TRANSPORTES_DO_ANO_ZERO];
  petroleo_industria: Array<number> = [(this.SHARES_EXERGIA_FINAL_INDUSTRIA_PETROLEO_DO_ANO_ZERO * this.EXERGIA_FINAL_PETROLEO_DO_ANO_ZERO) / this.EXERGIA_FINAL_INDUSTRIA_DO_ANO_ZERO];
  petroleo_residencial: Array<number> = [(this.SHARES_EXERGIA_FINAL_RESIDENCIAL_PETROLEO_DO_ANO_ZERO * this.EXERGIA_FINAL_PETROLEO_DO_ANO_ZERO) / this.EXERGIA_FINAL_RESIDENCIAL_DO_ANO_ZERO];
  petroleo_servicos: Array<number> = [(this.SHARES_EXERGIA_FINAL_SERVICOS_PETROLEO_DO_ANO_ZERO * this.EXERGIA_FINAL_PETROLEO_DO_ANO_ZERO) / this.EXERGIA_FINAL_SERVICOS_DO_ANO_ZERO];

  gas_natural_transportes: Array<number> = [(this.SHARES_EXERGIA_FINAL_TRANSPORTES_GAS_NATURAL_DO_ANO_ZERO * this.EXERGIA_FINAL_GAS_NATURAL_DO_ANO_ZERO) / this.EXERGIA_FINAL_TRANSPORTES_DO_ANO_ZERO];
  gas_natural_industria: Array<number> = [(this.SHARES_EXERGIA_FINAL_INDUSTRIA_GAS_NATURAL_DO_ANO_ZERO * this.EXERGIA_FINAL_GAS_NATURAL_DO_ANO_ZERO) / this.EXERGIA_FINAL_INDUSTRIA_DO_ANO_ZERO];
  gas_natural_residencial: Array<number> = [(this.SHARES_EXERGIA_FINAL_RESIDENCIAL_GAS_NATURAL_DO_ANO_ZERO * this.EXERGIA_FINAL_GAS_NATURAL_DO_ANO_ZERO) / this.EXERGIA_FINAL_RESIDENCIAL_DO_ANO_ZERO];
  gas_natural_servicos: Array<number> = [(this.SHARES_EXERGIA_FINAL_SERVICOS_GAS_NATURAL_DO_ANO_ZERO * this.EXERGIA_FINAL_GAS_NATURAL_DO_ANO_ZERO) / this.EXERGIA_FINAL_SERVICOS_DO_ANO_ZERO];

  // VARS 14
  exergia_util_transportes_carvao_do_ano: Array<number> = [0.00]; //TJ
  exergia_util_industria_carvao_do_ano: Array<number> = [0.00];
  exergia_util_residencial_carvao_do_ano: Array<number> = [0.00];
  exergia_util_servicos_carvao_do_ano: Array<number> = [0.00];

  exergia_util_transportes_petroleo_do_ano: Array<number> = [0.00];
  exergia_util_industria_petroleo_do_ano: Array<number> = [0.00];
  exergia_util_residencial_petroleo_do_ano: Array<number> = [0.00];
  exergia_util_servicos_petroleo_do_ano: Array<number> = [0.00];

  exergia_util_transportes_eletricidade_do_ano: Array<number> = [0.00];
  exergia_util_industria_eletricidade_do_ano: Array<number> = [0.00];
  exergia_util_residencial_eletricidade_do_ano: Array<number> = [0.00];
  exergia_util_servicos_eletricidade_do_ano: Array<number> = [0.00];

  exergia_util_transportes_gas_natural_do_ano: Array<number> = [0.00];
  exergia_util_industria_gas_natural_do_ano: Array<number> = [0.00];
  exergia_util_residencial_gas_natural_do_ano: Array<number> = [0.00];
  exergia_util_servicos_gas_natural_do_ano: Array<number> = [0.00];

  exergia_util_transportes_comb_renovaveis_do_ano: Array<number> = [0.00];
  exergia_util_industria_comb_renovaveis_do_ano: Array<number> = [0.00];
  exergia_util_residencial_comb_renovaveis_do_ano: Array<number> = [0.00];
  exergia_util_servicos_comb_renovaveis_do_ano: Array<number> = [0.00];

  exergia_util_transportes_heat_do_ano: Array<number> = [0.00];
  exergia_util_industria_heat_do_ano: Array<number> = [0.00];
  exergia_util_residencial_heat_do_ano: Array<number> = [0.00];
  exergia_util_servicos_heat_do_ano: Array<number> = [0.00];


  exergia_util_transportes_do_ano: Array<number> = [0.00]; //TJ
  exergia_util_industria_do_ano: Array<number> = [0.00];
  exergia_util_residencial_do_ano: Array<number> = [0.00];
  exergia_util_servicos_do_ano: Array<number> = [0.00];


  eficiencia_transportes_do_ano: Array<number> = [0.00]; //percentagem decimal
  eficiencia_industria_do_ano: Array<number> = [0.00];
  eficiencia_residencial_do_ano: Array<number> = [0.00];
  eficiencia_servicos_do_ano: Array<number> = [0.00];

  // VARS 16
  exergia_final_carvao_do_ano: Array<number> = [this.EXERGIA_FINAL_CARVAO_DO_ANO_ZERO]; //TJ
  exergia_final_petroleo_do_ano: Array<number> = [this.EXERGIA_FINAL_PETROLEO_DO_ANO_ZERO];
  exergia_final_eletricidade_do_ano: Array<number> = [this.EXERGIA_FINAL_ELETRICIDADE_DO_ANO_ZERO];
  exergia_final_gas_natural_do_ano: Array<number> = [this.EXERGIA_FINAL_GAS_NATURAL_DO_ANO_ZERO];
  exergia_final_comb_renovaveis_do_ano: Array<number> = [0.00];
  exergia_final_heat_do_ano: Array<number> = [0.00];

  // VARS 17
  emissoes_CO2_carvao_do_ano: Array<number> = [0.0]; //Tons
  emissoes_CO2_petroleo_do_ano: Array<number> = [0.0];
  emissoes_CO2_gas_natural_do_ano: Array<number> = [0.0];

  emissoes_totais_sem_eletricidade: Array<number> = [0.0];

  // VARS 19
  eletricidade_renovavel_do_ano: Array<number> = [0.0]; //GW

  // VARS 20
  eletricidade_nao_renovavel_do_ano: Array<number> = [0.0]; //GW

  // VARS 21 e 22)
  emissoes_nao_renovaveis_do_ano: Array<number> = [0.0];

  // VARS 23)
  emissoes_totais_do_ano: Array<number> = [0.0];

  // VARS 24)
  consumo_do_ano: Array<number> = [0.0];

  // VARS 25)
  utilidade_do_ano: Array<number> = [0.0];


  /// Funcs ///

  public indice_do_ano(ano: number): number {
    return ((ano - this.ANO_INICIAL - 4) / 4);
  }

  public ano_do_indice(indice: number): number {
    return indice + this.ANO_INICIAL
  }

  public mudar_de_ano() {
    this.ano_atual += 4;
    this.ano_atual_indice += 1;
  }

  public calcular_distribuicao_por_fonte() {

    var potencia_maxima_solar_alcancada = (this.potencia_do_ano_solar[this.ano_atual_indice - 1] >= this.POTENCIA_MAXIMA_SOLAR);
    var potencia_maxima_vento_alcancada = (this.potencia_do_ano_vento[this.ano_atual_indice - 1] >= this.POTENCIA_MAXIMA_VENTO);

    this.potencia_solar_instantanea = 0.0;
    this.potencia_vento_instantanea = 0.0;
    this.potencia_vento_offshore_instantanea = 0.0;
  
    if (!potencia_maxima_solar_alcancada && !potencia_maxima_vento_alcancada) {
      this.potencia_solar_instantanea = this.input_potencia_a_instalar / 2;
      this.potencia_vento_instantanea = this.input_potencia_a_instalar / 2;
    }
    else if (!potencia_maxima_solar_alcancada && potencia_maxima_vento_alcancada) {
      this.potencia_solar_instantanea = this.input_potencia_a_instalar / 2;
      this.potencia_vento_offshore_instantanea = this.input_potencia_a_instalar / 2;
    }
    else if (potencia_maxima_solar_alcancada && !potencia_maxima_vento_alcancada) {
      this.potencia_vento_instantanea = this.input_potencia_a_instalar;
    }
    else if (potencia_maxima_solar_alcancada && potencia_maxima_vento_alcancada) {
      this.potencia_vento_offshore_instantanea = this.input_potencia_a_instalar;
    }

    // Prevenção da quebra dos limites máximos
    if ((this.potencia_do_ano_solar[this.ano_atual_indice - 1] + this.potencia_solar_instantanea) > this.POTENCIA_MAXIMA_SOLAR) {
      this.potencia_solar_instantanea = this.POTENCIA_MAXIMA_SOLAR - this.potencia_do_ano_solar[this.ano_atual_indice - 1];
    }
    if ((this.potencia_do_ano_vento[this.ano_atual_indice - 1] + this.potencia_vento_instantanea) > this.POTENCIA_MAXIMA_VENTO) {
      this.potencia_vento_instantanea = this.POTENCIA_MAXIMA_VENTO - this.potencia_do_ano_vento[this.ano_atual_indice - 1];
    }
    if ((this.potencia_do_ano_vento_offshore[this.ano_atual_indice - 1] + this.potencia_vento_offshore_instantanea) > this.POTENCIA_MAXIMA_VENTO_OFFSHORE) {
      this.potencia_vento_offshore_instantanea = this.POTENCIA_MAXIMA_VENTO_OFFSHORE - this.potencia_do_ano_vento_offshore[this.ano_atual_indice - 1];
    }

    // Soma dos valores instantâneos aos do ano anterior e adição ao vetor respetivo
    this.potencia_do_ano_solar.push(this.potencia_do_ano_solar[this.ano_atual_indice - 1] + this.potencia_solar_instantanea);
    this.potencia_do_ano_vento.push(this.potencia_do_ano_vento[this.ano_atual_indice - 1] + this.potencia_vento_instantanea);
    this.potencia_do_ano_vento_offshore.push(this.potencia_do_ano_vento_offshore[this.ano_atual_indice - 1] + this.potencia_vento_offshore_instantanea);

  }

  // FUNCS 2) - CUSTO DA POTÊNCIA (euros)
  public calcular_custo(cost: number) {
    var custo_solar_instantaneo = this.potencia_do_ano_solar[this.ano_atual_indice] * this.CUSTO_POR_GIGAWATT_INSTALADO_SOLAR;
    var custo_vento_instantaneo = this.potencia_do_ano_vento[this.ano_atual_indice] * this.CUSTO_POR_GIGAWATT_INSTALADO_VENTO;
    var custo_vento_offshore_instantaneo = this.potencia_do_ano_vento_offshore[this.ano_atual_indice] * this.CUSTO_POR_GIGAWATT_INSTALADO_VENTO_OFFSHORE;

    this.custo_do_ano_solar.push(custo_solar_instantaneo);
    this.custo_do_ano_vento.push(custo_vento_instantaneo);
    this.custo_do_ano_vento_offshore.push(custo_vento_offshore_instantaneo);

    this.custo_total_do_ano.push(cost);
  }

  // FUNCS 3) - INVESTIMENTO (milhares de milhões de euros)
  public calcular_investimento() {

    var investimento_total_instantaneo = this.PERCENTAGEM_A_RETIRAR_DO_PIB * this.pib_do_ano[this.ano_atual_indice - 1];

    this.investimento_total_do_ano.push(investimento_total_instantaneo);
    this.investimento_para_capital_do_ano.push(investimento_total_instantaneo - (this.custo_total_do_ano[this.ano_atual_indice] * Math.pow(10, -9)));
  }

  // FUNCS 4) - CAPITAL (milhares de milhões de euros)
  public calcular_capital() {
    this.capital_do_ano.push(this.capital_do_ano[this.ano_atual_indice - 1] + this.investimento_para_capital_do_ano[this.ano_atual_indice]);
  }

  // FUNCS 5) - LABOUR (horas de trabalho realizadas por trabalhadores ativos)
  public calcular_labour() {
    this.labour_do_ano.push(this.ALFA * this.POPULACAO);
  }

  // FUNCS 6) - TOTAL FACTOR PRODUTIVITY (TFP)
  public calcular_tfp() {
    this.tfp_do_ano.push(Math.pow((this.eficiencia_agregada_do_ano[this.ano_atual_indice - 1] / this.EFF1960), 1.93) * 0.00000102 + 0.00000039);
  }

  // FUNCS 7) - PIB (milhares de milhões de euros)
  public calcular_pib() {
    this.pib_do_ano.push(this.tfp_do_ano[this.tfp_do_ano.length-1] * Math.pow(this.capital_do_ano[this.capital_do_ano.length-1], 0.3) * Math.pow(this.labour_do_ano[this.labour_do_ano.length-1], 0.7));
  }

  // FUNCS 8) - EXERGIA ÚTIL ANUAL (terajoule) (1 megajoule = 1 euro)
  public calcular_exergia_util() {
    this.exergia_util_do_ano.push(this.pib_do_ano[this.ano_atual_indice] * Math.pow(10, 3));
  }

  // FUNCS 9) - EXERGIA FINAL ANUAL (terajoule)
  public calcular_exergia_final() {
    this.exergia_final_do_ano.push(this.exergia_util_do_ano[this.ano_atual_indice] / this.eficiencia_agregada_do_ano[this.ano_atual_indice - 1]);
  }

  // FUNCS 10) - SHARES DE EXERGIA FINAL POR SETOR (percentagem decimal)
  public calcular_shares_de_exergia_final_por_setor() {
    var shares_transportes = this.shares_exergia_final_transportes_do_ano[this.ano_atual_indice - 1] + this.input_percentagem_tipo_economia_transportes * this.PERCENTAGEM_INPUT_SETAS;
    var shares_industria = this.shares_exergia_final_industria_do_ano[this.ano_atual_indice - 1] + this.input_percentagem_tipo_economia_industria * this.PERCENTAGEM_INPUT_SETAS;
    var shares_residencial = this.shares_exergia_final_residencial_do_ano[this.ano_atual_indice - 1] + this.input_percentagem_tipo_economia_residencial * this.PERCENTAGEM_INPUT_SETAS;
    var shares_servicos = this.shares_exergia_final_servicos_do_ano[this.ano_atual_indice - 1] + this.input_percentagem_tipo_economia_servicos * this.PERCENTAGEM_INPUT_SETAS;

    if (this.input_percentagem_tipo_economia_industria == this.input_percentagem_tipo_economia_residencial && this.input_percentagem_tipo_economia_residencial == this.input_percentagem_tipo_economia_servicos && this.input_percentagem_tipo_economia_servicos == this.input_percentagem_tipo_economia_transportes && this.input_percentagem_tipo_economia_industria) {
      this.shares_exergia_final_transportes_do_ano.push(this.shares_exergia_final_transportes_do_ano[this.ano_atual_indice - 1]);
      this.shares_exergia_final_industria_do_ano.push(this.shares_exergia_final_industria_do_ano[this.ano_atual_indice - 1]);
      this.shares_exergia_final_residencial_do_ano.push(this.shares_exergia_final_residencial_do_ano[this.ano_atual_indice - 1]);
      this.shares_exergia_final_servicos_do_ano.push(this.shares_exergia_final_servicos_do_ano[this.ano_atual_indice - 1]);
      return;
    }

    if (shares_transportes < 0.01) {
      shares_transportes = 0.01;
    }
    if (shares_industria < 0.01) {
      shares_industria = 0.01;
    }
    if (shares_residencial < 0.01) {
      shares_residencial = 0.01;
    }
    if (shares_servicos < 0.01) {
      shares_servicos = 0.01;
    }

    var soma = shares_transportes + shares_industria + shares_residencial + shares_servicos;

    //normalização a 1.00 das percentagens
    if (soma != 1.00) {
      shares_transportes = shares_transportes / soma;
      shares_industria = shares_industria / soma;
      shares_residencial = shares_residencial / soma;
      shares_servicos = shares_servicos / soma;
    }

    this.shares_exergia_final_transportes_do_ano.push(shares_transportes);
    this.shares_exergia_final_industria_do_ano.push(shares_industria);
    this.shares_exergia_final_residencial_do_ano.push(shares_residencial);
    this.shares_exergia_final_servicos_do_ano.push(shares_servicos);
  }

  // FUNCS 11) - EXERGIA FINAL POR SETOR (terajoules)
  public calcular_valores_absolutos_de_exergia_final_por_setor() {
    this.exergia_final_transportes_do_ano.push(this.exergia_final_do_ano[this.ano_atual_indice] * this.shares_exergia_final_transportes_do_ano[this.ano_atual_indice]);
    this.exergia_final_industria_do_ano.push(this.exergia_final_do_ano[this.ano_atual_indice] * this.shares_exergia_final_industria_do_ano[this.ano_atual_indice]);
    this.exergia_final_residencial_do_ano.push(this.exergia_final_do_ano[this.ano_atual_indice] * this.shares_exergia_final_residencial_do_ano[this.ano_atual_indice]);
    this.exergia_final_servicos_do_ano.push(this.exergia_final_do_ano[this.ano_atual_indice] * this.shares_exergia_final_servicos_do_ano[this.ano_atual_indice]);
  }

  // FUNCS 12) - ELETRIFICAÇÃO (e afins) DE SETORES
  public calcular_eletrificacao_etc_de_setores() {

    var eletrificacao_transportes_temp = this.eletrificacao_transportes[this.ano_atual_indice - 1] + this.input_percentagem_eletrificacao_transportes * this.PERCENTAGEM_INPUT_SETAS;
    var eletrificacao_industria_temp = this.eletrificacao_industria[this.ano_atual_indice - 1] + this.input_percentagem_eletrificacao_industria * this.PERCENTAGEM_INPUT_SETAS;
    var eletrificacao_residencial_temp = this.eletrificacao_residencial[this.ano_atual_indice - 1] + this.input_percentagem_eletrificacao_residencial * this.PERCENTAGEM_INPUT_SETAS;
    var eletrificacao_servicos_temp = this.eletrificacao_servicos[this.ano_atual_indice - 1] + this.input_percentagem_eletrificacao_servicos * this.PERCENTAGEM_INPUT_SETAS;

    if (eletrificacao_transportes_temp <= 0.01) {
      eletrificacao_transportes_temp = 0.01;
    }
    if (eletrificacao_industria_temp <= 0.01) {
      eletrificacao_industria_temp = 0.01;
    }
    if (eletrificacao_residencial_temp <= 0.01) {
      eletrificacao_residencial_temp = 0.01;
    }
    if (eletrificacao_servicos_temp <= 0.01) {
      eletrificacao_servicos_temp = 0.01;
    }

    if (eletrificacao_transportes_temp >= 0.90) {
      eletrificacao_transportes_temp = 0.90
    }
    if (eletrificacao_industria_temp >= 0.70) {
      eletrificacao_industria_temp = 0.70;
    }
    if (eletrificacao_residencial_temp >= 0.99) {
      eletrificacao_residencial_temp = 0.99;
    }
    if (eletrificacao_servicos_temp >= 0.99) {
      eletrificacao_servicos_temp = 0.99;
    }


    this.eletrificacao_transportes.push(eletrificacao_transportes_temp);
    this.eletrificacao_industria.push(eletrificacao_industria_temp);
    this.eletrificacao_residencial.push(eletrificacao_residencial_temp);
    this.eletrificacao_servicos.push(eletrificacao_servicos_temp);

    this.shares_exergia_final_transportes_eletricidade_do_ano.push(eletrificacao_transportes_temp);
    this.shares_exergia_final_industria_eletricidade_do_ano.push(eletrificacao_industria_temp);
    this.shares_exergia_final_residencial_eletricidade_do_ano.push(eletrificacao_residencial_temp);
    this.shares_exergia_final_servicos_eletricidade_do_ano.push(eletrificacao_servicos_temp);
  }

  // FUNCS 13) - SHARES DE EXERGIA FINAL POR SETOR POR CARRIER (percentagem decimal)
  public calcular_shares_de_exergia_final_por_setor_por_carrier() {

    //TRANSPORTES
    this.shares_exergia_final_transportes_carvao_do_ano.push(this.shares_exergia_final_transportes_carvao_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_transportes[this.ano_atual_indice]) / (1 - this.eletrificacao_transportes[this.ano_atual_indice - 1]));
    this.shares_exergia_final_transportes_petroleo_do_ano.push(this.shares_exergia_final_transportes_petroleo_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_transportes[this.ano_atual_indice]) / (1 - this.eletrificacao_transportes[this.ano_atual_indice - 1]));
    this.shares_exergia_final_transportes_gas_natural_do_ano.push(this.shares_exergia_final_transportes_gas_natural_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_transportes[this.ano_atual_indice]) / (1 - this.eletrificacao_transportes[this.ano_atual_indice - 1]));
    this.shares_exergia_final_transportes_comb_renovaveis_do_ano.push(this.shares_exergia_final_transportes_comb_renovaveis_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_transportes[this.ano_atual_indice]) / (1 - this.eletrificacao_transportes[this.ano_atual_indice - 1]));
    this.shares_exergia_final_transportes_heat_do_ano.push(this.shares_exergia_final_transportes_heat_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_transportes[this.ano_atual_indice]) / (1 - this.eletrificacao_transportes[this.ano_atual_indice - 1]));

    //INDUSTRIA
    this.shares_exergia_final_industria_carvao_do_ano.push(this.shares_exergia_final_industria_carvao_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_industria[this.ano_atual_indice]) / (1 - this.eletrificacao_industria[this.ano_atual_indice - 1]));
    this.shares_exergia_final_industria_petroleo_do_ano.push(this.shares_exergia_final_industria_petroleo_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_industria[this.ano_atual_indice]) / (1 - this.eletrificacao_industria[this.ano_atual_indice - 1]));
    this.shares_exergia_final_industria_gas_natural_do_ano.push(this.shares_exergia_final_industria_gas_natural_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_industria[this.ano_atual_indice]) / (1 - this.eletrificacao_industria[this.ano_atual_indice - 1]));
    this.shares_exergia_final_industria_comb_renovaveis_do_ano.push(this.shares_exergia_final_industria_comb_renovaveis_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_industria[this.ano_atual_indice]) / (1 - this.eletrificacao_industria[this.ano_atual_indice - 1]));
    this.shares_exergia_final_industria_heat_do_ano.push(this.shares_exergia_final_industria_heat_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_industria[this.ano_atual_indice]) / (1 - this.eletrificacao_industria[this.ano_atual_indice - 1]));

    //RESIDENCIAL
    this.shares_exergia_final_residencial_carvao_do_ano.push(this.shares_exergia_final_residencial_carvao_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_residencial[this.ano_atual_indice]) / (1 - this.eletrificacao_residencial[this.ano_atual_indice - 1]));
    this.shares_exergia_final_residencial_petroleo_do_ano.push(this.shares_exergia_final_residencial_petroleo_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_residencial[this.ano_atual_indice]) / (1 - this.eletrificacao_residencial[this.ano_atual_indice - 1]));
    this.shares_exergia_final_residencial_gas_natural_do_ano.push(this.shares_exergia_final_residencial_gas_natural_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_residencial[this.ano_atual_indice]) / (1 - this.eletrificacao_residencial[this.ano_atual_indice - 1]));
    this.shares_exergia_final_residencial_comb_renovaveis_do_ano.push(this.shares_exergia_final_residencial_comb_renovaveis_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_residencial[this.ano_atual_indice]) / (1 - this.eletrificacao_residencial[this.ano_atual_indice - 1]));
    this.shares_exergia_final_residencial_heat_do_ano.push(this.shares_exergia_final_residencial_heat_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_residencial[this.ano_atual_indice]) / (1 - this.eletrificacao_residencial[this.ano_atual_indice - 1]));

    //SERVICOS
    this.shares_exergia_final_servicos_carvao_do_ano.push(this.shares_exergia_final_servicos_carvao_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_servicos[this.ano_atual_indice]) / (1 - this.eletrificacao_servicos[this.ano_atual_indice - 1]));
    this.shares_exergia_final_servicos_petroleo_do_ano.push(this.shares_exergia_final_servicos_petroleo_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_servicos[this.ano_atual_indice]) / (1 - this.eletrificacao_servicos[this.ano_atual_indice - 1]));
    this.shares_exergia_final_servicos_gas_natural_do_ano.push(this.shares_exergia_final_servicos_gas_natural_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_servicos[this.ano_atual_indice]) / (1 - this.eletrificacao_servicos[this.ano_atual_indice - 1]));
    this.shares_exergia_final_servicos_comb_renovaveis_do_ano.push(this.shares_exergia_final_servicos_comb_renovaveis_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_servicos[this.ano_atual_indice]) / (1 - this.eletrificacao_servicos[this.ano_atual_indice - 1]));
    this.shares_exergia_final_servicos_heat_do_ano.push(this.shares_exergia_final_servicos_heat_do_ano[this.ano_atual_indice - 1] * (1 - this.eletrificacao_servicos[this.ano_atual_indice]) / (1 - this.eletrificacao_servicos[this.ano_atual_indice - 1]));
  }

  // FUNCS 14) - EXERGIA FINAL POR SETOR POR CARRIER (terajoules)
  public calcular_valores_absolutos_de_exergia_final_por_setor_por_carrier() {
    this.exergia_final_transportes_eletricidade_do_ano.push(this.exergia_final_transportes_do_ano[this.ano_atual_indice] * this.eletrificacao_transportes[this.ano_atual_indice]);
    this.exergia_final_transportes_carvao_do_ano.push(this.exergia_final_transportes_do_ano[this.ano_atual_indice] * this.shares_exergia_final_transportes_carvao_do_ano[this.ano_atual_indice]);
    this.exergia_final_transportes_petroleo_do_ano.push(this.exergia_final_transportes_do_ano[this.ano_atual_indice] * this.shares_exergia_final_transportes_petroleo_do_ano[this.ano_atual_indice]);
    this.exergia_final_transportes_gas_natural_do_ano.push(this.exergia_final_transportes_do_ano[this.ano_atual_indice] * this.shares_exergia_final_transportes_gas_natural_do_ano[this.ano_atual_indice]);
    this.exergia_final_transportes_comb_renovaveis_do_ano.push(this.exergia_final_transportes_do_ano[this.ano_atual_indice] * this.shares_exergia_final_transportes_comb_renovaveis_do_ano[this.ano_atual_indice]);
    this.exergia_final_transportes_heat_do_ano.push(this.exergia_final_transportes_do_ano[this.ano_atual_indice] * this.shares_exergia_final_transportes_heat_do_ano[this.ano_atual_indice]);

    this.exergia_final_industria_eletricidade_do_ano.push(this.exergia_final_industria_do_ano[this.ano_atual_indice] * this.eletrificacao_industria[this.ano_atual_indice]);
    this.exergia_final_industria_carvao_do_ano.push(this.exergia_final_industria_do_ano[this.ano_atual_indice] * this.shares_exergia_final_industria_carvao_do_ano[this.ano_atual_indice]);
    this.exergia_final_industria_petroleo_do_ano.push(this.exergia_final_industria_do_ano[this.ano_atual_indice] * this.shares_exergia_final_industria_petroleo_do_ano[this.ano_atual_indice]);
    this.exergia_final_industria_gas_natural_do_ano.push(this.exergia_final_industria_do_ano[this.ano_atual_indice] * this.shares_exergia_final_industria_gas_natural_do_ano[this.ano_atual_indice]);
    this.exergia_final_industria_comb_renovaveis_do_ano.push(this.exergia_final_industria_do_ano[this.ano_atual_indice] * this.shares_exergia_final_industria_comb_renovaveis_do_ano[this.ano_atual_indice]);
    this.exergia_final_industria_heat_do_ano.push(this.exergia_final_industria_do_ano[this.ano_atual_indice] * this.shares_exergia_final_industria_heat_do_ano[this.ano_atual_indice]);

    this.exergia_final_residencial_eletricidade_do_ano.push(this.exergia_final_residencial_do_ano[this.ano_atual_indice] * this.eletrificacao_residencial[this.ano_atual_indice]);
    this.exergia_final_residencial_carvao_do_ano.push(this.exergia_final_residencial_do_ano[this.ano_atual_indice] * this.shares_exergia_final_residencial_carvao_do_ano[this.ano_atual_indice]);
    this.exergia_final_residencial_petroleo_do_ano.push(this.exergia_final_residencial_do_ano[this.ano_atual_indice] * this.shares_exergia_final_residencial_petroleo_do_ano[this.ano_atual_indice]);
    this.exergia_final_residencial_gas_natural_do_ano.push(this.exergia_final_residencial_do_ano[this.ano_atual_indice] * this.shares_exergia_final_residencial_gas_natural_do_ano[this.ano_atual_indice]);
    this.exergia_final_residencial_comb_renovaveis_do_ano.push(this.exergia_final_residencial_do_ano[this.ano_atual_indice] * this.shares_exergia_final_residencial_comb_renovaveis_do_ano[this.ano_atual_indice]);
    this.exergia_final_residencial_heat_do_ano.push(this.exergia_final_residencial_do_ano[this.ano_atual_indice] * this.shares_exergia_final_residencial_heat_do_ano[this.ano_atual_indice]);

    this.exergia_final_servicos_eletricidade_do_ano.push(this.exergia_final_servicos_do_ano[this.ano_atual_indice] * this.eletrificacao_servicos[this.ano_atual_indice]);
    this.exergia_final_servicos_carvao_do_ano.push(this.exergia_final_servicos_do_ano[this.ano_atual_indice] * this.shares_exergia_final_servicos_carvao_do_ano[this.ano_atual_indice]);
    this.exergia_final_servicos_petroleo_do_ano.push(this.exergia_final_servicos_do_ano[this.ano_atual_indice] * this.shares_exergia_final_servicos_petroleo_do_ano[this.ano_atual_indice]);
    this.exergia_final_servicos_gas_natural_do_ano.push(this.exergia_final_servicos_do_ano[this.ano_atual_indice] * this.shares_exergia_final_servicos_gas_natural_do_ano[this.ano_atual_indice]);
    this.exergia_final_servicos_comb_renovaveis_do_ano.push(this.exergia_final_servicos_do_ano[this.ano_atual_indice] * this.shares_exergia_final_servicos_comb_renovaveis_do_ano[this.ano_atual_indice]);
    this.exergia_final_servicos_heat_do_ano.push(this.exergia_final_servicos_do_ano[this.ano_atual_indice] * this.shares_exergia_final_servicos_heat_do_ano[this.ano_atual_indice]);

  }

  // FUNCS 15) - EFICIÊNCIA POR SETOR (percentagem decimal)
  public calcular_eficiencia_por_setor() {
    this.exergia_util_transportes_eletricidade_do_ano.push(this.exergia_final_transportes_eletricidade_do_ano[this.ano_atual_indice] * this.EFICIENCIA_TRANSPORTES_ELETRICIDADE);
    this.exergia_util_industria_eletricidade_do_ano.push(this.exergia_final_industria_eletricidade_do_ano[this.ano_atual_indice] * this.EFICIENCIA_INDUSTRIA_ELETRICIDADE);
    this.exergia_util_residencial_eletricidade_do_ano.push(this.exergia_final_residencial_eletricidade_do_ano[this.ano_atual_indice] * this.EFICIENCIA_RESIDENCIAL_ELETRICIDADE);
    this.exergia_util_servicos_eletricidade_do_ano.push(this.exergia_final_servicos_eletricidade_do_ano[this.ano_atual_indice] * this.EFICIENCIA_SERVICOS_ELETRICIDADE);

    this.exergia_util_transportes_carvao_do_ano.push(this.exergia_final_transportes_carvao_do_ano[this.ano_atual_indice] * this.EFICIENCIA_TRANSPORTES_CARVAO);
    this.exergia_util_industria_carvao_do_ano.push(this.exergia_final_industria_carvao_do_ano[this.ano_atual_indice] * this.EFICIENCIA_INDUSTRIA_CARVAO);
    this.exergia_util_residencial_carvao_do_ano.push(this.exergia_final_residencial_carvao_do_ano[this.ano_atual_indice] * this.EFICIENCIA_RESIDENCIAL_CARVAO);
    this.exergia_util_servicos_carvao_do_ano.push(this.exergia_final_servicos_carvao_do_ano[this.ano_atual_indice] * this.EFICIENCIA_SERVICOS_CARVAO);

    this.exergia_util_transportes_petroleo_do_ano.push(this.exergia_final_transportes_petroleo_do_ano[this.ano_atual_indice] * this.EFICIENCIA_TRANSPORTES_PETROLEO);
    this.exergia_util_industria_petroleo_do_ano.push(this.exergia_final_industria_petroleo_do_ano[this.ano_atual_indice] * this.EFICIENCIA_INDUSTRIA_PETROLEO);
    this.exergia_util_residencial_petroleo_do_ano.push(this.exergia_final_residencial_petroleo_do_ano[this.ano_atual_indice] * this.EFICIENCIA_RESIDENCIAL_PETROLEO);
    this.exergia_util_servicos_petroleo_do_ano.push(this.exergia_final_servicos_petroleo_do_ano[this.ano_atual_indice] * this.EFICIENCIA_SERVICOS_PETROLEO);

    this.exergia_util_transportes_gas_natural_do_ano.push(this.exergia_final_transportes_gas_natural_do_ano[this.ano_atual_indice] * this.EFICIENCIA_TRANSPORTES_GAS_NATURAL);
    this.exergia_util_industria_gas_natural_do_ano.push(this.exergia_final_industria_gas_natural_do_ano[this.ano_atual_indice] * this.EFICIENCIA_INDUSTRIA_GAS_NATURAL);
    this.exergia_util_residencial_gas_natural_do_ano.push(this.exergia_final_residencial_gas_natural_do_ano[this.ano_atual_indice] * this.EFICIENCIA_RESIDENCIAL_GAS_NATURAL);
    this.exergia_util_servicos_gas_natural_do_ano.push(this.exergia_final_servicos_gas_natural_do_ano[this.ano_atual_indice] * this.EFICIENCIA_SERVICOS_GAS_NATURAL);

    this.exergia_util_transportes_comb_renovaveis_do_ano.push(this.exergia_final_transportes_comb_renovaveis_do_ano[this.ano_atual_indice] * this.EFICIENCIA_TRANSPORTES_COMB_RENOVAVEIS);
    this.exergia_util_industria_comb_renovaveis_do_ano.push(this.exergia_final_industria_comb_renovaveis_do_ano[this.ano_atual_indice] * this.EFICIENCIA_INDUSTRIA_COMB_RENOVAVEIS);
    this.exergia_util_residencial_comb_renovaveis_do_ano.push(this.exergia_final_residencial_comb_renovaveis_do_ano[this.ano_atual_indice] * this.EFICIENCIA_RESIDENCIAL_COMB_RENOVAVEIS);
    this.exergia_util_servicos_comb_renovaveis_do_ano.push(this.exergia_final_servicos_comb_renovaveis_do_ano[this.ano_atual_indice] * this.EFICIENCIA_SERVICOS_COMB_RENOVAVEIS);

    this.exergia_util_transportes_heat_do_ano.push(this.exergia_final_transportes_heat_do_ano[this.ano_atual_indice] * this.EFICIENCIA_TRANSPORTES_HEAT);
    this.exergia_util_industria_heat_do_ano.push(this.exergia_final_industria_heat_do_ano[this.ano_atual_indice] * this.EFICIENCIA_INDUSTRIA_HEAT);
    this.exergia_util_residencial_heat_do_ano.push(this.exergia_final_residencial_heat_do_ano[this.ano_atual_indice] * this.EFICIENCIA_RESIDENCIAL_HEAT);
    this.exergia_util_servicos_heat_do_ano.push(this.exergia_final_servicos_heat_do_ano[this.ano_atual_indice] * this.EFICIENCIA_SERVICOS_HEAT);


    this.exergia_util_transportes_do_ano.push(this.exergia_util_transportes_eletricidade_do_ano[this.ano_atual_indice] +
      this.exergia_util_transportes_carvao_do_ano[this.ano_atual_indice] + this.exergia_util_transportes_petroleo_do_ano[this.ano_atual_indice] +
      this.exergia_util_transportes_gas_natural_do_ano[this.ano_atual_indice] + this.exergia_util_transportes_comb_renovaveis_do_ano[this.ano_atual_indice] +
      this.exergia_util_transportes_heat_do_ano[this.ano_atual_indice]);
    this.exergia_util_industria_do_ano.push(this.exergia_util_industria_eletricidade_do_ano[this.ano_atual_indice] +
      this.exergia_util_industria_carvao_do_ano[this.ano_atual_indice] + this.exergia_util_industria_petroleo_do_ano[this.ano_atual_indice] +
      this.exergia_util_industria_gas_natural_do_ano[this.ano_atual_indice] + this.exergia_util_industria_comb_renovaveis_do_ano[this.ano_atual_indice] +
      this.exergia_util_industria_heat_do_ano[this.ano_atual_indice]);
    this.exergia_util_residencial_do_ano.push(this.exergia_util_residencial_eletricidade_do_ano[this.ano_atual_indice] +
      this.exergia_util_residencial_carvao_do_ano[this.ano_atual_indice] + this.exergia_util_residencial_petroleo_do_ano[this.ano_atual_indice] +
      this.exergia_util_residencial_gas_natural_do_ano[this.ano_atual_indice] + this.exergia_util_residencial_comb_renovaveis_do_ano[this.ano_atual_indice] +
      this.exergia_util_residencial_heat_do_ano[this.ano_atual_indice]);
    this.exergia_util_servicos_do_ano.push(this.exergia_util_servicos_eletricidade_do_ano[this.ano_atual_indice] +
      this.exergia_util_servicos_carvao_do_ano[this.ano_atual_indice] + this.exergia_util_servicos_petroleo_do_ano[this.ano_atual_indice] +
      this.exergia_util_servicos_gas_natural_do_ano[this.ano_atual_indice] + this.exergia_util_servicos_comb_renovaveis_do_ano[this.ano_atual_indice] +
      this.exergia_util_servicos_heat_do_ano[this.ano_atual_indice]);


    this.eficiencia_transportes_do_ano.push(this.exergia_util_transportes_do_ano[this.ano_atual_indice] / this.exergia_final_transportes_do_ano[this.ano_atual_indice]);
    this.eficiencia_industria_do_ano.push(this.exergia_util_industria_do_ano[this.ano_atual_indice] / this.exergia_final_industria_do_ano[this.ano_atual_indice]);
    this.eficiencia_residencial_do_ano.push(this.exergia_util_residencial_do_ano[this.ano_atual_indice] / this.exergia_final_residencial_do_ano[this.ano_atual_indice]);
    this.eficiencia_servicos_do_ano.push(this.exergia_util_servicos_do_ano[this.ano_atual_indice] / this.exergia_final_servicos_do_ano[this.ano_atual_indice]);

  }

  // FUNCS 16) - EFICIÊNCIA AGREGADA (para cálculos em anos futuros)
  public calcular_eficiencia_agregada() {
    //atualização dos valores anteriormente calculados, usando os somatórios das partes
    console.log("Exergia util do ano (antes da atualização): " + this.exergia_util_do_ano);
    console.log("Exergia final do ano (antes da atualização): " + this.exergia_final_do_ano);

    this.exergia_util_do_ano[this.ano_atual_indice] = this.exergia_util_transportes_do_ano[this.ano_atual_indice] +
      this.exergia_util_industria_do_ano[this.ano_atual_indice] + this.exergia_util_residencial_do_ano[this.ano_atual_indice] +
      this.exergia_util_servicos_do_ano[this.ano_atual_indice];

    this.exergia_final_do_ano[this.ano_atual_indice] = this.exergia_final_transportes_do_ano[this.ano_atual_indice] +
      this.exergia_final_industria_do_ano[this.ano_atual_indice] + this.exergia_final_residencial_do_ano[this.ano_atual_indice] +
      this.exergia_final_servicos_do_ano[this.ano_atual_indice];

    //calculo da eficiencia agregada usando valores atualizados
    this.eficiencia_agregada_do_ano.push(this.exergia_util_do_ano[this.ano_atual_indice] / this.exergia_final_do_ano[this.ano_atual_indice])
  }

  // FUNCS 17) - EXERGIA FINAL POR CARRIER (terajoules)
  public calcular_valores_absolutos_de_exergia_final_por_carrier() {
    this.exergia_final_eletricidade_do_ano.push(this.exergia_final_transportes_eletricidade_do_ano[this.ano_atual_indice] + this.exergia_final_industria_eletricidade_do_ano[this.ano_atual_indice] + this.exergia_final_residencial_eletricidade_do_ano[this.ano_atual_indice] + this.exergia_final_servicos_eletricidade_do_ano[this.ano_atual_indice]);
    this.exergia_final_carvao_do_ano.push(this.exergia_final_transportes_carvao_do_ano[this.ano_atual_indice] + this.exergia_final_industria_carvao_do_ano[this.ano_atual_indice] + this.exergia_final_residencial_carvao_do_ano[this.ano_atual_indice] + this.exergia_final_servicos_carvao_do_ano[this.ano_atual_indice]);
    this.exergia_final_petroleo_do_ano.push(this.exergia_final_transportes_petroleo_do_ano[this.ano_atual_indice] + this.exergia_final_industria_petroleo_do_ano[this.ano_atual_indice] + this.exergia_final_residencial_petroleo_do_ano[this.ano_atual_indice] + this.exergia_final_servicos_petroleo_do_ano[this.ano_atual_indice]);
    this.exergia_final_gas_natural_do_ano.push(this.exergia_final_transportes_gas_natural_do_ano[this.ano_atual_indice] + this.exergia_final_industria_gas_natural_do_ano[this.ano_atual_indice] + this.exergia_final_residencial_gas_natural_do_ano[this.ano_atual_indice] + this.exergia_final_servicos_gas_natural_do_ano[this.ano_atual_indice]);
    this.exergia_final_comb_renovaveis_do_ano.push(this.exergia_final_transportes_comb_renovaveis_do_ano[this.ano_atual_indice] + this.exergia_final_industria_comb_renovaveis_do_ano[this.ano_atual_indice] + this.exergia_final_residencial_comb_renovaveis_do_ano[this.ano_atual_indice] + this.exergia_final_servicos_comb_renovaveis_do_ano[this.ano_atual_indice]);
    this.exergia_final_heat_do_ano.push(this.exergia_final_transportes_heat_do_ano[this.ano_atual_indice] + this.exergia_final_industria_heat_do_ano[this.ano_atual_indice] + this.exergia_final_residencial_heat_do_ano[this.ano_atual_indice] + this.exergia_final_servicos_heat_do_ano[this.ano_atual_indice]);
  }

  // FUNCS 18) - EMISSÕES DE CO2 POR CARRIER (exceto eletricidade) (kg CO2)
  public calcular_emissoes_CO2_carvao_petroleo_gas_natural() {
    this.emissoes_CO2_carvao_do_ano.push(this.exergia_final_carvao_do_ano[this.ano_atual_indice] * this.FATOR_DE_EMISSAO_CARVAO);
    this.emissoes_CO2_petroleo_do_ano.push(this.exergia_final_petroleo_do_ano[this.ano_atual_indice] * this.FATOR_DE_EMISSAO_PETROLEO);
    this.emissoes_CO2_gas_natural_do_ano.push(this.exergia_final_gas_natural_do_ano[this.ano_atual_indice] * this.FATOR_DE_EMISSAO_GAS_NATURAL);

    this.emissoes_totais_sem_eletricidade.push(this.emissoes_CO2_carvao_do_ano[this.emissoes_CO2_carvao_do_ano.length - 1] +
      this.emissoes_CO2_petroleo_do_ano[this.emissoes_CO2_petroleo_do_ano.length - 1] +
      this.emissoes_CO2_gas_natural_do_ano[this.emissoes_CO2_gas_natural_do_ano.length - 1]);
  }

  // FUNCS 19) - ELETRICIDADE VINDA DE FONTES RENOVÁVEIS (i.e. emissões zero) (gigawatts * hora) (GWh)
  public calcular_eletricidade_de_fontes_renovaveis() {
    var eletricidade_solar = this.potencia_do_ano_solar[this.ano_atual_indice] * this.FATOR_DE_PRODUCAO_SOLAR * this.HORAS_POR_ANO;
    var eletricidade_vento = this.potencia_do_ano_vento[this.ano_atual_indice] * this.FATOR_DE_PRODUCAO_VENTO * this.HORAS_POR_ANO;
    var eletricidade_vento_offshore = this.potencia_do_ano_vento_offshore[this.ano_atual_indice] * this.FATOR_DE_PRODUCAO_VENTO_OFFSHORE * this.HORAS_POR_ANO;
    var eletricidade_hidro = this.POTENCIA_ANUAL_HIDRO * this.FATOR_DE_PRODUCAO_HIDRO * this.HORAS_POR_ANO;

    this.eletricidade_renovavel_do_ano.push(eletricidade_solar + eletricidade_vento + eletricidade_vento_offshore + eletricidade_hidro);

  }

  // FUNCS 20) - ELETRICIDADE NÃO RENOVÁVEL (GWh)
  public calcular_eletricidade_nao_renovavel() {
    //1 GWh = 3.6 TJ
    this.eletricidade_nao_renovavel_do_ano.push(((this.exergia_final_eletricidade_do_ano[this.ano_atual_indice] / 3.6) * this.INEFICIENCIA_PRIMARIO_PARA_FINAL) -
      this.eletricidade_renovavel_do_ano[this.ano_atual_indice]);
  }

  // FUNCS 21) e 22) - EMISSÕES NÃO RENOVÁVEIS (kg CO2)
  public calcular_emissoes_nao_renovaveis() {
    var eletricidade_nao_renovavel_TJ;
    var maximo_produzido_por_gas_natural_TJ;

    if (this.eletricidade_nao_renovavel_do_ano[this.ano_atual_indice] <= 0.00) {
      console.log("Eletricidade 100% renovável!");
      this.emissoes_nao_renovaveis_do_ano.push(0);
    }
    else if (this.eletricidade_nao_renovavel_do_ano[this.ano_atual_indice] <= this.MAXIMO_PRODUZIDO_POR_GAS_NATURAL) {
      eletricidade_nao_renovavel_TJ = this.eletricidade_nao_renovavel_do_ano[this.ano_atual_indice] * 3.6;
      this.emissoes_nao_renovaveis_do_ano.push((eletricidade_nao_renovavel_TJ / this.EFICIENCIA_DE_PRODUCAO_DE_ELETRICIDADE_COM_GAS_NATURAL) *
        this.FATOR_DE_EMISSAO_GAS_NATURAL);
    }
    else {
      eletricidade_nao_renovavel_TJ = this.eletricidade_nao_renovavel_do_ano[this.ano_atual_indice] * 3.6;
      maximo_produzido_por_gas_natural_TJ = this.MAXIMO_PRODUZIDO_POR_GAS_NATURAL * 3.6;
      this.emissoes_nao_renovaveis_do_ano.push(((maximo_produzido_por_gas_natural_TJ / this.EFICIENCIA_DE_PRODUCAO_DE_ELETRICIDADE_COM_GAS_NATURAL) *
        this.FATOR_DE_EMISSAO_GAS_NATURAL) + (((eletricidade_nao_renovavel_TJ - maximo_produzido_por_gas_natural_TJ) /
          this.EFICIENCIA_DE_PRODUCAO_DE_ELETRICIDADE_COM_CARVAO) * this.FATOR_DE_EMISSAO_CARVAO));
    }
  }

  // FUNCS 23) - EMISSÕES TOTAIS (um dos objetivos do jogo) (tons C02 = kg/1000 CO2) (i.e. para estar em toneladas é necessário dividir por 1000)
  public calcular_emissoes_totais() {
    this.emissoes_totais_do_ano.push(this.emissoes_totais_sem_eletricidade[this.ano_atual_indice] + this.emissoes_nao_renovaveis_do_ano[this.ano_atual_indice]);
  }

  // FUNCS 24) - CONSUMO(milhares de milhões de euros)
  public calcular_consumo() {
    this.consumo_do_ano.push(this.pib_do_ano[this.ano_atual_indice] - this.investimento_total_do_ano[this.ano_atual_indice]);
  }

  // FUNCS 25) - UTILIDADE (Felicidade dos cidadãos; um dos objetivos do jogo) (Atenção: para efeitos de apresentação no jogo, estamos a dividir os resultados pelo resultado do ano 1)
  public calcular_utilidade() {
    //UTILIDADE = ((CONSUMO ^ b) * (EXP(CO2 / a))) / POPULAÇÃO, a = 10000000000 e b = 2
    var utilidade_absoluta = ((Math.pow(this.consumo_do_ano[this.ano_atual_indice] * Math.pow(10, 9), 2)) *
      Math.exp((-1 * this.emissoes_totais_do_ano[this.ano_atual_indice]) / 10000000000)) / this.POPULACAO;
    var utilidade_relativa = utilidade_absoluta / this.UTILIDADE_DO_ANO_UM;
    console.log("UTILIDADE ABS : " + this.consumo_do_ano[this.ano_atual_indice]) ;
    this.utilidade_do_ano.push(utilidade_relativa);
  }

  public TransportsPoliticsArray: Array<Politic> = [
    { 
      id: 1, title: "Transports Eletrification", price: 200,
    prob: 0.5,
    desc: "The government subsidizes the purchase of electric cars. Improves sector eletrification.",
    isUsed: false,
    remove: false,
    type: "Transports",
    impact: [0,5] 
    },
    { 
      id: 2, title: "Public Transportation Improvement", price: 450, prob: 0.6, desc: "The government will Invest on public transportation efficiency. Reduces Sector weight and improves sector eletrification. " ,
    isUsed:false,
    remove: false,
    type: "Transports",
    impact: [-2, 6]
    },
    {
      id: 3, title: "Create Recharge Stations", price: 600, prob: 0.8, desc: "Create more recharge units all over the country. Reduces Sector weight and improves sector eletrification.",
      isUsed: false,
      remove: false,
      type: "Transports",
      impact: [-4, 8]
    }
  ];

  public IndustryPoliticArray: Array<Politic> = [
    {
      id: 1, title: "Industry Eletrification", price: 200,
      prob: 0.5,
      desc: "Invest on Industry Eletrification, switching between fossil fuels to eletric power. Improves sector eletrification.",
      isUsed: false,
      remove:false,
      type: "Industry",
      impact: [0,4] 
    },
    {
      id: 2, title: "Improve industries efficiency", price: 400,
      prob: 0.5,
      desc: "Pay a bonus to industries that replace older equipments by new ones that are more efficient. Reduces Sector weight.",
      isUsed: false,
      remove:false,
      type: "Industry",
      impact: [-4,0] 
    }
  ];

  public ResidentialPoliticsArray: Array<Politic> = [
    {
      id: 1, title: "House Eletrification", price: 300,
      prob: 0.5,
      desc: "Invest on House Eletrification, switching between fossil fuels to eletric power. Improves sector eletrification.",
      isUsed: false,
      remove:false,
      type: "Residential",
      impact: [0,2]
    },
    {
      id: 2, title: "House Isolation", price: 600,
      prob: 0.5,
      desc: "Invest on House Isolation, switching from traditional windows and doors to double glass and isolation ones.Reduces Sector weight.",
      isUsed: false,
      remove:false,
      type: "Residential",
      impact: [-2,0]
    }
  ];

  public ServicesPoliticsArray: Array<Politic> = [
    {
      id: 1, title: "Higher performance systems", price: 300,
      prob: 0.5,
      desc: "Invest systems able to consume less power. Reduces Sector weight and improves its eletrification.",
      isUsed: false,
      remove:false,
      type: "Services",
      impact: [-1,2]
    },
  ];



  public initPolitics() {
    var politicsArray = [this.TransportsPoliticsArray, this.IndustryPoliticArray, this.ResidentialPoliticsArray, this.ServicesPoliticsArray]
    return politicsArray;
  }

  public naturalEvents: Array<naturalEventNew> = [
    {
      id: 1,
      title:"A tornado strikes the country!",
      description:"A tornado strikes the country, partially destroying its installed capacity.",
      used:false,
      effect: "capacity",
      amount: -10,
      type:"weather"
    },
    {
      id: 2,
      title:"It’s official: Hot, dry season is here!",
      description:"The dry season has arrived, and as such the main sector affected is agriculture. However, due to this period it is expected that the hydropower production factor will decrease substantially.",
      used:false,
      effect: "hidro",
      amount: -50,
      type:"weather"
    },
    {
      id: 3,
      title:"Limits on Natural gas usage.",
      description:"Government anounced some measures for the upcoming years, where they will impose some restrictions on the usage of natural gas.",
      used:false,
      effect: "gas",
      amount: -20,
      type:"weather"
    },
    {
      id: 4,
      title:"Everything looks promising!",
      description:"Recent studies suggest a brighter future if we keep our path.",
      used:false,
      effect: "none",
      amount: 0,
      type:"weather"
    },
    {
      id: 5,
      title:"A cleaner Future",
      description:"We are experiencing a huge development towards a cleaner future, fossil fuel free. Will our country be able to keep the pace?",
      used:false,
      effect: "none",
      amount: 0,
      type:"weather"
    }
  ] 

  public getEvents() {
    return this.naturalEvents;
  }

}
