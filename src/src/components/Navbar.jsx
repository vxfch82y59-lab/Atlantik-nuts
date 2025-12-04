import React from "react";
import logo from "../assets/logo-small.svg";
import { dict } from "../i18n";

export default function Navbar({ lang="tr", setLang=()=>{} }){
  const t = dict[lang] || dict.tr;
    return (
        <header className="navbar" role="navigation" aria-label="Main Navigation">
              <div className="navbar-inner">
                      <div className="brand">
                                <img src={logo} alt="Atlantik Nuts logo" />
                                          <div className="brand-title">Atlantik Nuts</div>
                                                  </div>

                                                          <nav className="nav-links" aria-label="Primary">
                                                                    <a href="#home">{t.navHome}</a>
                                                                              <a href="#products">{t.navProducts}</a>
                                                                                        <a href="#contact">{t.navContact}</a>
                                                                                                </nav>

                                                                                                        <div style={{display:"flex",alignItems:"center",gap:10}}>
                                                                                                                  <select className="lang-select" value={lang} onChange={(e)=>setLang(e.target.value)} aria-label="Dil seçimi">
                                                                                                                              <option value="tr">TR</option>
                                                                                                                                          <option value="en">EN</option>
                                                                                                                                                      <option value="es">ES</option>
                                                                                                                                                                  <option value="fr">FR</option>
                                                                                                                                                                            </select>
                                                                                                                                                                                      <a className="btn primary" href="#contact">Sipariş</a>
                                                                                                                                                                                              </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                        </header>
                                                                                                                                                                                                          );
                                                                                                                                                                                                          }