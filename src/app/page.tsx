import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { QuoteCalculator } from "@/components/site/calculator";
import { Sectors } from "@/components/site/sectors";
import { Coverage } from "@/components/site/coverage";
import { Contact } from "@/components/site/contact";
import { Reveal } from "@/components/interactive/motion/reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <QuoteCalculator />
      </Reveal>
      <Reveal>
        <Sectors />
      </Reveal>
      <Reveal>
        <Coverage />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
