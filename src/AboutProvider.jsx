import React, { createContext, useReducer } from "react";

export const AboutContext = createContext();

const initialState = [
  {
    id: 1,
    title: "About",
    desc: "I'm Jonathan Lexi, currently studying at the University of North Sumatra, majoring in Computer Science. I am a fifth semester student who is interested in learning technology, especially website development.I am interested in creating a website and making the website look more attractive",
  },
  {
    id: 2,
    title: "Education",
    desc: "University of North Sumatera,Computer Science",
  },
  {
    id: 3,
    title: "Organization Experience",
    desc: [
      "Dies Natalis Fasilkom-TI USU 2021,",
      "Imilkom Sport Competition 2022,",
      "Penerimaan Mahasiswa Baru Ilmu Komputer 2022",
    ],
  },
  {
    id: 4,
    title: "Hardskills and Softskills",
    desc: [
      "HTML,CSS,Javascript,PHP,C#,C++,C,",
      "Understand English,",
      "Teamwork,",
      "Time Management,",
      "Leadership",
    ],
  },
];

const portfolioState = [
  {
    id: 1,
    title: "BMI Calculator",
    desc: "Calculate whether your ideal weight or not by using javascript",
    buttontext: "Detail",
    url: "https://bmi-calculator-gamma-rouge.vercel.app/",
  },
  {
    id: 2,
    title: "TMDB Movies Review",
    desc: "Movie review by retrieving TMDB movie data/fetch api ",
    buttontext: "Detail",
    url: "https://moviesrevi3w.netlify.app/",
  },
  {
    id: 3,
    title: "Web Profile",
    desc: "My first profile website",
    buttontext: "Detail",
    url: "http://web-profile-pink.vercel.app/",
  },
];

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function AboutProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    initialState: initialState,
    portfolioState: portfolioState,
  });

  return (
    <div>
      <AboutContext.Provider value={{ state }}>
        {children}
      </AboutContext.Provider>
    </div>
  );
}

export default AboutProvider;
