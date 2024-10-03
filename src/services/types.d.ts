export interface USER {
  name: string | null,
  lastName: string | null,
  birthDay: string | null
}

export interface PLAN {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface LISTPLANS {
  list: Plan[];
}