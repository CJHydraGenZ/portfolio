import React from "react";
import Image from "next/image";

// import G1 from "components/assets/image/portfolio/1.png";
// import G2 from "components/assets/image/portfolio/2.png";
// import G3 from "components/assets/image/portfolio/3.png";
// import G4 from "components/assets/image/portfolio/4.png";
export const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Project terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae tempora culpa atque officia blanditiis pariatur
              repellendus perferendis voluptatem. Quae, earum quidem
              reprehenderit debitis magnam saepe ad praesentium necessitatibus
              excepturi labore.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden ima">
              <Image
                src={`/assets/image/portfolio/1.png`}
                alt="Landing page"
                className="w-full"
                // className="w-full"
                layout="fill"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Landing Page
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, a?
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden ima">
              <Image
                src={`/assets/image/portfolio/2.png`}
                alt="Landing page"
                className="w-full"
                layout="fill"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Cryptografi
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, a?
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden ima">
              <Image
                src={`/assets/image/portfolio/3.png`}
                alt="Landing page E-Commerce"
                className="w-full"
                layout="fill"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              E-Commerce
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, a?
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden ima">
              <Image
                src={`/assets/image/portfolio/4.png`}
                alt="Landing page"
                className="w-full"
                layout="fill"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Skripsi Program
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, a?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
