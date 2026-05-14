import Image from "next/image";
import styles from "./home-page.module.css";
import {
  assets,
  highlights,
  navigationItems,
  partnerLogos,
  serviceCards,
  stats,
} from "./home-page.data";

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.5 19c1.7-3 4-4.5 6.5-4.5S16.8 16 18.5 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M6.5 9.5h11l-1 9h-9l-1-9Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 10V8.5a3 3 0 0 1 6 0V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="10.5" cy="10.5" r="4.75" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m14 14 4.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function HomePage() {
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
              Soluzioni per identificazione automatica, tracciabilità e mobilità
              industriale
            </h1>

            <div className={styles.heroMeta}>
              <p className={styles.metaText}>
                Gestiamo una magazzino di 100.000+ stock
              </p>
            </div>

            <a className={styles.primaryCta} href="#servizi">
              Scopri le soluzioni
            </a>
          </div>
        </div>

        <div
          className={styles.heroMedia}
          style={{ backgroundImage: `url(${assets.heroImage})` }}
        >
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
