import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero1.png')",
      }}
    >
      <div className="text-center text-white bg-black/50 p-6 rounded-xl">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Perfect Wedding
        </h1>

        <p className="text-lg md:text-xl">
          Discover venues, photographers & more
        </p>


        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          {/* Couples CTA */}
          <Link
            to="/vendors"
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-rose-400 to-pink-500 text-sm font-semibold text-white  shadow-rose-200/60 transition hover:from-rose-500 hover:to-pink-500 px-7 py-3 white shadow-[0_10px_30px_rgba(222,141,125,0.35)]  duration-300 hover:scale-105"
          >
            Find Vendors

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Vendor CTA */}
          <Link
            to="/vendor-register"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            Join as Vendor

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;