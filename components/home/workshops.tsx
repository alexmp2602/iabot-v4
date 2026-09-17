import { CourseFinder } from "@/components/site/course-finder";

export function Workshops() {
  return (
    <section id="talleres" className="section container">
      <div className="section-heading">
        <div>
          <div className="eyebrow">01 / ENCONTRÁ SU PRÓXIMO DESAFÍO</div>
          <h2>
            Una idea para
            <br />
            cada etapa.
          </h2>
        </div>
        <p>
          Desde el primer robot hasta un videojuego propio. Propuestas que
          acompañan su edad, sus intereses y sus ganas de descubrir.
        </p>
      </div>
      <CourseFinder />
    </section>
  );
}
