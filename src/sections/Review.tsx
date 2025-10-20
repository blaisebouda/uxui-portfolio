import Section from "../components/Section";
import AnimatedContent from "../components/AnimatedContent";
import SectionTitle from "../components/SectionTitle";
import { Card } from "../components/Card";
import TestimonialsMarquee from "../components/TestimonialsMarquee";
import unionHalalProfile from "/reviewers/unionhalal_profile.jpg";
import issiaka from "/reviewers/issiaka.png";
import balele from "/reviewers/balele.jpg";

interface Review {
  message: string;
  name: string;
  job: string;
  profile: string;
}
const reviews: Review[] = [
  {
    message:
      "Le design a toujours été un vrai casse-tête pour moi, mais avec Blaise, tout devient plus simple. Il comprend vite les besoins et me permet de me concentrer sur le développement sans perdre de temps.",
    name: "Balele BAZIE",
    job: "Ingénieur en informatique",
    profile: balele,
  },
  {
    message:
      "J’ai eu le plaisir de bosser avec Blaise sur une appli mobile. Franchement, son sérieux et la qualité de son travail m’ont impressionné. Tout est clair, propre et livré dans les temps.",
    name: "Issiaka Ouedraogo",
    job: "Ingénieur et expert Flutter",
    profile: issiaka,
  },
  {
    message:
      "J’ai été agréablement surpris par la simplicité et la fluidité de son travail. Je le recommande sans hésiter.",
    name: "Moussa",
    job: "Fondateur de Union Halal",
    profile: unionHalalProfile,
  },
];
export default function Review() {
  return (
    <Section id="review" className="max-w-[1040px]  mx-auto">
      <AnimatedContent>
        <SectionTitle>
          Ce que les autres
          <br /> disent de Moi
        </SectionTitle>
        <div className="md:pt-30 pt-20 flex  gap-4">
          <TestimonialsMarquee>
            {reviews.map((review, index) => (
              <ReviewItem key={index} review={review} />
            ))}
          </TestimonialsMarquee>
        </div>
      </AnimatedContent>
    </Section>
  );
}

const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <Card className="p-6 w-[400px] rounded-2xl flex  flex-shrink-0 flex-col justify-between gap-6 h-full">
      <p>{review.message}</p>
      <div className="flex items-center gap-4">
        <img
          src={review.profile}
          alt=""
          width={45}
          height={45}
          className="rounded-full grayscale"
        />
        <div>
          <p className="font-semibold"> {review.name}</p>
          <p className="text-[var(--primary-color-400)]">{review.job}</p>
        </div>
      </div>
    </Card>
  );
};
