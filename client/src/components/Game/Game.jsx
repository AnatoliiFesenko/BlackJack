import React, { useEffect, useRef, useState } from "react";
import Score from "../Score/Score";
import GameButtons from "../GameButtons/GameButtons";
import getCards from "../assets/ObjCards";
import styles from "./Game.module.scss";
import { randomNum, userScore, dillerScore } from "./functionsGame";
import { useDispatch, useSelector } from "react-redux";
import { userLostReducer, userWinReducer } from "../../redusers/balanceReducer";
import { changeOneBalance } from "../../https/balanceAPI";

const Game = () => {
  const constDeck = getCards();
  const [deck, setDeck] = useState([...constDeck]);
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.balance);
  const user = useSelector((state) => state.user.currentUser);
  const [dillerCards, setDillerCards] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [userScoreStop, setUserScoreStop] = useState(0);
  const [dillerScoreStop, setDillerScoreStop] = useState(0);
  const [bet, setBet] = useState(0);
  const [changeMode, setChangeMode] = useState(false);
  const [result, setResult] = useState("");
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      if (balance < 10) {
        dispatch(userWinReducer(100)); // потом создать config и закинуть туда
      }
      changeOneBalance(user.id, balance);
    }
  }, [balance]);

  useEffect(() => {
    setUserScoreStop(userScore(userCards));
  }, [userCards]);

  useEffect(() => {
    if (userScoreStop > 21) {
      userLost();
    }
  }, [userScoreStop]);

  useEffect(() => {
    setDillerScoreStop(dillerScore(dillerCards));
  }, [dillerCards]);

  useEffect(() => {
    if (dillerScoreStop > 21) {
      dillerLost();
    } else if (dillerScoreStop === userScoreStop && dillerScoreStop >= 16) {
      draw();
    } else if (dillerScoreStop > userScoreStop && dillerScoreStop <= 21) {
      dillerWin();
    } else if (dillerScoreStop < userScoreStop && dillerScoreStop > 19) {
      dillerLost();
    } else if (dillerScoreStop !== 0) {
      if (dillerScoreStop === userScoreStop && dillerScoreStop < 16) {
        userStop();
      }
      if (dillerScoreStop < userScoreStop && dillerScoreStop <= 19) {
        userStop();
      }
    }
  }, [dillerScoreStop]);

  function userLost() {
    dispatch(userLostReducer(bet));
    setChangeMode(!changeMode);
    console.log("userLost");
    setResult("Diller win");
  }

  function dillerLost() {
    dispatch(userWinReducer(bet));
    console.log("dillerLost");
    setResult("User win");
  }
  function dillerWin() {
    dispatch(userLostReducer(bet));
    console.log("dillerWin");
    setResult("Diller win");
  }
  function draw() {
    console.log("draw");
    setResult("Draw");
  }

  function addCardUser() {
    let randomNumCard = randomNum(deck);
    setUserCards([...userCards, deck[randomNumCard]]);
    let newArr = deck.filter((item, index) => {
      if (randomNumCard == index) {
        return false;
      } else {
        return true;
      }
    });
    setDeck(newArr);
    if (userScoreStop > 21) {
      userLost();
      setResult("Diller win");
    }
  }
  //DillerStartGame
  function userStop() {
    let randomNumCard = randomNum(deck);
    setDillerCards([...dillerCards, deck[randomNumCard]]);
    let newArr = deck.filter((item, index) => {
      if (randomNumCard == index) {
        return false;
      } else {
        return true;
      }
    });
    setDeck(newArr);
  }

  function newGame() {
    setDillerCards([]);
    setUserCards([]);
    setDeck(constDeck);
  }

  const placeBet = (value) => {
    setBet(value);
  };

  return (
    <div className={styles.wrapGameTable}>
      <Score userScore={userScoreStop} dillerScore={dillerScoreStop} />
      <div className={styles.gameTable}>
        <div>
          <div className={styles.wrapCards}>
            {dillerCards.length > 0
              ? dillerCards.map((item) => {
                  return (
                    <div key={item.id} className={styles.cardDiller}>
                      <img src={item.img} />
                    </div>
                  );
                })
              : ""}
          </div>

          <div className={styles.wrapCards}>
            {userCards.length > 0
              ? userCards.map((item) => {
                  return (
                    <div key={item.id} className={styles.cardUser}>
                      <img src={item.img} />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
      <GameButtons
        addCard={addCardUser}
        stop={userStop}
        newGame={newGame}
        placeBet={placeBet}
        changeMode={changeMode}
        result={result}
        setResult={setResult}
      />
    </div>
  );
};

export default Game;
