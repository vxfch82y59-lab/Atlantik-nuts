import React, {useRef, useEffect, useState} from "react";
import gsap from "gsap";
import img1 from "../assets/IMG_5417.jpeg";
import img2 from "../assets/IMG_5416.jpeg";
import img3 from "../assets/IMG_6861.jpeg";

const slides = [img1, img2, img3];

export default function HeroSlider(){
  const [idx, setIdx] = useState(0);
    const elRef = useRef(null);

      useEffect(()=>{
          const ctx = gsap.context(()=>{
                gsap.fromTo(".hs-caption", {y:20, autoAlpha:0}, {y:0, autoAlpha:1, duration:0.9, stagger:0.08});
                    }, elRef);

                        const id = setInterval(()=> setIdx(i => (i+1) % slides.length), 4500);
                            return ()=> { clearInterval(id); ctx.revert(); };
                              },[]);

                                return (
                                    <div ref={elRef} className="hero-image-wrapper" aria-hidden="false">
                                          <img src={slides[idx]} alt={`slide ${idx+1}`} className="hero-image hs-slide" />
                                                <div style={{position:"absolute", bottom:14, left:14, color:"rgba(255,255,255,0.85)"}} className="hs-caption">
                                                        <strong>17 Years</strong> — Global Export
                                                              </div>
                                                                    <div style={{position:"absolute", bottom:12, right:12, display:"flex", gap:8}}>
                                                                            {slides.map((s,i)=>(
                                                                                      <button key={i} aria-label={`slide ${i+1}`} className={"dot " + (i===idx ? "active": "")} onClick={()=>setIdx(i)} />
                                                                                              ))}
                                                                                                    </div>
                                                                                                        </div>
                                                                                                          );
                                                                                                          }