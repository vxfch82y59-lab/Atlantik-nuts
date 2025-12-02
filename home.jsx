import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider"

export default function Home() {
  const slides = [
      {
            image: "/slider/1.webp",
                  captionTitle: "Innovative Products",
                        captionText: "Cutting-edge technology for modern life."
                            },
                                {
                                      image: "/slider/2.webp",
                                            captionTitle: "Quality & Performance",
                                                  captionText: "Engineered for durability and excellence."
                                                      },
                                                          {
                                                                image: "/slider/3.webp",
                                                                      captionTitle: "Smart & Stylish",
                                                                            captionText: "Design that fits your lifestyle."
                                                                                }
                                                                                  ];

                                                                                    return (
                                                                                        <>
                                                                                            <div className="w-full h-full flex flex-col items-center">

                                                                                                {/* HERO SLIDER */}
                                                                                                    <div className="w-full max-w-7xl mt-4">
                                                                                                          <HeroSlider />
                                                                                                              </div>

                                                                                                                  {/* ALT KISIM — Geçici içerik */}
                                                                                                                      <div className="w-full max-w-7xl px-4 py-12 text-center">
                                                                                                                            <h2 className="text-3xl font-semibold mb-4">Atlantik Nuts</h2>
                                                                                                                                  <p className="text-gray-600 text-lg">
                                                                                                                                          Premium Ceviz & Kuru Yemiş Tedarikçisi — 17 Yıllık Tecrübe
                                                                                                                                                </p>
                                                                                                                                                    </div>

                                                                                                                                                      </div>
                                                                                                                                                      );
                                                                                        )
                                                                                              <HeroSlider slides={slides} />

                                                                                                    <div className="page-content">
                                                                                                            <h1>Hoş Geldiniz</h1>
                                                                                                                    <p>Buraya kendi içeriklerinizi ekleyebilirsiniz.</p>

                                                                                                                            {/* Örneğin ürün listeleme veya tanıtım kutuları */}
                                                                                                                                    <div style={{ marginTop: "40px" }}>
                                                                                                                                              <p>Diğer sayfa bileşenleri buraya gelecek.</p>
                                                                                                                                                      </div>
                                                                                                                                                            </div>
                                                                                                                                                                </>
                                                                                                                                                                  );
                                                                                                                                                                  }