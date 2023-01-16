import React from "react";
import { motion as m } from "framer-motion";
import { container, item } from "../../animation.js";
import Head from "next/head.js";

export default function contact() {
  const links = {
    Mail: "mailto:sol.maldonado.0209@gmail.com",
    Instagram: "",
    LinkedIn: "https://www.linkedin.com/in/sol-maldonado-fullstack/",
    GitHub: "https://github.com/solch4",
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <m.main
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
      >
        <div className="my-96 p-1 overflow-hidden">
          <m.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-right lg:text-9xl"
          >
            Let&apos;s talk
          </m.h1>
        </div>
        <div className="flex gap-40">
          <div className="lg:text-2xl text-base">
            <h4>Find me;</h4>
          </div>
          <div className="lg:text-5xl text-2xl underline">
            <m.ul variants={container} initial="hidden" animate="show">
              {Object.keys(links).map((link, i) => (
                <div key={i} className="overflow-hidden">
                  <m.li variants={item} className="pb-2">
                    <a href={links[link]} target="_blank" rel="noreferrer">
                      {link}
                    </a>
                  </m.li>
                </div>
              ))}
            </m.ul>
          </div>
        </div>
      </m.main>
    </>
  );
}