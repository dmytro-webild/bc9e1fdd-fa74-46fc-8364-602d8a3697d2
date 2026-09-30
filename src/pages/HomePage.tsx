import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitVerticalMarqueeTall from '@/components/sections/hero/HeroSplitVerticalMarqueeTall';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import { Award, PenTool, Users } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarqueeTall
      tag="PREMIUM TATTOO ARTISTRY"
      title="INK THAT TELLS YOUR STORY"
      description="Custom tattoos crafted with precision, personality, and passion."
      primaryButton={{
        text: "BOOK A SESSION",
        href: "#contact",
      }}
      secondaryButton={{
        text: "VIEW MY WORK",
        href: "#portfolio",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/busy-diligent-woman-is-working-lamp-studio-with-tape-colourful-triangles_613910-21515.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tattoo-salon-process-tattoo-girl-stuffed-tattoo-process-stuffing-tattoo-body-hands-close-up_1321-3003.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-style-illustration-breast-cancer-awareness-month_23-2151827754.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-style-fashion-design-sketch-paper_23-2151486985.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/paper-with-abstract-ink-painting_23-2147823726.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-desk-concept-with-smartphone-template_23-2148111347.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-style-fashion-design-sketch-paper_23-2151486990.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-artist-painting-with-aquarelle-paintbrush-canvas-using-artistic-tools-creative-skills-woman-using-orange-color-paint-from-watercolor-palette-create-artwork-design_482257-50475.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-tattooed-person_23-2149563288.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/arm-with-tattoo-near-sketch_23-2147834016.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-vintage-leaf-line-art-style_23-2151556013.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-style-fashion-design-sketch-paper_23-2151487007.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="8+ Years of Crafting Eternal Art. I specialize in bringing your concepts to life through meticulous, custom-designed tattoos that age gracefully."
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesImageBento
      tag="GALLERY"
      title="TATTOO COLLECTIONS"
      description="A curated selection of our finest work across multiple disciplines."
      items={[
        {
          title: "Black & Grey",
          description: "Precision shading and tonal depth.",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-woman-covering-half-face-with-hand_1122-1554.jpg",
        },
        {
          title: "Fine Line",
          description: "Minimalist and delicate artistry.",
          imageSrc: "http://img.b2bpic.net/free-photo/personal-care-cosmetology-concept-pleased-freckled-woman-with-natural-ginger-hair-keeps-hands-fist-near-face-stands-naked-against-blue-wall-wears-patches-eyes-lifting_273609-40080.jpg",
        },
        {
          title: "Realism",
          description: "Life-like portraits and textures.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-drawings-her-body_1122-1420.jpg",
        },
        {
          title: "Traditional",
          description: "Bold, classic, and timeless.",
          imageSrc: "http://img.b2bpic.net/free-photo/retro-comic-snake-illustration_23-2151924050.jpg",
        },
        {
          title: "Custom",
          description: "Tailored designs for your vision.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-tattooed-hipster-man-holding-bouquet-hand-against-gray-background_23-2148121932.jpg",
        },
        {
          title: "Dark Surrealism",
          description: "Complex and artistic themes.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-with-tattoo-piercing-his-nose-ears-holding-flower-bouquet-hand_23-2148121923.jpg",
        },
        {
          title: "Cover Ups",
          description: "Artistic transformations.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-tattoos_23-2149324826.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesBentoGrid
      tag="SERVICES"
      title="OUR SPECIALTIES"
      description="Professional tattoo services designed with your individual vision at the core."
      features={[
        {
          title: "Custom Artistry",
          description: "Unique designs tailored exactly to your body and vision.",
          imageSrc: "http://img.b2bpic.net/free-photo/psychedelic-girl-illustration_23-2151508435.jpg",
        },
        {
          title: "Cover Up Sessions",
          description: "Transform old ink into something you're proud to show off.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-tattooed-man-with-piercing-his-nose-ears-looking-camera_23-2148121967.jpg",
        },
        {
          title: "Consultation",
          description: "Collaborative planning to ensure every detail is perfect.",
          imageSrc: "http://img.b2bpic.net/free-photo/redhead-hipster-male-with-long-luxuriant-hair-full-beard-dressed-hoodie-t-shirt-holds-russian-traditional-musical-instrument-gusli-isolated-dark-background_613910-4693.jpg",
        },
        {
          title: "Precision Fine Line",
          description: "Mastery of delicate, clean work with lasting clarity.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sporty-girl-with-premature-gray-hair-tattoo-shoulder-nose-piercing-sitting-indoors-with-mobile-phone_343059-953.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="IMPACT"
      title="EXPERIENCE BY THE NUMBERS"
      description="Dedication to the craft reflected through consistent excellence."
      metrics={[
        {
          icon: Award,
          title: "Years Experience",
          value: "8+",
        },
        {
          icon: PenTool,
          title: "Tattoos Completed",
          value: "500+",
        },
        {
          icon: Users,
          title: "Happy Clients",
          value: "300+",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="VOICES"
      title="CLIENT STORIES"
      description="Read about the unique experiences of our community."
      testimonials={[
        {
          name: "Elena R.",
          role: "Collector",
          company: "Fine Art",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-tattoo-tattoo-salon_1157-24942.jpg",
        },
        {
          name: "Marcus D.",
          role: "Fan",
          company: "Art Enthusiast",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-handsome-african-american-tattooed-man-with-stylish-hair-beard-white-shirt-holding-hand-his-chin_613910-6571.jpg",
        },
        {
          name: "Sarah K.",
          role: "Regular",
          company: "Creative",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-tattoo-artist_23-2149525988.jpg",
        },
        {
          name: "Alex W.",
          role: "First-timer",
          company: "Design",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/satisfied-redhead-woman-thumbs-up_176420-16415.jpg",
        },
        {
          name: "Jordan P.",
          role: "Collector",
          company: "Art",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/redhead-bearded-male-dressed-blue-fleece-shirt-taking-pictures-with-compact-camera_613910-290.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="BOOKING"
      text="READY TO GET INKED?"
      primaryButton={{
        text: "BOOK YOUR SESSION",
        href: "#contact",
      }}
      secondaryButton={{
        text: "CONTACT STUDIO",
        href: "mailto:hello@inkstudio.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
