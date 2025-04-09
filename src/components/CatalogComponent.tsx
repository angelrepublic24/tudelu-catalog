"use client";
import HTMLFlipBook from "react-pageflip";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Closure from "./Closure/Closure";
import ClosureBenefits from "./Closure/ClosureBenefits";
import Private from "./Private/Private";
import PrivateBenefits from "./Private/PrivateBenefits";
import ProcessPage1 from "./Process/ProcessPage1";
import ProcessPage2 from "./Process/ProcessPage2";

const CatalogComponent = () => {
  const bookRef = useRef<any>(null);
  const [isCoverOpen, setIsCoverOpen] = useState(true);
  const [showAlt, setShowAlt] = useState(false);

  


  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 2000); // cambia cada 2s

    return () => clearInterval(interval);
  }, []);
 
 // Función para manejar el cambio de página
 const handlePageChange = (e: any) => {
  const currentPageIndex = e.data.pageIndex;
  // Si estamos en la portada (página 0), activa el modo retrato
  setIsCoverOpen(currentPageIndex === 1);
};

 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     

      {/* <div
        className='relative shadow-2xl rounded-lg overflow-hidden border border-gray-300 ' */}
      
      {/* Spine efecto "libro" */}
      <div className="absolute -left-1 w-2 h-full bg-gradient-to-r from-gray-300 via-gray-200 to-transparent z-20 opacity-70 pointer-events-none" />

      {/* Efecto de bordes como hojas */}
      <div className="absolute -right-1 w-2 h-full bg-gradient-to-l from-gray-300 via-gray-200 to-transparent z-20 opacity-70 pointer-events-none" />
      <HTMLFlipBook
        ref={bookRef}
        drawShadow={true}
        width={500}
        height={700}
        className="shadow-lg page-book"
        showPageCorners={true}
        showCover={true}
        mobileScrollSupport={true}
        style={{ borderRadius: "20px", overflow: "hidden" }}
        startPage={0} // Página inicial
        size="fixed" // Ajusta el tamaño al contenedor
        minWidth={500} // Ancho mínimo
        minHeight={500} // Altura mínima
        maxWidth={800} // Ancho máximo
        maxHeight={500} // Altura máxima
        flippingTime={1000} // Tiempo de transición
        usePortrait={false} // Modo retrato
        startZIndex={0} // Z-index para la portada
        autoSize={false} // Desactivar tamaño automático
        maxShadowOpacity={1} // Opacidad máxima de la sombra
        clickEventForward={true} // Habilitar clic para avanzar página
        useMouseEvents={true} // Habilitar eventos de ratón
        swipeDistance={30} // Distancia mínima para hacer un swipe
        disableFlipByClick={false} // Desactivar el flip por clic
        onFlip={handlePageChange}
      >
        {/* Portada */}
        <div className="page bg-[#ff5100]  w-full h-[700px] text-white text-3xl font-bold">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Image
              src="https://tudelu.com/hubfs/logo-white.svg"
              alt="Tudelu"
              width={300}
              height={100}
              unoptimized
            />
            <p className="mt-4 text-center">Walls that move you</p>
          </div>
        </div>

        {/* Closure */}
        <div></div>
        <div className="">
          <h2 className="text-6xl flex items-center justify-center h-full font-bold mb-4 text-[#ff5100]">
            Closure Series
          </h2>
        </div>

        <div className="page w-[500px] h-[700px] bg-black overflow-hidden relative">
          <video
            className="w-full h-full object-cover object-left"
            src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Tudelu_Closure_Bedroom.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="page w-full h-[700px] bg-black overflow-hidden relative">
          <video
            className="w-[1000px] h-full object-cover object-[67%]"
            src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Tudelu_Closure_Bedroom.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div>
          <Closure />
        </div>
        <div>
          <ClosureBenefits />
        </div>

        {/* Closure Installation Process */}
        <div className="page w-full h-[700px] bg-black overflow-hidden relative">
          <h4 className="absolute text-2xl font-bold mb-4 text-[#ff5100] p-16">Installation Process</h4>
          <video
            className="w-full h-full object-cover object-left"
            src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Closure%20animation.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="page w-full h-[700px] bg-black overflow-hidden relative">
        <video
            className="w-[1000px] h-full object-cover object-[67%]"
            src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Closure%20animation.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* System Completed */}
        <div>
        <h4 className="absolute text-2xl font-bold mb-4 text-[#ff5100] p-16">System Completed</h4>

          <Image
            width={500}
            height={500}
            alt="closure"
            src={
              showAlt
                ? "/images/closure-left.jpg"
                : "/images/Closure_open_left.png"
            }
            className="h-full transition-opacity duration-1000 ease-in-out "
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            alt="closure"
            src={
              showAlt
                ? "/images/closure-right.jpg"
                : "/images/Closure_open_right.png"
            }
            className="h-full transition-opacity duration-1000 ease-in-out "
          />
        </div>

        {/* ---------End Closure-------- */}


            {/* Private */}
        <div></div>
        <div className="">
          <h2 className="text-6xl flex items-center justify-center h-full font-bold mb-4 text-[#ff5100]">
            Private Series
          </h2>
        </div>

        <div className="page w-full h-full bg-black overflow-hidden relative">
          <video
            className="w-full h-full object-cover object-left"
            src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Videos/Anim%20(2).mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="page w-full h-full bg-black overflow-hidden relative">
          <video
            className="w-full h-full object-cover object-[67%]"
            src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Videos/Anim%20(2).mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div>
          <Private />
        </div>
        <div>
          <PrivateBenefits />
        </div>

        {/* Closure Installation Process */}
        <div className="page w-full h-[700px] bg-black overflow-hidden relative">
          <h4 className="absolute text-2xl font-bold mb-4 text-[#ff5100] p-16">Installation Process</h4>
          <video
            className="w-full h-full object-cover object-left"
            src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Private%20installation.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="page w-full h-[700px] bg-black overflow-hidden relative">
        <video
            className="w-[1000px] h-full object-cover object-[67%]"
            src="https://22465736.fs1.hubspotusercontent-na1.net/hubfs/22465736/Private%20installation.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* System Completed Private */}
        <div>
        <h4 className="absolute text-2xl font-bold mb-4 text-[#ff5100] p-16">System Completed</h4>
          <Image
            width={500}
            height={500}
            alt="closure"
            src={
              showAlt
                ? "/images/LivingRoom_Dinning_Left.jpg"
                : "/images/LivingRoom_Dinning_Left_Open.jpg"
            }
            className="h-full transition-opacity duration-1000 ease-in-out "
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            alt="closure"
            src={
              showAlt
                ? "/images/LivingRoom_Dinning_Right.jpg"
                : "/images/LivingRoom_Dinning_Right_Open.jpg"
            }
            className="h-full transition-opacity duration-1000 ease-in-out "
          />
        </div>



        {/* Process Page */}
        <div><ProcessPage1 /></div>
        <div className="bg-white"><ProcessPage2 /></div>
        {/* Página de contacto */}
        <div className="page w-[500px] h-[700px] bg-gradient-to-r from-[#353535] to-[#222222] text-white p-6 flex flex-col justify-center items-center text-center rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4 text-[#ff5100]">
            Get in Touch
          </h2>

          <p className="text-lg mb-4">We'd love to hear from you!</p>

          <div className="text-sm mb-4">
            <p>
              Email:{" "}
              <a
                href="mailto:angel.almonte@tudelu.com"
                className="underline text-[#ff5100]"
              >
                angel.almonte@tudelu.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+17187827882" className="underline text-[#ff5100]">
                718.782.7882
              </a>
            </p>
          </div>

          <a
            href="https://tudelu.com/request-quote"
            className="mt-6 bg-[#ff5100] text-[#353535] px-6 py-3 rounded-full font-semibold hover:bg-[#e89100] transition duration-300 transform hover:scale-105"
          >
            Request a Quote
          </a>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default CatalogComponent;
