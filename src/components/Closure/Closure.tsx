import React from "react";
import { wallSystems } from "@/data/wallSystems";

export default function Closure() {
  const closure = wallSystems[0];

  return (
    <div className="w-full h-full bg-[#f2f2f2] px-4 md:px-8 py-16">
      <div className="w-full md:w-1/2 mx-auto py-4">
        {/* Imágenes */}
        <div className="flex justify-center mb-4 w-full group relative">
          {/* Imagen cerrada */}
          <img
            loading="lazy"
            src="https://tudelu.com/hubfs/raw_assets/public/Tudelu/images/closure-closed.png?1"
            alt="Closed Image"
            className="w-full object-contain block group-hover:hidden transition-all duration-300"
          />

          {/* Imagen abierta */}
          <img
            loading="lazy"
            src="https://tudelu.com/hubfs/raw_assets/public/Tudelu/images/closure-open.png?1"
            alt="Open Image"
            className="w-full object-contain hidden group-hover:block  transition-all duration-300"
          />
        </div>

        {/* <div className="flex justify-center mt-4">
          <div
            title="Stone"
            className="w-8 h-8 mx-2 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: "url(https://tudelu.com/hubfs/Mist.png)",
            }}
          ></div>
          <div
            title="Snow"
            className="w-8 h-8 mx-2 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://tudelu.com/hubfs/tester%20%282%29%20%281%29.webp)",
            }}
          ></div>
          <div
            title="Stormcloud"
            className="w-8 h-8 mx-2 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://tudelu.com/hubfs/Cool%20grey%20Swatch.png)",
            }}
          ></div>
          <div
            title="Sand"
            className="w-8 h-8 mx-2 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: "url(https://tudelu.com/hubfs/Parchment.png)",
            }}
          ></div>
        </div>

        <div className="flex justify-center mt-4 text-center text-lg font-semibold">
          <a href="/closure">
            Closure <br /> Series
          </a>
        </div>

        <div className="flex flex-col items-center justify-center mt-6 space-y-3">
          <a
            href="/instant-estimate"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full"
          >
            Estimate
          </a>
          <a
            href="/closure"
            aria-label="Read more about Closure Policies"
            className="text-black underline hover:text-gray-800"
          >
            Read More
          </a>
        </div> */}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#ff5100]">
          {closure.title} Series
        </h2>
        <p className="py-4">{wallSystems[0].description}</p>
      </div>

      
    </div>
  );
}
