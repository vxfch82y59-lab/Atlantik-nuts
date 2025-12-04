import React, {useRef, useEffect} from "react";
import { dict } from "../i18n";

export default function About({lang="tr"}){
  const t = dict[lang] || dict.tr;
    const ref = useRef();
      useEffect(()=> {
          const el = ref.current;
              const observer = new IntersectionObserver(entries=>{
                    entries.forEach(e=> e.isIntersecting && e.target.classList.add("visible"));
                        }, {threshold:0.2});
                            if(el) observer.observe(el);
                                return ()=> observer.disconnect();
                                  },[]);
                                    return (
                                        <section ref={ref} className="section" id="about" aria-labelledby="about-title">
                                              <div className="section-title">
                                                      <h2 id="about-title">{t.aboutTitle}</h2>
                                                            </div>
                                                                  <div className="grid-3">
                                                                          <div className="card"><h3>Güvenilir Üretim</h3><p className="muted">ISO standartlı üretim, tam izlenebilirlik.</p></div>
                                                                                  <div className="card"><h3>Mühendislik Yaklaşımı</h3><p className="muted">Süreç optimizasyonu ve kalite kontrol.</p></div>
                                                                                          <div className="card"><h3>Global Lojistik</h3><p className="muted">Hızlı, güvenli sevkiyat çözümleri.</p></div>
                                                                                                </div>
                                                                                                    </section>
                                                                                                      );
                                                                                                      }