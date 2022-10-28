import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstChoice, setFirstChoice] = useState({});
  const [secondChoice, setSecondChoice] = useState({});
  const imgs = [
    {
      img: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://seeklogo.com/images/C/css-3-logo-AF06D75231-seeklogo.com.png",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://mpng.subpng.com/20190627/ttx/kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-developers-5d145895b06253.7824611015616144857225.jpg",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://spng.subpng.com/20180815/ta/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa0a0f4b2.3928971215343725126593.jpg",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://seeklogo.com/images/C/css-3-logo-AF06D75231-seeklogo.com.png",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://mpng.subpng.com/20190627/ttx/kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-developers-5d145895b06253.7824611015616144857225.jpg",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://spng.subpng.com/20180815/ta/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa0a0f4b2.3928971215343725126593.jpg",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      id: Math.random() * 57234757045804,
      matched: false,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
      id: Math.random() * 57234757045804,
      matched: false,
    },
  ];

  const [cards, setCards] = useState(imgs);

  const suffleHandler = () => {
    setCards((pre) => {
      return pre
        .map((img) => {
          return {
            ...img,
            id: Math.random() * 57234757045804,
            matched: false,
          };
        })
        .sort((a, b) => a.id - b.id);
    });
    setFirstChoice({});
    setSecondChoice({});
  };

  const cardClickHandler = (card) => {
    if (firstChoice.id) {
      setSecondChoice({ img: card.img, id: card.id });
    } else {
      setFirstChoice({ img: card.img, id: card.id });
    }
  };

  useEffect(() => {
    if (firstChoice?.img && secondChoice?.img) {
      if (firstChoice.img === secondChoice.img) {
        setCards((pre) =>
          pre.map((card) => {
            if (card.img === firstChoice.img) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        );
        setFirstChoice({});
        setSecondChoice({});
      } else {
        Array.from(document.querySelectorAll(".front")).forEach(
          (f) => (f.style.pointerEvents = "none")
        );
        setTimeout(() => {
          setFirstChoice({});
          setSecondChoice({});
          Array.from(document.querySelectorAll(".front")).forEach(
            (f) => (f.style.pointerEvents = "all")
          );
        }, 900);
      }
    } else {
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      setTimeout(() => {
        alert("you win");
      }, 400);
    }
  }, [cards]);
  return (
    <>
      <button onClick={suffleHandler}>new game</button>
      <div className="card-container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card-div">
              <div
                className={`front ${
                  card.matched
                    ? "flipped"
                    : card.id === firstChoice.id
                    ? "flipped"
                    : card.id === secondChoice.id
                    ? "flipped"
                    : ""
                }`}
                onClick={() => {
                  cardClickHandler(card);
                }}
              />
              <div
                data-bg-img={card.img}
                className={`back ${
                  card.matched
                    ? "flipped"
                    : card.id === firstChoice.id
                    ? "flipped"
                    : card.id === secondChoice.id
                    ? "flipped"
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${card.img})`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
