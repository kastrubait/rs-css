interface Itasks {
  title: string;
  notation: string;
  description: string;
  exemples: string[];
  exercise: string;
  exerciseView: string;
  answer: string;
}

export default interface ITrainingData {
  theme: string;
  hint: string;
  tasks: Itasks[];
}
