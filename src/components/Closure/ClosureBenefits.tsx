import { wallSystems } from "@/data/wallSystems";
import React from "react";

export default function ClosureBenefits() {
  const closure = wallSystems[0];

  return (
    <div className="page bg-white w-[500px] h-[700px] p-8 flex flex-col justify-center text-[#353535] font-sans">
      <h2 className="text-2xl font-bold mb-4 text-[#ff5100]">{closure.title} Series</h2>

      <section className="mb-6">
        <h4 className="text-lg font-semibold text-[#ff5100] mb-2">Benefits</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {closure.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-semibold text-[#ff5100] mb-2">Recommended Spaces</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {closure.recommendedSpaces.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <section className="flex justify-center flex-col mt-6 gap-4">
        <h2 className="text-lg font-semibold text-[#ff5100] mb-2">
          Available Colors
        </h2>
        <div className="flex space-x-1">
          {[
            {
              title: "Stone",
              image: "https://tudelu.com/hubfs/Mist.png",
            },
            {
              title: "Snow",
              image: "https://tudelu.com/hubfs/tester%20%282%29%20%281%29.webp",
            },
            {
              title: "Stormcloud",
              image: "https://tudelu.com/hubfs/Cool%20grey%20Swatch.png",
            },
            {
              title: "Sand",
              image: "https://tudelu.com/hubfs/Parchment.png",
            },
          ].map((color, index) => (
            <div
              key={index}
              title={color.title}
              aria-label={color.title}
              className="w-10 h-10 rounded-full bg-cover bg-center shadow-md border border-white transition-transform duration-300 hover:scale-110 hover:ring-2 hover:ring-[#ff5100]"
              style={{ backgroundImage: `url(${color.image})` }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
