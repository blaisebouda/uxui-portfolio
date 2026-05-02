import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import { Card } from "../components/Card";
import Drawer from "../components/Drawer";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import tiim from "/projects/tiim.jpg";
import tlo from "/projects/tlo.jpg";
import tloScreenshot from "/projects/tlo_screenshot.jpg";
import unionHalal from "/projects/unionhalal.jpg";
import unionHalalScreenshot from "/projects/unionhalal_screenshot.jpg";
import uxui from "/projects/uxui.jpg";

type Realisation = {
  title: string;
  description: string;
  btn_label: string;
  cover: string;
  screenshot?: string;
  externalLink?: string;
};

const realisations: Realisation[] = [
  {
    title: "Landing Page – TIIM ",
    description:
      "Conception de la landing de Tiim. Une plateforme pour trouver des médicaments en quelques secondes.",
    cover: tiim,
    btn_label: "Voir le site",
    externalLink: "https://fasotiim.com/",
  },
  {
    title: "Union Halal",
    description:
      "Conception UI/UX pour une application mobile de rencontre 100% Halal.",
    cover: unionHalal,
    btn_label: "Voir les captures d'écran",
    screenshot: unionHalalScreenshot,
  },
  {
    title: "Landing Page – UI/UX portfolio ",
    description:
      "Conception d’une landing page moderne regroupant mes principales réalisations en design.",
    cover: uxui,
    btn_label: "Voir la maquette Figma",
    externalLink:
      "https://www.figma.com/proto/sG5JVC56Vh2PNJ1JsAdceO/For-me?node-id=3085-3&p=f&t=FqNv6GGRLKsxzvDZ-0&scaling=min-zoom&content-scaling=fixed&page-id=3085%3A2",
  },
  {
    title: "Tlo App ",
    description:
      "Refonte d'une application mobile de jeu de devinettes entre deux amis.",
    cover: tlo,
    btn_label: "Voir les captures d'écran",
    screenshot: tloScreenshot,
  },
];
export default function Realisations() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRealisation, setCurrentRealisation] =
    useState<Realisation | null>(null);

  const handleOpen = (realisation: Realisation) => {
    setCurrentRealisation(realisation);
    setIsOpen(true);
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="h-[95%] rounded-t-2xl border-t border-white/25 overflow-y-auto"
        position="bottom"
      >
        <div className="p-6 ">
          <img
            src={currentRealisation?.screenshot}
            alt="realisation screenshot"
            className="mx-auto"
          />
        </div>
      </Drawer>

      <Section
        id="realisations"
        bg="bg-[url('/pattern-1.png')]"
        containerClassName="max-w-[1040px]  mx-auto"
      >
        <SectionTitle>
          Mes dernières <br /> réalisations
        </SectionTitle>
        <div className="md:pt-30 pt-20 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {realisations.map((realisation, index) =>
            realisation.externalLink ? (
              <a href={realisation.externalLink} target="_blank" key={index}>
                <RealisationItem realisation={realisation} />
              </a>
            ) : (
              <RealisationItem
                key={index}
                realisation={realisation}
                onOpen={handleOpen}
              />
            ),
          )}
        </div>
      </Section>
    </>
  );
}

const RealisationItem = ({
  realisation,
  onOpen,
}: {
  realisation: Realisation;
  onOpen?: (realisation: Realisation) => void;
}) => {
  return (
    <Card
      onClick={() => onOpen?.(realisation)}
      className="cursor-pointer md:even:mt-6  h-max md:p-6 p-4 flex flex-col gap-6 rounded-2xl  hover:border-[var(--primary-color-400)] hover:scale-[0.95] transition-all ease-in-out duration-300"
    >
      <img
        className="rounded-lg"
        src={realisation.cover}
        alt={realisation.title}
      />
      <h3 className="text-xl font-[Unbounded] ">{realisation.title}</h3>
      <p className="text-[var(--primary-color-400)]">
        {realisation.description}
      </p>
      <button className="cursor-pointer flex items-center gap-2 ">
        <span className="font-semibold text-[var(--primary-color-400)] hover:text-white transition-all ease-in-out duration-300">
          {realisation.btn_label}
        </span>
        <span className="w-8 h-8 bg-white/25 rounded-full flex items-center justify-center border-1 border-white/25">
          {realisation.externalLink ? (
            <SquareArrowOutUpRight width={18} height={18} />
          ) : (
            <ChevronRight width={18} height={18} />
          )}
        </span>
      </button>
    </Card>
  );
};
