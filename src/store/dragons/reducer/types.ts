export interface IDragonState {
  totalPages: number;
  dragons: [Dragon[]];
  dragonSelected: Dragon;
}

export interface Dragon {
  id: string;
  createdAt: Date;
  name: string;
  type: string;
}
