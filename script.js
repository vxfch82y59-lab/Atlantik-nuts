:root{
      --bg:#f2efe9;
        --dark:#0f1112;
          --muted-text: #bfc6c3;
            --accent: #2f8f3b;
              --max-w:1200px;
                --header-h:64px;
                  --mobile-break: 960px;
                  }

                  *{box-sizing:border-box}
                  html,body{height:100%; margin:0; font-family:'Poppins',system-ui,-apple-system,Segoe UI,Roboto,Arial;background:var(--bg); color:#10202a;}
                  .container{max-width:var(--max-w); margin:0 auto; padding:0 18px;}

                  /* HEADER */
                  .site-header{
                    position:fixed; top:0; left:0; right:0; height:var(--header-h); z-index:2000;
                      display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg, rgba(15,17,18,0.02), rgba(255,255,255,0.6));
                        backdrop-filter: blur(6px); border-bottom:1px solid rgba(16,32,42,0.04);
                        }
                        .hambtn{
                          position:absolute; left:18px; top:50%; transform:translateY(-50%);
                            width:42px; height:38px; background:transparent; border:0; cursor:pointer;
                              display:flex; flex-direction:column; justify-content:center; align-items:center;
                              }
                              .hambtn span{display:block; width:22px; height:2px; background:#333; margin:5px 0; transition:all .25s ease;}
                              .logo{font-weight:700; font-size:18px; letter-spacing:.6px; color:var(--dark); text-align:center;}
                              .logo .muted{font-weight:300; color:rgba(0,0,0,0.45); margin-left:6px;}

                              /* OFFCANVAS MENU (SOUTH365 STYLE) */
                              .offcanvas{
                                position:fixed; left:-100%; top:0; bottom:0; width:320px; max-width:86%; background:#0d0d0d; color:#e6e6e6;
                                  transition:transform .36s cubic-bezier(.2,.9,.3,1); transform:translateX(-100%); z-index:2100;
                                    padding:80px 20px 40px; overflow-y:auto;
                                    }
                                    .offcanvas.open{transform:translateX(100%); left:0;}

                                    /* menu list */
                                    .off-list{list-style:none; margin:0; padding:0;}
                                    .off-list li{padding:18px 8px; border-bottom:1px solid rgba(255,255,255,0.04);}
                                    .off-link{color:#e6e6e6; text-decoration:none; font-size:18px; display:block; padding:6px 0;}
                                    .divider{height:18px; border-top:1px solid rgba(255,255,255,0.06); margin:12px 0;}

                                    /* LANG */
                                    .lang-item{padding:10px 0;}
                                    .lang-btn{background:none; border:1px solid rgba(255,255,255,0.06); color:#e6e6e6; padding:8px 10px; border-radius:6px; cursor:pointer; font-size:14px; width:100%; text-align:left;}

                                    /* HERO */
                                    .hero-section{min-height:calc(100vh - var(--header-h)); margin-top:var(--header-h); position:relative; overflow:hidden; display:flex; align-items:center;}
                                    .hero-slider{position:absolute; inset:0;}
                                    .hero-slide{position:absolute; inset:0; background-size:cover; background-position:center; opacity:0; transform:scale(1.03); transition:opacity .9s ease, transform .9s ease; will-change:opacity, transform;}
                                    .hero-slide.active{opacity:1; transform:scale(1);}
                                    .hero-content{position:relative; z-index:3; padding:48px 18px; max-width:1100px; color:#fff;}
                                    .hero-title{font-size:42px; margin:0 0 8px; color:#fff; text-shadow:0 12px 30px rgba(7,14,30,0.45); font-weight:800;}
                                    .hero-sub{font-size:16px; margin:0 0 18px; color:rgba(255,255,255,0.9);}
                                    .hero-cta{display:flex; gap:12px;}
                                    .btn{padding:10px 16px; border-radius:10px; cursor:pointer; border:0; font-weight:700;}
                                    .btn.primary{background:linear-gradient(90deg,var(--accent), #2e9b4a); color:#fff;}
                                    .btn.ghost{background:rgba(255,255,255,0.12); color:#fff;}

                                    /* HERO CIRCLE */
                                    .hero-circle{position:absolute; bottom:40px; left:50%; transform:translateX(-50%); width:160px; height:160px; border-radius:50%; overflow:hidden; box-shadow:0 18px 40px rgba(2,8,15,0.2); background:#eee center/cover no-repeat; opacity:0; transform-origin:center; transition:opacity .6s ease, transform .6s ease;}
                                    .hero-circle.loaded{opacity:1; transform:translateX(-50%) scale(1);}

                                    /* PAGE SECTIONS */
                                    .page{padding:72px 0; background:var(--bg); min-height:60vh; display:none;}
                                    .page--active{display:block;}
                                    .container{padding:0 18px;}

                                    /* CIRCULAR IMAGES */
                                    .circle{width:140px; height:140px; border-radius:50%; overflow:hidden; background:#eee center/cover no-repeat; display:inline-block; transition:transform .4s ease, opacity .45s ease; box-shadow:0 10px 30px rgba(2,8,15,0.12);}
                                    .circle.large{width:220px; height:220px;}
                                    .circle.fade{opacity:0; transform:translateY(12px) scale(.98);}
                                    .circle.loaded{opacity:1; transform:none;}

                                    /* GRID */
                                    .product-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:18px;}
                                    .product-card{text-align:center; background:transparent; border-radius:12px; padding:10px;}
                                    .prod-circle{width:120px; height:120px; margin:0 auto 8px; border-radius:50%; background:#ddd center/cover no-repeat;}

                                    /* FOOTER */
                                    .site-footer{padding:28px 0; text-align:center; color:#5b6b7a; background:transparent;}

                                    /* Utilities & responsive tweaks */
                                    .hidden{display:none !important;}
                                    .fade-in{opacity:0; transform:translateY(14px); animation:fadeUp .7s ease forwards;}
                                    @keyframes fadeUp{to{opacity:1; transform:none;}}

                                    @media(max-width:960px){
                                      .product-grid{grid-template-columns:repeat(2,1fr);}
                                        .hero-title{font-size:28px;}
                                          .hero-sub{font-size:15px;}
                                          }
}