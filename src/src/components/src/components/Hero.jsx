import React from "react";
import { dict } from "../i18n";
import HeroSlider from "./HeroSlider";

export default function Hero({ lang="tr" }){
  const t = dict[lang] || dict.tr;
    // slider images passed from assets in home — but Hero can render fallback if none
      return (
          <section className="hero-wrap" id="home" role="banner" aria-labelledby="hero-title">
                <div className="hero-left">
                        <h1 id="hero-title">{t.heroTitle}</h1>
                                <p className="hero-sub">{t.heroSubtitle}</p>
                                        <div className="hero-ctas">
                                                  <a className="btn primary" href="#products">{t.ctaContact}</a>
                                                            <a className="btn ghost" href="#about">Hakkımızda</a>
                                                                    </div>
                                                                          </div>

                                                                                <div>
                                                                                        <HeroSlider />
                                                                                              </div>
                                                                                                  </section>
                                                                                                    );
                                                                                                    }