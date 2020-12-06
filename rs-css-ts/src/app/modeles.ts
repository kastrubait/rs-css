interface Itasks {
  title: string;
  notation: string;
  description: string;
  exemples: string[];
  exercise: string;
  exerciseView: string;
  answer: string;
}

export interface IitemLevel {
  item: number;
  completed: boolean;
  help: boolean;
}

export interface ITrainingData {
  theme: string;
  hint: string;
  tasks: Itasks[];
}

export interface IStateGame {
  state: IitemLevel[];
  currLevel: number;
}
