export interface Politic {
    id: number;
    title: String;
    price: number;
    prob: number;
    desc: string;
    isUsed: boolean;
    remove: boolean;
    type: String;
    impact: Array<number>;
  }