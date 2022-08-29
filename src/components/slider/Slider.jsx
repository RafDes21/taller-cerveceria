import React, { useState, useEffect } from "react";
import { images } from "./Imges"; //array de imágenes
import "./slider.css";

const Slider = () => {
  const [item, setItem] = useState(0); //acá enviaremos la posición de la imagen
  const [aparece, setAparece] = useState({}); //controlamos el estado de la opacidad y transición
  const [logo, setLogo] = useState();
  const [vector, setVector] = useState();
  const [tacos, setTacos] = useState()
  const [parrafo, setParrafo] = useState()

  const opacity = () => {
    if (item < images.length - 1) {
      setAparece({ opacity: "0" });
      animaciones();
      setItem(item + 1);
      console.log(item);
    } else {
      setItem(0);
      setAparece({ opacity: "0" });
      setLogo({
        left: "13%",
        top: "-5%",
        width: "25%",
        transitionDuration: "2s",
      });
      setVector({
        width: "120%",
        top: "-25%",
        transform: " translateX(0)",
        transitionDuration: "2s",
       
        
      });
      setTacos({right:"-5%", transitionDuration: "2s"})
      setParrafo({left:"5%", transitionDuration: "2s"})
    }
  };

  const animaciones = () => {
    if (item === 0) {
      setLogo({ left: "15%", width: "30%", transitionDuration: "2s" });
      setVector({
        transform: " translateX(-10%)",
        top: "-40%",
        transitionDuration: "2s",
        rotate:"-7deg"
      });
      setTacos({right:"5%", transitionDuration: "2s"})
      setParrafo({left:"15%", botton:"10%",fontZise:"24px", transitionDuration: "2s"})
    }

    if (item === 1) {
      setLogo({ left: "5%", width: "20%", transitionDuration: "2s" });
      setVector({
        transform: " translateX(0)",
        top: "0",
        transitionDuration: "2s",
        rotate:"-7deg"
      });
      setTacos({right:"-5%", transitionDuration: "2s"})
      setParrafo({left:"5%",bottom:"0", transitionDuration: "2s"})
    }
    if (item === 2) {
      setLogo({ left: "10%",top:"10%", width: "30%", transitionDuration: "2s" });
      setVector({
        width: "130%",
        transform: " translateX(0)",
        top: "-15%",
        left:"-10%",
        transitionDuration: "2s",
        objetFit:"cover"
      });
      setTacos({display:"none", transitionDuration: "2s"})
    }
    if (item === 3) {
      setLogo({
        left: "35%",
        top: "10%",
        width: "30%",
        transitionDuration: "2s",
      });
      setVector({
        width: "100%",
        transform: " translateX(0)",
        top: "-10%",
        transitionDuration: "2s",
      });
      setTacos({right:"-5%",top:"5%", transitionDuration: "2s"})
      setParrafo({left:"5%",bottom:"15%", transitionDuration: "2s"})
    }
    if (item === 4) {
      setLogo({
        left: "67%",
        top: "-5%",
        width: "25%",
        transitionDuration: "2s",
      });
      setVector({
        width: "100%",
        transform: " translateX(0)",
        top: "0",
        transitionDuration: "2s",
      });
      setTacos({height:"90%",rotate:"90deg",top:"23%",right:"7%", transitionDuration: "2s"})
    }
    if (item === 5) {
      setLogo({
        left: "20%",
        top: "-3%",
        width: "25%",
        transitionDuration: "2s",
      });
      setVector({
        width: "100%",
        transform: " translateX(0)",
        top: "-30%",
        rotate:"7deg",
        transitionDuration: "2s",
      });
      setTacos({right:"0", transitionDuration: "2s"})
    }
    if (item === 6) {
      setLogo({
        left: "35%",
        top: "10%",
        width: "20%",
        transitionDuration: "2s",
      });
      setVector({
        width: "120%",
        transform: " translateX(0)",
        top: "-40%",
        transitionDuration: "2s",
      });
      setTacos({width:"45%", transitionDuration: "2s"})
      setParrafo({left:"25%",top:"40%", transitionDuration: "2s"})
    }
  };

  useEffect(() => {
    setAparece({ opacity: "1", transitionDuration: "2s" });
  }, [item]);

  return (
    <div className="slider" onClick={opacity} style={aparece}>
      <img className="slider-img" src={images[item]} alt="imagenesDeFondo" />
      <img
        className="slider-logo"
        style={logo}
        src="./img/logo.png"
        alt="imagenLogo"
      />
      <img
        className="slider-vector"
        style={vector}
        src="./img/Vector.png"
        alt="imagenVector"
      />
      <img className="slider-tacos" style={tacos} src="./img/tacos.png" alt="imagenTaco"/>
      <div className="slider-parrafo" style={parrafo}>
        <p>comida urbana,<br/>familia y pasión<br/>por los carros</p>
      </div>
    </div>
  );
};

export default Slider;
