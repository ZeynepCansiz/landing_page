import React, { useRef, useState } from "react";
import CardNonImage from "../components/cardWithoutImage.js";

const FourthPage = () => {
  const scrollContainerRef = useRef(null);
  const [cards, setCards] = useState([
    {
      icon: "fa-brands fa-shield-halved m-3",
      title: "Fiveth",
      paragraph:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      image: "images/fourth-page-people1.jpeg",
      name: "Hellena John",
      job: "Co-founder",
    },
    {
      icon: "fa-solid fa-bolt m-3",
      title: "Zoomerr",
      paragraph:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis viverra turpis lorem. Varius a turpis urna id porttitor.",
      image: "images/fourth-page-people1.jpeg",
      name: "Hellen Jummy",
      job: "Team Lead",
    },
    {
      icon: "fa-brands fa-sellcast m-3",
      title: "SHELLS",
      paragraph:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      image: "images/fourth-page-people2.jpeg",
      name: "Hellena John",
      job: "Co-founder",
    },
    {
      icon: "fa-brands fa-sellcast m-3",
      title: "ArtVenue",
      paragraph:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      image: "images/fourth-page-people3.jpeg",
      name: "David Oshodi",
      job: "Manager",
    },
    {
      icon: "fa-solid fa-flask-vial m-3",
      title: "Fourth",
      paragraph:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis viverra turpis lorem. Varius a turpis urna id porttitor.",
      image: "images/fourth-page-people1.jpeg",
      name: "Hellen Jummy",
      job: "Team Lead",
    },
  ]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (direction === "right") {
          const firstCard = cards[0];
          setCards([...cards.slice(1), firstCard]); 
          scrollContainerRef.current.scrollBy({
            left: -300,
            behavior: "instant", 
          });
        } else {
          const lastCard = cards[cards.length - 1];
          setCards([lastCard, ...cards.slice(0, cards.length - 1)]); 
          scrollContainerRef.current.scrollBy({
            left: 300,
            behavior: "instant", 
          });
        }
      }, 300); 
    }
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        className="px-5"
        style={{ backgroundColor: "rgba(254,252,242,255)" }}
      >
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-8 custom-text">
              <h2
                style={{ font: "Roboto", fontSize: "56px", fontWeight: "bold" }}
              >
                Because they love us
              </h2>
            </div>
            <div className="col-md-4 text-md-right d-none d-md-flex justify-content-end">
              <button
                className="btn btn-circle mx-1"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(120, 53, 15, 1)",
                  backgroundColor: "transparent",
                }}
                onClick={() => scroll("left")}
              >
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ color: "rgba(120, 53, 15, 1)" }}
                ></i>
              </button>
              <button
                className="btn btn-circle mx-1"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(120, 53, 15, 1)",
                  backgroundColor: "transparent",
                }}
                onClick={() => scroll("right")}
              >
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "rgba(120, 53, 15, 1)" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ position: "relative", height: "300px", overflow: "hidden"}}
        >
          <div
            style={{
              backgroundColor: "rgba(253, 230, 138, 1)",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          ></div>
        </div>
      </div>

      <div
        className="d-flex"
        ref={scrollContainerRef}
        style={{
          marginBottom: "15rem",
          marginTop: "-15rem",
          position: "relative",
          zIndex: 3,
          scrollBehavior: "smooth",
          gap: "5rem",
          padding: "0 20px",
          whiteSpace: "nowrap",
          flexDirection: "row",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        {cards.map((card, index) => (
          <div
            className="flex-shrink-0"
            style={{ width: "300px", scrollSnapAlign: "center" }}
            key={index}
          >
            <CardNonImage
              icon={card.icon}
              title={card.title}
              paragraph={card.paragraph}
              image={card.image}
              name={card.name}
              job={card.job}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthPage;
