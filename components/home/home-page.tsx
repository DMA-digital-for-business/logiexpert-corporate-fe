"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./home-page.module.css";
import {
  assets,
  highlights,
  partnerLogos,
  serviceCards,
  stats,
} from "./home-page.data";

export function HomePage() {
  const heroMediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = heroMediaRef.current;
    if (!media) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");

    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      if (reducedMotion.matches || !desktop.matches) {
        media.style.setProperty("--hero-parallax-y", "0px");
        return;
      }

      const rect = media.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const offset = (clampedProgress - 0.5) * 160;

      media.style.setProperty("--hero-parallax-y", `${offset.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    desktop.addEventListener("change", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      desktop.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoFrame}>
            <Image
              alt="LogiExpert"
              className={styles.logoArt}
              src={assets.logo}
              width={1184}
              height={864}
              priority
            />
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Soluzioni per l&apos;identificazione automatica, tracciabilità e
              mobilità
              industriale
            </h1>

            <div className={styles.heroMeta}>
              <p className={styles.metaText}>
                Gestiamo un magazzino di 100.000+ stock
              </p>
            </div>

            <a className={styles.primaryCta} href="#servizi">
              Scopri le soluzioni
            </a>
          </div>
        </div>

        <div
          className={styles.heroMedia}
          ref={heroMediaRef}
        >
          <div
            aria-hidden="true"
            className={styles.heroMediaLayer}
            style={{ backgroundImage: `url(${assets.heroImage})` }}
          />
          <div className={styles.heroBadges}>
            {highlights.map((item) => (
              <div className={styles.heroBadge} key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.sectionWidth} ${styles.partnerSection}`}>
        <h2 className={styles.sectionTitle}>Lavoriamo con</h2>
        <div className={styles.partnerRail}>
          {partnerLogos.map((partner) => (
            <div className={styles.partnerCard} key={partner.name}>
              <Image
                alt={partner.label}
                className={styles.partnerLogoImage}
                data-brand={partner.name}
                src={partner.image}
                width={partner.width}
                height={partner.height}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.servicesSection} id="servizi">
        <h2 className={styles.sectionTitle}>Servizi su misura</h2>
        <div className={styles.serviceViewport}>
          <div className={styles.serviceRail}>
            {serviceCards.map((card) => (
              <article
                className={styles.serviceCard}
                key={card.title}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className={styles.serviceCardInner}>
                  <h3 className={styles.serviceTitle}>{card.title}</h3>
                  <p className={styles.serviceDescription}>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.sectionWidth} ${styles.storySection}`}>
        <div className={styles.storyBox}>
          <h2 className={styles.storyTitle}>
            Non solo prodotti. Un modo più semplice per acquistare soluzioni
            complesse.
          </h2>
          <p className={styles.storyBody}>
            Logiexpert sta costruendo un ecosistema digitale pensato per
            aiutare aziende e uffici acquisti a trovare più rapidamente il
            prodotto corretto, gli accessori necessari, i consumabili
            compatibili e i servizi collegati. Un’esperienza B2B più chiara,
            guidata e affidabile.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <article className={styles.statCard} key={stat.value}>
              <span
                aria-hidden="true"
                className={styles.statShapeBox}
                style={
                  {
                    "--shape-box-width": `${stat.shape.boxWidth}px`,
                    "--shape-box-height": `${stat.shape.boxHeight}px`,
                    "--shape-inner-width": `${stat.shape.innerWidth}px`,
                    "--shape-inner-height": `${stat.shape.innerHeight}px`,
                    "--shape-left": `${stat.shape.left}px`,
                    "--shape-top": `${stat.shape.top}px`,
                    "--shape-rotate": `${stat.shape.rotate}deg`,
                  } as React.CSSProperties
                }
              >
                <span
                  className={styles.statShape}
                  style={{ backgroundImage: `url(${stat.shape.image})` }}
                />
              </span>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerContent}>
            <div>
              <p className={styles.footerAddress}>
                LogiExpert S.r.l.
                <br />
                Viale Sarca 336/F, Edificio 16, 20126 Milano
                <br />
                P.IVA/VAT IT09900890964
                <br/>
                Mobile: <a href="tel:+393335067113">+39 333 5067113</a>
                <br/>
                Telefono: <a href="tel:+390280898867">+39 02 80898867</a>
                <br/>
                Email: <a href="mailto:info@logiexpert.com">info@logiexpert.com</a>
              </p>
            </div>
            <div className={styles.footerBrandRight}>
              <div className={styles.footerLogoFrame}>
                <Image
                  alt="LogiExpert"
                  className={styles.footerLogoArt}
                  src={assets.logo}
                  width={1184}
                  height={864}
                />
              </div>
            </div>
          </div>

          <div className={styles.footerDivider} />
          <p className={styles.copyright}>© Copyright LogiExpert 2026</p>
        </div>
      </footer>
    </main>
  );
}
