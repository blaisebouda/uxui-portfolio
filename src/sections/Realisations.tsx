import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import { Card } from "../components/Card";
import { SquareArrowOutUpRight } from "lucide-react";

type Realisation = {
  title: string;
  description: string;
  image: string;
};

const realisations: Realisation[] = [
  {
    title: "Landing Page – Dev portfolio ",
    description:
      "Conception d’une landing page moderne regroupant mes principales réalisations en design.",
    image: "",
  },
  {
    title: "Landing Page – Dev portfolio ",
    description:
      "Landing page simple regroupant mes principales contributions en tant que développer Fullstack.",
    image: "",
  },
  {
    title: "Union Halal",
    description:
      "Conception UI/UX pour une application mobile de rencontre 100% Halal.",
    image: "",
  },
  {
    title: " Irregular verbs  ",
    description:
      "Design d’application mobile pour l’apprentissage des verbes irréguliers de façon ludique.",
    image: "",
  },
];
export default function Realisations() {
  return (
    <Section id="realisations" bg="url('/pattern-1.png')">
      <SectionTitle>
        Mes dernières <br /> réalisations
      </SectionTitle>
      <div className="pt-30 grid grid-cols-1 md:grid-cols-2 gap-6">
        {realisations.map((realisation, index) => (
          <RealisationItem key={index} realisation={realisation} />
        ))}
      </div>
    </Section>
  );
}

const RealisationItem = ({ realisation }: { realisation: Realisation }) => {
  return (
    <Card className="nth-child(2):mt-6 p-6 flex flex-col gap-6 rounded-2xl max-w-[440px] hover:border-[var(--primary-color-400)] transition-all ease-in-out duration-300">
      <img src={realisation.image} alt={realisation.title} />
      <h3 className="text-xl font-[Unbounded] ">{realisation.title}</h3>
      <p className="text-[var(--primary-color-400)]">
        {realisation.description}
      </p>
      <button className="cursor-pointer flex items-center gap-2 hover:text-underline transition-all ease-in-out duration-300">
        <span className="font-semibold text-[var(--primary-color-400)]">
          Visiter le site
        </span>
        <span className="w-8 h-8 bg-white/25 rounded-full flex items-center justify-center border-1 border-white/25">
          <SquareArrowOutUpRight width={18} height={18} />
        </span>
      </button>
    </Card>
  );
};
