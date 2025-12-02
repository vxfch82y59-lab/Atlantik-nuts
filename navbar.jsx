export default function Navbar() {
      return (
          <nav style={{
                width: "100%",
                      height: "70px",
                            display: "flex",
                                  justifyContent: "space-between",
                                        alignItems: "center",
                                              padding: "0 20px",
                                                    background: "rgba(0,0,0,0.6)",
                                                          backdropFilter: "blur(8px)",
                                                                position: "fixed",
                                                                      top: 0,
                                                                            left: 0,
                                                                                  zIndex: 1000,
                                                                                        color: "#fff"
                                                                                            }}>
                                                                                                  
                                                                                                        {/* Logo */}
                                                                                                              <div style={{ fontSize: "22px", fontWeight: "700" }}>
                                                                                                                      ATLANTIK NUTS
                                                                                                                            </div>

                                                                                                                                  {/* Links */}
                                                                                                                                        <div style={{ display: "flex", gap: "20px", fontSize: "16px" }}>
                                                                                                                                                <a style={link}>Home</a>
                                                                                                                                                        <a style={link}>Hakkımızda</a>
                                                                                                                                                                <a style={link}>Ürünler</a>
                                                                                                                                                                        <a style={link}>İletişim</a>
                                                                                                                                                                              </div>
                                                                                                                                                                                  </nav>
                                                                                                                                                                                    );
                                                                                                                                                                                    }

                                                                                                                                                                                    const link = {
                                                                                                                                                                                      cursor: "pointer",
                                                                                                                                                                                        opacity: 0.85,
                                                                                                                                                                                          transition: "0.3s",
                                                                                                                                                                                            textDecoration: "none",
                                                                                                                                                                                              color: "#fff"
                                                                                                                                                                                              };
}