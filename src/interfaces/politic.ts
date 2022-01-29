export interface Politic {
    id: number;
    title: string;
    price: number;
    prob: number;
    desc: string;
    isUsed: boolean;
    remove: boolean;
    type: string;
    impact: Array<number>;
  }