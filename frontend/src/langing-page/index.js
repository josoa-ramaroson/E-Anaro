import React from "react";
import NavigationBar from "./components/navigation-bar";
import "./Landing.css";
import "./index.css";

import Banner from "./components/banner"; 
import GroupeDeCours from "./components/groupe-de-cours";
import Footer from "./components/footer";

const listeDeCours = [
  {
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjUiIGZpbGw9IiNmMzljMTIiIC8+CiAgPHBvbHlnb24gcG9pbnRzPSI0LDYwIDYwLDYwIDMyLDI4IiBmaWxsPSIjMzQ5OGRiIiAvPgo8L3N2Zz4=",
    titre: " de l'espace",
    niveau: "Lycéen",
    duree: "3 semaines",
  },
  {
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjUiIGZpbGw9IiNmMzljMTIiIC8+CiAgPHBvbHlnb24gcG9pbnRzPSI0LDYwIDYwLDYwIDMyLDI4IiBmaWxsPSIjMzQ5OGRiIiAvPgo8L3N2Zz4=",
    titre: "Géometrie de l'espace",
    niveau: "Lycéen",
    duree: "3 semaines",
  },
  {
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjUiIGZpbGw9IiNmMzljMTIiIC8+CiAgPHBvbHlnb24gcG9pbnRzPSI0LDYwIDYwLDYwIDMyLDI4IiBmaWxsPSIjMzQ5OGRiIiAvPgo8L3N2Zz4=",
    titre: "Géometrie de l'espace",
    niveau: "Lycéen",
    duree: "3 semaines",
  }
]

export const LandingPage = () => {
  return (
    <div className="h-full w-full flex flex-col text-black">

      {/* <NavigationBar /> */}
      <div className="flex flex-col" >
        <Banner />
        {/* <GroupeDeCours titre="Cours suggéré" listDeCours={listeDeCours}/> 
        <GroupeDeCours titre="Université" listDeCours={listeDeCours}/> 
        <GroupeDeCours titre="Lycée" listDeCours={listeDeCours}/>  */}

        <Footer />
      </div>

    </div>
  );
};
