import { useState, useEffect } from "react";

export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
              setCurrent((prev) => (prev + 1) % slides.length);
                  }, 4000);
                      return () => clearInterval(timer);
                        }, [slides.length]);

                          return (
                              <div className="relative w-full h-[80vh] overflow-hidden">
                                    {slides.map((slide, index) => (
                                            <div
                                                      key={index}
                                                                className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                                                                            current === index ? "opacity-100" : "opacity-0"
                                                                                      }`}
                                                                                              >
                                                                                                        <img
                                                                                                                    src={slide.src}
                                                                                                                                alt={slide.alt}
                                                                                                                                            className="w-full h-full object-cover"
                                                                                                                                                      />

                                                                                                                                                                {/* Dark overlay */}
                                                                                                                                                                          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                                                                                                                                                                                    {/* Text */}
                                                                                                                                                                                              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 lg:w-1/2">
                                                                                                                                                                                                          <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                                                                                                                                                                                                                        {slide.captionTitle}
                                                                                                                                                                                                                                    </h2>
                                                                                                                                                                                                                                                <p className="text-gray-200 text-lg md:text-xl mt-4 drop-shadow-lg">
                                                                                                                                                                                                                                                              {slide.captionText}
                                                                                                                                                                                                                                                                          </p>
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                  ))}

                                                                                                                                                                                                                                                                                                        {/* Dots */}
                                                                                                                                                                                                                                                                                                              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                                                                                                                                                                                                                                                                                                      {slides.map((_, index) => (
                                                                                                                                                                                                                                                                                                                                <div
                                                                                                                                                                                                                                                                                                                                            key={index}
                                                                                                                                                                                                                                                                                                                                                        onClick={() => setCurrent(index)}
                                                                                                                                                                                                                                                                                                                                                                    className={`w-3 h-3 rounded-full cursor-pointer transition ${
                                                                                                                                                                                                                                                                                                                                                                                  index === current ? "bg-white" : "bg-gray-400"
                                                                                                                                                                                                                                                                                                                                                                                              }`}
                                                                                                                                                                                                                                                                                                                                                                                                        ></div>
                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                            }