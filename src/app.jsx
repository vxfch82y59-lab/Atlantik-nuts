import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { locales } from "./i18n";

export default function App(){
  const [lang, setLang] = useState("tr");

    return (
        <div className="site-root">
              <Navbar lang={lang} setLang={setLang} />
                    <main>
                            <Hero lang={lang} />
                                    <About lang={lang} />
                                            <Services lang={lang} />
                                                    <Projects lang={lang} />
                                                            <Contact lang={lang} />
                                                                  </main>
                                                                        <Footer />
                                                                            </div>
                                                                              );
                                                                              }