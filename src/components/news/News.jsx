import React, { useState, useEffect } from 'react';

const News = () => {
  const [positionAside, setPositionAside] = useState(0);
  const [totalAsides, setTotalAsides] = useState(0);
  const visibleAsides = 1;

  useEffect(() => {
    // Esto debería actualizarse cuando el DOM esté listo
    const trackAside = document.querySelector('.aside-track');
    if (trackAside) {
      setTotalAsides(trackAside.children.length);
    }
  }, []);

  const updateAsideSlider = () => {
    const trackAside = document.querySelector('.aside-track');
    if (trackAside && trackAside.children.length > 0) {
      const asideWidth = trackAside.children[0].offsetWidth;
      const maxAside = totalAsides - visibleAsides;
      let newPosition = positionAside;
      if (newPosition < 0) newPosition = 0;
      if (newPosition > maxAside) newPosition = maxAside;
      trackAside.style.transform = `translateX(-${newPosition * asideWidth}px)`;
    }
  };

  const prevAsideSlide = () => {
    setPositionAside(prev => prev - 1);
  };

  const nextAsideSlide = () => {
    setPositionAside(prev => prev + 1);
  };

  useEffect(() => {
    updateAsideSlider();
    window.addEventListener('resize', updateAsideSlider);
    return () => window.removeEventListener('resize', updateAsideSlider);
  }, [positionAside, totalAsides]);

  const newsItems = [
    {
      img: "imagenes/02-Feria-de-la-construccion-1.jpg",
      title: "Feria de la Construccion",
      text: "Este año estuvimos, nuevamente, en la Feria de la construccion con nuestra propia interactiva. Como todos los años brindamos un espacio para que quienes nos visiten saquen al artista que tienen adentro utilizando nuestros productos"
    },
    {
      img: "imagenes/03-Aniversario.jpg",
      title: "Aniversario del Local De Carrasco",
      text: "Este año estuvimos, nuevamente, en la Feria de la construccion con nuestra propia interactiva. Como todos los años brindamos un espacio para que quienes nos visiten saquen al artista que tienen adentro utilizando nuestros productos"
    },
    {
      img: "imagenes/04-Estadio-Domingo-Burgueno.jpg",
      title: "Estudio Domingo Burgueño",
      text: "Este año estuvimos, nuevamente, en la Feria de la construccion con nuestra propia interactiva. Como todos los años brindamos un espacio para que quienes nos visiten saquen al artista que tienen adentro utilizando nuestros productos"
    },
    {
      img: "imagenes/01-Penarol.jpg",
      title: "Feria de la Construccion",
      text: "Lorem ipsum dolor sit amet..."
    }
  ];

  return (
    <div className="container_novedades">
      <h1>Novedades</h1>
      <div className="slider-container">
        <button className="slider-btn prev" onClick={prevAsideSlide}>&#10094;</button>
        <div className="slider">
          <div className="aside-track">
            {newsItems.map((item, index) => (
              <aside key={index}>
                <img src={item.img} alt={item.title} />
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </aside>
            ))}
          </div>
        </div>
        <button className="slider-btn next" onClick={nextAsideSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default News;