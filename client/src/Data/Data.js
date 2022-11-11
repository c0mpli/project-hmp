// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilDumbbell,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    key:1,
    icon: UilEstate,
    heading: "Dashboard",
    link:"/dashboard",
  },
  {
    key:2,
    icon: UilDumbbell,
    heading: "My Programs",
    link:"/myprograms",
  },
  {
    key:3,
    icon: UilUsersAlt,
    heading: "HMP Programs",
    link:"/hmpprograms",
  },
  {
    key:4,
    icon: UilPackage,
    heading: 'My Account',
    link:"/myaccount",
  },
];

// Analytics Cards Data
export const cardsData = [
  { 
    image: img1,
    title: "Swimming Injury Prevention Program",
    barValue: 32,
  },
  {
    image: img2,
    title: "Core and Back Fitness Program",
    barValue: 50,
  },
  {
    image: img3,
    title: "ACL Rehab Stage-1 Recovery Program",
    barValue: 60,
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Health Matthews",
    noti: "All the best :)",
    time: "28m ago",
  },
  {
    img: img2,
    name: "HMP Team",
    noti: "Feel free to reach out to us.",
    time: "50m ago",
  },
  {
    img: img3,
    name: "Coach",
    noti: "Congratulations on your first step to recovery :)",
    time: "2h ago",
  },
];


export const dataDigitalBestSeller = [
  {
    id: 1,
    title: 'Mario Kart™ 8 Deluxe',
    price: '$59.99',
    category: 'Nintendo Switch',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0',
  },
  {
    id: 2,
    title: 'TRIANGLE STRATEGY™',
    price: '$59.99',
    category: 'Nintendo Switch',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/t/triangle-strategy-switch/hero?_a=AJADJWI0',
  },
  {
    id: 3,
    title: 'Pokémon™ Legends: Arceus',
    price: '$59.99',
    category: 'Nintendo Switch',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero?_a=AJADJWI0',
  },
  {
    id: 4,
    title: 'Super Mario™ 3D World + Bowser’s Fury',
    price: '$59.99',
    category: 'Nintendo Switch',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?_a=AJADJWI0',
  },
  {
    id: 5,
    title: 'Cuphead',
    price: '$19.99',
    category: 'Nintendo Switch',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero?_a=AJADJWI0',
  },
  {
    id: 6,
    title: 'Minecraft',
    price: '$29.99',
    category: 'Nintendo Switch',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0',
  },
  {
    id: 7,
    title: 'Mario + Rabbids® Kingdom Battle',
    price: '$59.99',
    category: 'Nintendo Switch',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-plus-rabbids-kingdom-battle-switch/hero?_a=AJADJWI0',
  },
  {
    id: 8,
    title: 'Unravel Two',
    price: '$59.99',
    category: 'Nintendo Switch',
    sale: 63, //percent
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
  },
];