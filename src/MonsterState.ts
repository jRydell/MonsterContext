// context = global state

import { createContext } from "react";

type Hobbies = {
  name: string;
  level: number;
};

type Monster = {
  name: string;
  eyes: number;
  tentacles: number;
  hobbies: Hobbies[];
  claws: boolean;
};

type House = {
  name: string;
  floors: number;
  color: string;
};
// GlobalState
type MonsterState = {
  monsters: Monster[];
  houses: House[];
};

export const initialMonsterState: MonsterState = {
  monsters: [
    {
      name: "Gugge",
      eyes: 3,
      tentacles: 12,
      hobbies: [
        { name: "Fishing", level: 12 },
        { name: "Playing the piano", level: 5 },
        { name: "Gardening", level: 7 },
      ],
      claws: true,
    },
    {
      name: "Lisa",
      eyes: 26,
      tentacles: 9,
      hobbies: [{ name: "Chess", level: 99 }],
      claws: false,
    },
    {
      name: "Kalle",
      eyes: 5,
      tentacles: 100,
      hobbies: [{ name: "fotboll", level: 8 }],
      claws: true,
    },
  ],
  houses: [{ name: "Green House", floors: 4, color: "green" }],
};

export const MonsterContext = createContext({} as MonsterState);
