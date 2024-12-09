export interface Task {
  id: number;
  text: string;
  status: boolean;
}

export enum FilterName {
  All = 'all',
  Active = 'active',
  Complited = 'complited',
}
