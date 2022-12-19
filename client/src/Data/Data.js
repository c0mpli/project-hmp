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

//Popular Programs imports
import pic1 from "../imgs/sampleProgram.png";
import pic2 from "../imgs/sampleProgram2.png";
import pic3 from "../imgs/sampleProgram3.png";

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
    title: 'ACL Rehab Stage-1 Recovery Program',
    price: 'Lorem ipsum dolor sit dfd consectetur ashjfkdye ',
    linkImg: pic1,
  },
  {
    id: 2,
    title: 'ACL Rehab Stage-2 Recovery Program',
    price: 'Lorem ipsum dolor sit dfd consectetur ashjfkdye ',
    linkImg: pic2,
  },
  {
    id: 3,
    title: 'ACL Rehab Stage-3 Recovery Program',
    price: 'Lorem ipsum dolor sit dfd consectetur ashjfkdye ',
    linkImg: pic3,
  },
  {
    id: 4,
    title: 'ACL Rehab Stage-4 Recovery Program',
    price: 'Lorem ipsum dolor sit dfd consectetur ashjfkdye ',

    linkImg: pic1,
  },
  {
    id: 5,
    title: 'ACL Rehab Stage-5 Recovery Program',
    price: 'Lorem ipsum dolor sit dfd consectetur ashjfkdye ',
    linkImg: pic2,
  },

];