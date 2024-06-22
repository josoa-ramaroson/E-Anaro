import React from "react";
import { logo } from "../assests";
import NavText from "./nav-text";
import Button from "./button";

const NavigationBar = () => {
  //ovaina bouton fa lasa misy saut à la ligne
  return (
    <div className="bg-secondary py-3 pr-[6%]">
      <div className="flex justify-between pl-20 flex-wrap  sm:items-center">
        <div>
        <a href="/">
          <img className=" left-0 top-0 z-10 h-8" src={logo} />
        </a>
        </div>
        <div className="pr-24 flex w-[65%] justify-end items-center flex-wrap gap-8">
          <div className="flex text-xl gap-12 flex-wrap ">
            <NavText text="Accueil" href="/" />
            <NavText text="A Propos" href="#work" />
            <NavText text="FAQ" href="#fonctionalite" />
            <NavText text="A propos" href="/about" />
          </div>
          <Button text="Se Connecter" order="primary" href="/login" />
        </div>
      </div>
    </div>

  );
};

export default NavigationBar;
