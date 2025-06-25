import React, { useState, useEffect } from 'react';

const Products = () => {
  const [positionImage, setPositionImage] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const visibleImages = 4;

  useEffect(() => {
    // Esto debería actualizarse cuando el DOM esté listo
    const trackImage = document.querySelector('.image-track');
    if (trackImage) {
      setTotalImages(trackImage.children.length);
    }
  }, []);

  const updateImageSlider = () => {
    const trackImage = document.querySelector('.image-track');
    if (trackImage) {
      const imageWidth = trackImage.children[0]?.clientWidth || 0;
      const maxPosition = totalImages - visibleImages;
      let newPosition = positionImage;
      if (newPosition < 0) newPosition = 0;
      if (newPosition > maxPosition) newPosition = maxPosition;
      trackImage.style.transform = `translateX(-${newPosition * imageWidth}px)`;
    }
  };

  const prevImageSlide = () => {
    setPositionImage(prev => {
      const newPos = prev - 1;
      return newPos;
    });
  };

  const nextImageSlide = () => {
    setPositionImage(prev => {
      const newPos = prev + 1;
      return newPos;
    });
  };

  useEffect(() => {
    updateImageSlider();
    window.addEventListener('resize', updateImageSlider);
    return () => window.removeEventListener('resize', updateImageSlider);
  }, [positionImage, totalImages]);

  return (
    <div className="container_products">
      <div className="title">
        <h1 className="products">Productos</h1>
      </div>
      <div className="slider-container">
        <button className="prev" onClick={prevImageSlide}>&#10094;</button>
        <div className="slider">
          <div className="image-track">
            <img src="imagenes/3.png" alt="Producto 1" />
            <img src="imagenes/4.png" alt="Producto 2" />
            <img src="imagenes/7.png" alt="Producto 3" />
            <img src="imagenes/8.png" alt="Producto 4" />
            <img src="imagenes/Pintura-pisos.png" alt="Producto 5" />
            <img src="imagenes/Pintura-interior.png" alt="Producto 6" />
          </div>
        </div>
        <button className="next" onClick={nextImageSlide}>&#10095;</button>
      </div>
      <button className="btn-catalog">CATALOGO COMPLETO</button>
      <div className="products-detail">
        <div className="description">
          <h1>LLEGAMOS <br /> A TODO EL PAIS</h1>
          <div>
            <button className="btn-comprar">VER DONDE COMPRAR</button>
          </div>
        </div>
        <div className="buss">
          <img src="imagenes/Todo-el-pais-Camion-03-.jpg" alt="Distribución nacional" />
        </div>
      </div>
    </div>
  );
};

export default Products;