// ================================
//  DİL VERİ TABANI
// ================================
const translations = {
    tr: {
            home: "Ana Sayfa",
                    about: "Hakkımızda",
                            products: "Ürünler",
                                    services: "Hizmetler",
                                            projects: "Projeler",
                                                    certificates: "Sertifikalar",
                                                            contact: "İletişim",

                                                                    hero_title: "Atlantik Nuts",
                                                                            hero_sub: "Premium Kuruyemiş – Global Tedarik"
                                                                                },

                                                                                    en: {
                                                                                            home: "Home",
                                                                                                    about: "About Us",
                                                                                                            products: "Products",
                                                                                                                    services: "Services",
                                                                                                                            projects: "Projects",
                                                                                                                                    certificates: "Certificates",
                                                                                                                                            contact: "Contact",

                                                                                                                                                    hero_title: "Atlantik Nuts",
                                                                                                                                                            hero_sub: "Premium Nuts – Global Supply"
                                                                                                                                                                },

                                                                                                                                                                    es: {
                                                                                                                                                                            home: "Inicio",
                                                                                                                                                                                    about: "Sobre Nosotros",
                                                                                                                                                                                            products: "Productos",
                                                                                                                                                                                                    services: "Servicios",
                                                                                                                                                                                                            projects: "Proyectos",
                                                                                                                                                                                                                    certificates: "Certificados",
                                                                                                                                                                                                                            contact: "Contacto",

                                                                                                                                                                                                                                    hero_title: "Atlantik Nuts",
                                                                                                                                                                                                                                            hero_sub: "Frutos Secos Premium – Suministro Global"
                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                    ar: {
                                                                                                                                                                                                                                                            home: "الصفحة الرئيسية",
                                                                                                                                                                                                                                                                    about: "معلومات عنا",
                                                                                                                                                                                                                                                                            products: "المنتجات",
                                                                                                                                                                                                                                                                                    services: "الخدمات",
                                                                                                                                                                                                                                                                                            projects: "المشاريع",
                                                                                                                                                                                                                                                                                                    certificates: "الشهادات",
                                                                                                                                                                                                                                                                                                            contact: "اتصل بنا",

                                                                                                                                                                                                                                                                                                                    hero_title: "Atlantik Nuts",
                                                                                                                                                                                                                                                                                                                            hero_sub: "مكسرات فاخرة – توريد عالمي"
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                };


                                                                                                                                                                                                                                                                                                                                // ================================
                                                                                                                                                                                                                                                                                                                                //  DİL DEĞİŞTİRME FONKSİYONU
                                                                                                                                                                                                                                                                                                                                // ================================
                                                                                                                                                                                                                                                                                                                                function setLanguage(lang) {
                                                                                                                                                                                                                                                                                                                                    localStorage.setItem("site-lang", lang);
                                                                                                                                                                                                                                                                                                                                        applyLanguage();
                                                                                                                                                                                                                                                                                                                                        }


                                                                                                                                                                                                                                                                                                                                        // ================================
                                                                                                                                                                                                                                                                                                                                        //  DİLLERİ HTML ÜZERİNE UYGULA
                                                                                                                                                                                                                                                                                                                                        // ================================
                                                                                                                                                                                                                                                                                                                                        function applyLanguage() {
                                                                                                                                                                                                                                                                                                                                            const lang = localStorage.getItem("site-lang") || "tr";
                                                                                                                                                                                                                                                                                                                                                const elements = document.querySelectorAll("[data-lang]");

                                                                                                                                                                                                                                                                                                                                                    elements.forEach(el => {
                                                                                                                                                                                                                                                                                                                                                            const key = el.getAttribute("data-lang");
                                                                                                                                                                                                                                                                                                                                                                    el.textContent = translations[lang][key];
                                                                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                        document.addEventListener("DOMContentLoaded", applyLanguage);