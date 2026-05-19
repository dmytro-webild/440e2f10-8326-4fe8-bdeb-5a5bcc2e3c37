"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TeamCardSix from "@/components/sections/team/TeamCardSix";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            brandName="Decka Agency"
            navItems={[
              { name: "Work", id: "work" },
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Get Started", href: "#contact" }}
          />
        </div>
        <HeroSplitDoubleCarousel
          title="Decka: Digital Strategy & Development"
          description="Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers for decka.agency."
          tag="Award-Winning Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Start Project", href: "#contact" },
            { text: "View Work", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=1", imageAlt: "UI UX Design" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "UI UX Design" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "UI UX Design" },
          ]}
          rightCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=1", imageAlt: "UI UX Design" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp", imageAlt: "UI UX Design" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp?_wi=1", imageAlt: "UI UX Design" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureCardTwentySeven
          title="Our Specialized Services"
          description="We provide tailored digital solutions designed to accelerate growth for your specific market."
          textboxLayout="default"
          animationType="slide-up"
          features={[
            { id: "1", title: "Strategic Web Design", descriptions: ["High-conversion layouts", "Custom brand identity"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp" },
            { id: "2", title: "Performance Development", descriptions: ["Lightning fast load times", "SEO optimized codebase"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp" },
            { id: "3", title: "Digital Brand Strategy", descriptions: ["Market positioning", "Audience engagement tactics"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp" },
          ]}
        />
        <MetricCardSeven
          title="Core Metrics"
          description="Results that define our excellence."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          metrics={[
            { id: "1", value: "100+", title: "Projects", items: ["Across global industries", "High client retention"] },
            { id: "2", value: "99%", title: "Satisfaction", items: ["Client-first approach", "Proven track record"] },
            { id: "3", value: "8+", title: "Years", items: ["Crafting experiences", "Expert team"] },
          ]}
        />
        <TeamCardSix
          id="work"
          title="Portfolio: Industry Focus"
          description="Showcasing our work across key local industries."
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          members={[
            { id: "1", name: "Real Estate Portal", role: "Property Tech Solutions" },
            { id: "2", name: "E-Commerce Hub", role: "Retail & Logistics" },
            { id: "3", name: "Health App Interface", role: "Healthcare Services" },
          ]}
        />
        <TestimonialCardTen
          title="Client Feedback"
          description="What our partners say about us."
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            { id: "1", title: "Exceptional Results", quote: "Decka Agency transformed our entire digital infrastructure.", name: "Sarah J.", role: "Founder" },
            { id: "2", title: "Great Partnership", quote: "Professional, fast, and highly creative.", name: "Michael T.", role: "CEO" },
          ]}
        />
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know about decka.agency."
          textboxLayout="default"
          useInvertedBackground={true}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "How do we get started?", content: "Fill out our contact form and we'll reach out within 24 hours." },
            { id: "2", title: "What is your process?", content: "We follow a streamlined discovery and design process." },
          ]}
        />
        <ContactCenter
          id="contact"
          title="Let's Collaborate"
          description="Ready to build something great at decka.agency?"
          tag="Contact"
          background={{ variant: "gradient-bars" }}
          useInvertedBackground={false}
        />
        <FooterLogoReveal
          logoText="Decka Agency"
          leftLink={{ text: "Privacy Policy", href: "/privacy" }}
          rightLink={{ text: "Terms of Service", href: "/terms" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}