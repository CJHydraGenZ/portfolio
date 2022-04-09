import React from "react";
import Link from "next/link";
import Image from "next/image";
export const Blog = () => {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Tulisan Terkini
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
        {/* <img src="" alt="" srcset="" /> */}
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 ima">
              {/* <img
                // loader={() => "https://source.unsplash.com/360x200?programming"}
                src="https://source.unsplash.com/360x200?programming"
                alt="Programing"
                className="w-full"
                // layout="responsive"
                // layout="fill"
                // objectFit="contain"
              /> */}
              {/* <br /> */}

              <Image
                loader={() => "https://source.unsplash.com/360x200?programming"}
                src="https://source.unsplash.com/360x200?programming"
                alt="Programing"
                className="w-full"
                layout="fill"
              />

              <div className="py-8 px-6 ">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                      Tips Belajar Programing
                    </a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  facilis.
                </p>
                <Link href="#">
                  <a className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-lg hover:opacity-80">
                    Baca Selengkapnya
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 ima">
              {/* <img
                // loader={() => "https://source.unsplash.com/360x200?programming"}
                src="https://source.unsplash.com/360x200?programming"
                alt="Programing"
                className="w-full"
                // layout="responsive"
                // layout="fill"
                // objectFit="contain"
              /> */}
              {/* <br /> */}

              <Image
                loader={() => "https://source.unsplash.com/360x200?trading"}
                src="https://source.unsplash.com/360x200?trading"
                alt="Trading"
                className="w-full"
                layout="fill"
              />

              <div className="py-8 px-6 ">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                      Tips Analisa Trading
                    </a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  facilis.
                </p>
                <Link href="#">
                  <a className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-lg hover:opacity-80">
                    Baca Selengkapnya
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 ima">
              {/* <img
                // loader={() => "https://source.unsplash.com/360x200?programming"}
                src="https://source.unsplash.com/360x200?programming"
                alt="Programing"
                className="w-full"
                // layout="responsive"
                // layout="fill"
                // objectFit="contain"
              /> */}
              {/* <br /> */}

              <Image
                loader={() => "https://source.unsplash.com/360x200?coffee"}
                src="https://source.unsplash.com/360x200?coffee"
                alt="Coffee"
                className="w-full"
                layout="fill"
              />

              <div className="py-8 px-6 ">
                <h3>
                  <Link href="#">
                    <a className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                      Ngopi Woeee
                    </a>
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  facilis.
                </p>
                <Link href="#">
                  <a className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-lg hover:opacity-80">
                    Baca Selengkapnya
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
