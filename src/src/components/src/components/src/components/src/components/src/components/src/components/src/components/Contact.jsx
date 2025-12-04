import React from "react";

export default function Contact(){
  return (
      <section className="section" id="contact" aria-labelledby="contact-title">
            <div className="section-title"><h2 id="contact-title">İletişim</h2></div>
                  <div style={{display:"flex",gap:18,flexWrap:"wrap"}}>
                          <div style={{flex:1,minWidth:260}}>
                                    <div className="card">
                                                <h3>Ofis & Fabrika</h3>
                                                            <p className="muted">Adres: Karayolu Üzeri, Üretim Bölgesi</p>
                                                                        <p className="muted">Telefon: +56 9 0000 0000</p>
                                                                                    <p className="muted">Eposta: info@atlantiknuts.cl</p>
                                                                                              </div>
                                                                                                      </div>

                                                                                                              <div style={{flex:1,minWidth:300}}>
                                                                                                                        <form className="card contact-form" onSubmit={(e)=>{ e.preventDefault(); alert('Mesajınız alındı. Teşekkürler!'); }}>
                                                                                                                                    <input placeholder="Adınız *" required />
                                                                                                                                                <input placeholder="E-posta *" required />
                                                                                                                                                            <textarea placeholder="Mesajınız *" required rows="5" />
                                                                                                                                                                        <div style={{display:"flex",gap:10,marginTop:8}}>
                                                                                                                                                                                      <button className="btn primary" type="submit">Gönder</button>
                                                                                                                                                                                                    <button className="btn ghost" type="reset">Temizle</button>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                          </form>
                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                              }