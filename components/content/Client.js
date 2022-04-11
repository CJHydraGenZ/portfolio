import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Google from "components/assets/image/clients/google2.svg";
// import Discord from "components/assets/image/clients/discord.svg";
// import Binance from "components/assets/image/clients/binance.svg";
// import Tokopedia from "components/assets/image/clients/tokopedia.svg";

export const Client = () => {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Yang Pernah Berkerja Sama
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

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 ima">
                <Image
                  src={`/assets/image/clients/google2.svg`}
                  layout="fill"
                  alt="google"
                />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 ima">
                <Image
                  src={`/assets/image/clients/discord.svg`}
                  alt="discord"
                  layout="fill"
                />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 ima">
                <Image
                  src={`/assets/image/clients/tokopedia.svg`}
                  alt="tokopedia"
                  layout="fill"
                />
              </a>
            </Link>
            <Link href="#">
              <a className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 ima">
                <Image
                  src={`/assets/image/clients/binance.svg`}
                  alt="binance"
                  layout="fill"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
