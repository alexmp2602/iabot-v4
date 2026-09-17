import { ArrowUpRight, ArrowDown, Blocks } from "lucide-react";
import { SectionLink } from "@/components/site/section-link";

export function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" /> TECNOLOGÍA QUE SE APRENDE HACIENDO
        </div>
        <h1>
          De “¿y si…?”
          <br />a <span>“¡lo hice!”</span>
        </h1>
        <p className="hero-description">
          Robótica, programación y diseño para chicos y jóvenes. Un lugar para
          convertir la curiosidad en algo que pueden construir.
        </p>
        <div className="hero-actions">
          <SectionLink href="#talleres" className="button">
            Encontrá su taller <ArrowUpRight size={20} />
          </SectionLink>
          <SectionLink href="#metodologia" className="text-link">
            Conocé IABOT <ArrowDown size={17} />
          </SectionLink>
        </div>
        <div className="hero-facts">
          <span>
            Desde los <strong>5 años</strong>
          </span>
          <span>Presencial y virtual</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo">
          <img
            src="/images/milo.webp"
            srcSet="/images/milo-small.webp 480w, /images/milo.webp 1200w"
            sizes="(max-width: 760px) 100vw, 48vw"
            alt="Robot LEGO WeDo construido junto a una tablet con su programa"
            width="1200"
            height="1000"
            fetchPriority="high"
          />
          <div className="photo-caption">
            <span>IDEAS QUE SE MUEVEN</span>
            <span>Robótica con LEGO®</span>
          </div>
        </div>
        <div className="hero-label">
          <Blocks size={23} />
          <div>
            Lo construyen.
            <br />
            <strong>Y lo hacen funcionar.</strong>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          IMAGINAR / CREAR / PROBAR
        </div>
      </div>
    </section>
  );
}
