import Section from "../components/Section";
import AnimatedContent from "../components/AnimatedContent";
import SectionTitle from "../components/SectionTitle";
import { Card } from "../components/Card";
import profile from "/black_profile.jpg";

export default function Review() {
  return (
    <Section id="review" className="max-w-[1040px]  mx-auto">
      <AnimatedContent>
        <SectionTitle>
          Ce que les autres
          <br /> disent de Moi
        </SectionTitle>
        <div className="md:pt-30 pt-20 flex  gap-4">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
      </AnimatedContent>
    </Section>
  );
}

const ReviewItem = () => {
  return (
    <Card className="p-6 w-[400px] rounded-2xl flex  flex-shrink-0 flex-col  gap-8">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        officia. Ratione possimus sint cumque aut repudiandae earum placeat
        harum accusamus explicabo magni. Assumenda quaerat quod et alias
        suscipit tempore fuga.
      </p>
      <div className="flex items-center gap-4">
        <img
          src={profile}
          alt=""
          width={45}
          height={45}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">Blaise UXUI</p>
          <p className="text-[var(--primary-color-400)]">UX/UI Designer</p>
        </div>
      </div>
    </Card>
  );
};
