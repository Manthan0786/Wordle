import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const words = ["ALBUM", "HINGE", "MONEY", "SCRAP", "GAMER", "GLASS", "SCOUR", "BEING", "DELVE", "YIELD", "METAL", "TIPSY",
    "SLUNG", "FARCE", "GECKO", "SHINE", "CANNY", "MIDST", "BADGE", "HOMER", "TRAIN", "STORY", "HAIRY", "FORGO", "LARVA", "TRASH",
    "ZESTY", "SHOWN", "HEIST", "ASKEW", "INERT", "OLIVE", "PLANT", "OXIDE", "CARGO", "FOYER", "FLAIR", "AMPLE", "CHEEK", "SHAME",
    "MINCE", "CHUNK", "ROYAL", "SQUAD", "BLACK", "STAIR", "SCARE", "FORAY", "COMMA", "NATAL", "SHAWL", "FEWER", "TROPE", "SNOUT",
    "LOWLY", "STOVE", "SHALL", "FOUND", "NYMPH", "EPOXY", "DEPOT", "CHEST", "PURGE", "SLOSH", "THEIR", "RENEW", "ALLOW", "SAUTE",
    "MOVIE", "CATER", "TEASE", "SMELT", "FOCUS", "TODAY", "WATCH", "LAPSE", "MONTH", "SWEET", "HOARD", "CLOTH", "BRINE", "AHEAD",
    "MOURN", "NASTY", "RUPEE", "CHOKE", "CHANT", "SPILL", "VIVID", "BLOKE", "TROVE", "THORN", "OTHER", "TACIT", "SWILL", "DODGE",
    "SHAKE", "CAULK", "AROMA", "CYNIC", "ROBIN", "ULTRA", "ULCER", "PAUSE", "HUMOR", "FRAME", "ELDER", "SKILL", "ALOFT", "PLEAT",
    "SHARD", "MOIST", "THOSE", "LIGHT", "WRUNG", "COULD", "PERKY", "MOUNT", "WHACK", "SUGAR", "KNOLL", "CRIMP", "WINCE", "PRICK",
    "ROBOT", "POINT", "PROXY", "SHIRE", "SOLAR", "PANIC", "TANGY", "ABBEY", "FAVOR", "DRINK", "QUERY", "GORGE", "CRANK", "SLUMP",
    "BANAL", "TIGER", "SIEGE", "TRUSS", "BOOST", "REBUS", "UNIFY", "TROLL", "TAPIR", "ASIDE", "FERRY", "ACUTE", "PICKY", "WEARY",
    "GRIPE", "CRAZE", "PLUCK", "BRAKE", "BATON", "CHAMP", "PEACH", "USING", "TRACE", "VITAL", "SONIC", "MASSE", "CONIC", "VIRAL",
    "RHINO", "BREAK", "TRIAD", "EPOCH", "USHER", "EXULT", "GRIME", "CHEAT", "SOLVE", "BRING", "PROVE", "STORE", "TILDE", "CLOCK",
    "WROTE", "RETCH", "PERCH", "ROUGE", "RADIO", "SURER", "FINER", "VODKA", "HERON", "CHILL", "GAUDY", "PITHY", "SMART", "BADLY",
    "ROGUE", "GROUP", "FIXER", "GROIN", "DUCHY", "COAST", "BLURT", "PULPY", "ALTAR", "GREAT", "BRIAR", "CLICK", "GOUGE", "WORLD",
    "ERODE", "BOOZY", "DOZEN", "FLING", "GROWL", "ABYSS", "STEED", "ENEMA", "JAUNT", "COMET", "TWEED", "PILOT", "DUTCH", "BELCH",
    "OUGHT", "DOWRY", "THUMB", "HYPER", "HATCH", "ALONE", "MOTOR", "ABACK", "GUILD", "KEBAB", "SPEND", "FJORD", "ESSAY", "SPRAY",
    "SPICY", "AGATE", "SALAD", "BASIC", "MOULT", "CORNY", "FORGE", "CIVIC", "ISLET", "LABOR", "GAMMA", "LYING", "AUDIT", "ROUND",
    "LOOPY", "LUSTY", "GOLEM", "GONER", "GREET", "START", "LAPEL", "BIOME", "PARRY", "SHRUB", "FRONT", "WOOER", "TOTEM", "FLICK",
    "DELTA", "BLEED", "ARGUE", "SWIRL", "ERROR", "AGREE", "OFFAL", "FLUME", "CRASS", "PANEL", "STOUT", "BRIBE", "DRAIN", "YEARN",
    "PRINT", "SEEDY", "IVORY", "BELLY", "STAND", "FIRST", "FORTH", "BOOBY", "FLESH", "UNMET", "LINEN", "MAXIM", "POUND", "MIMIC",
    "SPIKE", "CLUCK", "CRATE", "DIGIT", "REPAY", "SOWER", "CRAZY", "ADOBE", "OUTDO", "TRAWL", "WHELP", "UNFED", "PAPER", "STAFF",
    "CROAK", "HELIX", "FLOSS", "PRIDE", "BATTY", "REACT", "MARRY", "ABASE", "COLON", "STOOL", "CRUST", "FRESH", "DEATH", "MAJOR",
    "FEIGN", "ABATE", "BENCH", "QUIET", "GRADE", "STINK", "KARMA", "MODEL", "DWARF", "HEATH", "SERVE", "NAVAL", "EVADE", "FOCAL",
    "BLUSH", "AWAKE", "HUMPH", "SISSY", "REBUT", "CIGAR"];

  const randomWord = words[Math.floor(Math.random() * words.length)];
  const [word] = useState(randomWord.toLowerCase());
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currGuess, setCurrGuess] = useState('');
  const [gameover, setGameOver] = useState(false);
  const [gamewon, setGameWon] = useState(false);

  console.log(word);
  useEffect(()=> {
    if (guesses.includes(word)) {
      setTimeout(() => {
        const arr = [...guesses];
        arr.fill(null);
        setGuesses(arr);
        window.location.reload(false);
      }, 3000)
      setGameWon(!gamewon);
    }
    if (guesses[6 - 1] !== null && !guesses.includes(word)) {
      setTimeout(() => {
        const arr = [...guesses];
        arr.fill(null);
        setGuesses(arr);
        window.location.reload(false);
        return;
      }, 3000)
      setGameOver(!gameover);
    }
  }, [guesses, word])

  useEffect(() => {
    if (word == null) return;
    const onPressKey = (event) => {
      const isLetter = event.key.match(/^[a-z]$/);
      setCurrGuess(prevGuess => {
        if (event.key === 'Backspace') {
          return prevGuess.slice(0, -1);
        } else if (event.key === 'Enter' && prevGuess.length === 5) {
          const guessIndex = guesses.findIndex(index => index === null)
          const guessesCloned = [...guesses];
          guessesCloned[guessIndex] = prevGuess;
          setGuesses(guessesCloned);
          return '';
        }
        if (prevGuess.length < 5 && isLetter) {
          return prevGuess = prevGuess + event.key.toLowerCase();
        }
        return prevGuess;
      })
    };
    window.addEventListener('keydown', onPressKey);

    return () => window.removeEventListener('keydown', onPressKey);
  }, [word, guesses, gameover, gamewon]);

  return (
    <>
      <div className='heading'>
        <span>Wordle</span>
      </div>
      <div className='board'>
        {guesses.map((guess, i) => {
          const currGuessIndex = i === guesses.findIndex(val => val == null);
          return (
            <Line
              key={i}
              guess={currGuessIndex ? currGuess : guess ?? ""}
              word={word}
              isFinal={!currGuessIndex && guess !== null}
            />
          );
        })
        }
        <p>{ gameover ? 'Try Again' : null}</p>
        { gamewon && <p>Congratulations, You Won!</p>}
      </div>
    </>
  );
}

function Line({ guess, word, isFinal }) {
  const tiles = [];
  for (let i = 0; i < 5; i++) {
    const char = guess[i];
    let className = 'tile';
    if (isFinal) {
      if (char === word[i]) {
        className += ' correct';
      }
      else if (word.includes(char)) {
        className += ' close';
      }
      else {
        className += ' incorrect';
      }
    }
    tiles.push(<div key={i} className={className}>{char}</div>);
  }
  return (
    <div className='line'>
      {tiles}
    </div>
  )
}


export default App;