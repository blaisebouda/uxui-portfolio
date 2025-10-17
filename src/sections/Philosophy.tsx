import Section from "../components/Section";
import GradientTitle from "../components/GradientTitle";
import AnimatedContent from "../components/AnimatedContent";

type Philosophy = {
  id: string;
  title: string;
  description: string;
};

const philosophy: Philosophy[] = [
  {
    id: "1",
    title: "Moins de click",
    description:
      "J’aide les utilisateurs à atteindre ce dont ils ont besoin en réduisant au maximum le nombre de clics.Simple et moderne",
  },
  {
    id: "2",
    title: "Simple et moderne",
    description:
      "Offrez à vos utilisateurs une expérience fluide et agréable grâce à des interfaces simples.",
  },
  {
    id: "3",
    title: "Et vous",
    description:
      "Gagnez du temps, boostez vos conversions et Renforcez votre image.",
  },
];

export default function Philosophy() {
  return (
    <Section id="philosophy" bg="url('/pattern-2.png')">
      <AnimatedContent>
        <GradientTitle className="md:text-4xl text-center">
          Ma philosophie
        </GradientTitle>
      </AnimatedContent>
      <div className="relative max-w-[600px] mx-auto flex flex-col gap-20 mt-30 after:absolute after:w-[6px] after:h-full after:bg-white/10 after:left-8 md:after:left-14 after:rounded-full">
        {philosophy.map((philosophy) => (
          <PhilosophyItem key={philosophy.id} philosophy={philosophy} />
        ))}
      </div>
    </Section>
  );
}

const PhilosophyItem = ({ philosophy }: { philosophy: Philosophy }) => {
  return (
    <div className="flex items-center md:gap-16 gap-8 text-[var(--primary-color-700)] ">
      <h1 className="md:text-4xl text-2xl font-[Unbounded] font-bold min-w-[24px]">
        {philosophy.id}
      </h1>
      <div>
        <h1 className="md:text-4xl text-2xl font-[Unbounded] font-bold">
          {philosophy.title}
        </h1>
        <p className="pt-2 text-[var(--primary-color-400)] max-w-[500px]">
          {philosophy.description}
        </p>
      </div>
    </div>
  );
};
