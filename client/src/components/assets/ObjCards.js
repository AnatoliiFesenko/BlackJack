import img_c_2 from "./imgCards/2_of_clubs.png";
import img_d_2 from "./imgCards/2_of_diamonds.png";
import img_h_2 from "./imgCards/2_of_hearts.png";
import img_s_2 from "./imgCards/2_of_spades.png";
import img_c_3 from "./imgCards/3_of_clubs.png";
import img_d_3 from "./imgCards/3_of_diamonds.png";
import img_h_3 from "./imgCards/3_of_hearts.png";
import img_s_3 from "./imgCards/3_of_spades.png";
import img_c_4 from "./imgCards/4_of_clubs.png";
import img_d_4 from "./imgCards/4_of_diamonds.png";
import img_h_4 from "./imgCards/4_of_hearts.png";
import img_s_4 from "./imgCards/4_of_spades.png";
import img_c_5 from "./imgCards/5_of_clubs.png";
import img_d_5 from "./imgCards/5_of_diamonds.png";
import img_h_5 from "./imgCards/5_of_hearts.png";
import img_s_5 from "./imgCards/5_of_spades.png";
import img_c_6 from "./imgCards/6_of_clubs.png";
import img_d_6 from "./imgCards/6_of_diamonds.png";
import img_h_6 from "./imgCards/6_of_hearts.png";
import img_s_6 from "./imgCards/6_of_spades.png";
import img_c_7 from "./imgCards/7_of_clubs.png";
import img_d_7 from "./imgCards/7_of_diamonds.png";
import img_h_7 from "./imgCards/7_of_hearts.png";
import img_s_7 from "./imgCards/7_of_spades.png";
import img_c_8 from "./imgCards/8_of_clubs.png";
import img_d_8 from "./imgCards/8_of_diamonds.png";
import img_h_8 from "./imgCards/8_of_hearts.png";
import img_s_8 from "./imgCards/8_of_spades.png";
import img_c_9 from "./imgCards/9_of_clubs.png";
import img_d_9 from "./imgCards/9_of_diamonds.png";
import img_h_9 from "./imgCards/9_of_hearts.png";
import img_s_9 from "./imgCards/9_of_spades.png";
import img_c_10 from "./imgCards/10_of_clubs.png";
import img_d_10 from "./imgCards/10_of_diamonds.png";
import img_h_10 from "./imgCards/10_of_hearts.png";
import img_s_10 from "./imgCards/10_of_spades.png";
import img_c_j from "./imgCards/jack_of_clubs.png";
import img_d_j from "./imgCards/jack_of_diamonds.png";
import img_h_j from "./imgCards/jack_of_hearts.png";
import img_s_j from "./imgCards/jack_of_spades.png";
import img_c_q from "./imgCards/queen_of_clubs.png";
import img_d_q from "./imgCards/queen_of_diamonds.png";
import img_h_q from "./imgCards/queen_of_hearts.png";
import img_s_q from "./imgCards/queen_of_spades.png";
import img_c_k from "./imgCards/king_of_clubs.png";
import img_d_k from "./imgCards/king_of_diamonds.png";
import img_h_k from "./imgCards/king_of_hearts.png";
import img_s_k from "./imgCards/king_of_spades.png";
import img_c_a from "./imgCards/ace_of_clubs.png";
import img_d_a from "./imgCards/ace_of_diamonds.png";
import img_h_a from "./imgCards/ace_of_hearts.png";
import img_s_a from "./imgCards/ace_of_spades.png";

const allImg = [
  img_c_2,
  img_d_2,
  img_h_2,
  img_s_2,
  img_c_3,
  img_d_3,
  img_h_3,
  img_s_3,
  img_c_4,
  img_d_4,
  img_h_4,
  img_s_4,
  img_c_5,
  img_d_5,
  img_h_5,
  img_s_5,
  img_c_6,
  img_d_6,
  img_h_6,
  img_s_6,
  img_c_7,
  img_d_7,
  img_h_7,
  img_s_7,
  img_c_8,
  img_d_8,
  img_h_8,
  img_s_8,
  img_c_9,
  img_d_9,
  img_h_9,
  img_s_9,
  img_c_10,
  img_d_10,
  img_h_10,
  img_s_10,
  img_c_j,
  img_d_j,
  img_h_j,
  img_s_j,
  img_c_q,
  img_d_q,
  img_h_q,
  img_s_q,
  img_c_k,
  img_d_k,
  img_h_k,
  img_s_k,
  img_c_a,
  img_d_a,
  img_h_a,
  img_s_a,
];

const cardName = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace",
];
const cardType = ["clubs", "diamonds", "hearts", "spades"];

let cards = [];
let id = 0;

for (let i = 0; i < cardName.length; i++) {
  for (let j = 0; j < cardType.length; j++) {
    const img = allImg[id];
    id = id + 1;
    if (id >= 53) {
      id = 0;
    }

    const value =
      cardName[i] === "jack"
        ? 2
        : cardName[i] === "queen"
        ? 3
        : cardName[i] === "king"
        ? 4
        : cardName[i] === "ace"
        ? 11
        : Number(cardName[i]);

    cards.push({
      id: id,
      img: img,
      value: value,
    });
  }
}

function getCards() {
  return cards;
}

export default getCards;
