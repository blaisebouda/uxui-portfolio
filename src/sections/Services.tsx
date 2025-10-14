import Section from "../components/Section";
import { ChevronRight } from "lucide-react";
import { Card } from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import cursor from "../assets/cursor.svg";
import cursor_click from "../assets/cursor_click.svg";
import cursor_screen from "../assets/cursor_screen.svg";

type Service = {
  title: string;
  description: string;
  icon: string;
  items: string[];
};

const services: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "Je conçois des interfaces simples et modernes base sur l’expérience utilisateur",
    icon: cursor,
    items: [
      "Degin simple pour web et mobile",
      "Prototypage & maquettes interactives",
      "Design Systems & guidelines",
    ],
  },
  {
    title: "Refonte de sites & applications",
    description: "Je peux améliorer votre identité visuelle",
    icon: cursor_screen,
    items: [
      "Modernisation d’interfaces existantes",
      "Amélioration de l’expérience utilisateur",
      "Renforcer l'identité de votre marque",
    ],
  },
  {
    title: "Landing pages & branding",
    description: "Pages optimisées pour la conversion",
    icon: cursor_click,
    items: [
      "Identité visuelle clair et impactant",
      "Simple et moderne",
      "Optimisation pour la conversation",
    ],
  },
];

export default function Services() {
  return (
    <Section id="services" bg="url('/pattern-1.png')">
      <SectionTitle>
        Qu’est-ce que je peux <br />
        faire pour vous ?
      </SectionTitle>
      <div className="pt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </Section>
  );
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="p-6 rounded-2xl flex flex-col gap-6 hover:border-[var(--primary-color-400)] transition-all ease-in-out duration-300">
      <div className="mt-2 relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/25  border-2 border-white/40 backdrop-blur-sm">
        <span className="absolute w-full h-full bg-white/25 bg-white/20 rounded-xl z-[-1] border-2 border-white/10 rotate-[22deg] bottom-2.5 left-3"></span>
        <img src={service.icon} width={24} height={24} alt="svg" />
      </div>
      <h3 className="text-xl font-[Unbounded]">{service.title}</h3>
      <p className=" text-[var(--primary-color-400)]">{service.description}</p>
      <div className="flex flex-col gap-2">
        {service.items.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <span>
              <ChevronRight />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
