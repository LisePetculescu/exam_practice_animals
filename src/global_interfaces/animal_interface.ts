export type Animal = {
  id?: number;
  name: string;
  age: number;
  species: string;

  trophies: Trophy[];
};

export type Trophy = {
  id?: number;
  year: number;
  placement: number;
  category: Category;
};

export type Category = {
  id?: number;
  name: string;
};
