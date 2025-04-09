import React from "react";
import { wallSystems } from "@/data/wallSystems";

export default function Private() {
  const privates = wallSystems[1];

  return (
    <div className="w-full bg-[#f2f2f2] px-4 md:px-8 py-16">
      <div className="w-full md:w-1/2 mx-auto py-4">
        {/* Imágenes */}
        <div className="flex justify-center mb-4 w-full group relative">
          {/* Imagen cerrada */}
          <img
            loading="lazy"
            src="https://tudelu.com/hubfs/raw_assets/public/Tudelu/images/private-closed.png?1"
            alt="Closed Image"
            className="w-full object-contain block group-hover:hidden transition-all duration-300"
          />

          {/* Imagen abierta */}
          <img
            loading="lazy"
            src="https://tudelu.com/hubfs/raw_assets/public/Tudelu/images/private-open.png?1"
            alt="Open Image"
            className="w-full object-contain hidden group-hover:block  transition-all duration-300"
          />
        </div>

        
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#ff5100]">
          {privates.title} Series
        </h2>
        <p className="py-4">{privates.description}</p>
      </div>

      
    </div>
  );
}
