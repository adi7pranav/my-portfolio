"use client";

import Image from "next/image";

export default function PaintingsSection() {

  const paintings = [
    "/painting-3.jpg",
    "/painting-2.jpg",
    "/painting-1.jpg",
    "/painting1.jpg",
    "/painting2.jpg",
    "/painting3.jpg",
    "/painting4.jpg",
    "/painting5.png",
    "/painting6.png",
  ];

  return (
    <section className="w-full py-12 mt-12">

      <div className="container mx-auto px-6 lg:px-12 text-center">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          My Paintings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {paintings.map((src, i) => (

            <div
              key={i}
              className="relative aspect-square rounded-xl
              bg-white/20 dark:bg-white/10
              border border-white/20 shadow-lg
              flex items-center justify-center
              p-6 hover:scale-[1.03] transition"
            >

              <Image
                src={src}
                alt={`Painting ${i}`}
                width={320}
                height={320}
                className="object-contain max-h-full max-w-full rounded-md shadow-md"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
