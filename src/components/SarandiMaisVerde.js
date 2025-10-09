import React from "react";
import styles from "./SarandiMaisVerde.module.css";
import heroBg from "../assets/hero-bg.jpg";
import retomadaLogo from "../assets/retomadabr-horizontal-03.png";
import {
  FaLeaf,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBook,
  FaUserPlus,
  FaArrowRight,
} from "react-icons/fa";
import { BsFillTreeFill, BsDropletFill } from "react-icons/bs";
import { GiPlantRoots, GiGreenhouse } from "react-icons/gi";

export default function SarandiMaisVerde() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Formação
            <br /> Sarandi Mais Verde
          </h1>
          <p className={styles.heroSubtitle}>
            Agentes de Biodiversidade Urbana
          </p>
          <button className={styles.button}>
            <a
              href="https://forms.gle/uaAcbsipA2HQ6myf6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonLink}
            >
              <span>Inscreva-se Agora</span>
              <FaArrowRight className={styles.buttonIcon} />
            </a>
          </button>
          <p className={styles.heroText}>
            As inscrições já estão abertas!
            <br /> Preencha o formulário e participe da formação como um
            verdadeiro Agente de Biodiversidade Urbana, contribuindo para
            transformar o bairro Sarandi.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaLeaf className={styles.sectionIcon} />
          <span>Sobre a Formação</span>
        </h2>
        <p>
          A Formação{" "}
          <strong>Sarandi Mais Verde – Agentes de Biodiversidade Urbana</strong>{" "}
          capacita participantes para planejar, implantar e cuidar de espaços
          verdes urbanos, promovendo biodiversidade, resiliência climática e
          engajamento comunitário. São aulas teóricas e práticas sobre ecologia
          urbana, solo, vegetação, árvores, água e a técnica de Floresta
          Miyawaki.
        </p>
      </section>

      {/* Schedule Section */}
      <section className={styles.scheduleSection}>
        <h2 className={styles.sectionTitle}>
          <FaCalendarAlt className={styles.sectionIcon} />
          <span>Programação das Aulas</span>
        </h2>
        <div className={styles.scheduleGrid}>
          {[
            {
              date: "18/10",
              title: "Módulo 0 – Integração na Paisagem",
              icon: FaLeaf,
            },
            {
              date: "26/10",
              title: "Módulo 1 – Solo e Botânica",
              icon: GiPlantRoots,
            },
            {
              date: "01/11",
              title: "Módulo 2 – Biodiversidade e Horta",
              icon: GiGreenhouse,
            },
            {
              date: "08/11",
              title: "Módulo 3 – Árvores – Identificação e Mapeamento",
              icon: BsFillTreeFill,
            },
            {
              date: "16/11",
              title: "Módulo 3 – Árvores – Poda e Manejo",
              icon: BsFillTreeFill,
            },
            {
              date: "22/11",
              title: "Módulo 4 – Água e Jardins de Chuva",
              icon: BsDropletFill,
            },
            {
              date: "29/11",
              title: "Módulo 5 – Floresta Miyawaki – Preparo do Solo",
              icon: GiPlantRoots,
            },
            {
              date: "30/11",
              title: "Módulo 5 – Floresta Miyawaki – Plantio",
              icon: BsFillTreeFill,
            },
            {
              date: "06/12",
              title: "Festival Sarandi Mais Verde – Encerramento da Formação",
              icon: FaLeaf,
            },
          ].map((item) => (
            <div key={item.date} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  {React.createElement(item.icon, {
                    className: styles.moduleIcon,
                  })}
                </div>
                <h3 className={styles.cardTitle}>{item.date}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaMapMarkerAlt className={styles.sectionIcon} />
          <span>Locais da Formação</span>
        </h2>
        <div>
          <p>
            <strong>Aulas práticas:</strong> Praça Oliveira Rolim – Sarandi,
            Porto Alegre – RS, 91120-270 (local piloto para intervenções de
            resiliência climática).
          </p>
          <p>
            <strong>Aulas teóricas:</strong> Local a confirmar – será informado
            no grupo de WhatsApp do projeto <em>Sarandi Mais Verde</em>, junto
            aos professores e alunos.
          </p>
        </div>
      </section>

      {/* Library Section */}
      <section className={styles.section} id="biblioteca">
        <h2 className={styles.sectionTitle}>
          <FaBook className={styles.sectionIcon} />
          <span>Biblioteca Sarandi Mais Verde</span>
        </h2>
        <p>
          A <strong>Biblioteca Verde</strong> está sendo organizada e em breve
          reunirá livros e materiais produzidos por professores e pela
          comunidade do Sarandi.
        </p>
      </section>

      {/* Enrollment Section */}
      <section className={styles.section} id="inscricao">
        <h2 className={styles.sectionTitle}>
          <FaUserPlus className={styles.sectionIcon} />
          <span>Inscrições</span>
        </h2>
        <p>
          As inscrições para a Formação Sarandi Mais Verde estão abertas!
          <br /> Preencha o formulário no link abaixo e participe como um
          verdadeiro <strong>Agente de Biodiversidade Urbana</strong>.
        </p>
        <button className={styles.button}>
          <a
            href="https://forms.gle/uaAcbsipA2HQ6myf6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonLink}
          >
            <span>Acessar Formulário de Inscrição</span>
            <FaArrowRight className={styles.buttonIcon} />
          </a>
        </button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <img src={retomadaLogo} alt="RetomadaBR Logo" />
        </div>
        <p>
          Projeto desenvolvido pelo <strong>RetomadaBR</strong> e financiado
          pela <strong>Heineken</strong> — Formação Agentes de Biodiversidade
          Urbana.
        </p>
        <p>Com apoio da comunidade local e parceiros institucionais.</p>
      </footer>
    </div>
  );
}
