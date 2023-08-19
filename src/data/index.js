import atomic from "../assets/games/atomic.png";
import hogwarts from "../assets/games/hogwarts.png";
import sof from "../assets/games/sons-of-the-forest.png";
import metro from "../assets/games/metro.png";
export const games = [
  {
    id: 1,
    name: "Atomic Heart",
    imgUrl: atomic,
    price: 1000,
    likes: 3100,
    platforms: {
      pc: true,
    },
  },
  {
    id: 2,
    name: "Hogwarts Legacy",
    imgUrl: hogwarts,
    price: 2000,
    likes: 3100,
    platforms: {
      pc: true,
      xbox: true,
    },
  },
  {
    id: 3,
    name: "Sons Of The Forest",
    imgUrl: sof,
    price: 3000,
    likes: 3100,
    platforms: {
      pc: true,
      ps4: true,
      nintendo: true,
    },
  },
  {
    id: 4,
    name: "Metro Exodus",
    imgUrl: metro,
    price: 4000,
    likes: 3100,
    platforms: {
      pc: true,
      ps4: true,
      xbox: true,
    },
  },
];
