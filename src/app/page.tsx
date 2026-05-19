"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Sparkles, Shield, Zap, BarChart, Users, Star } from "lucide-react";

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
        <FeatureBento
          title="Our Specialized Services"
          description="We provide tailored digital solutions designed to accelerate growth for your specific market."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            { title: "Strategic Web Design", description: "High-conversion layouts, Custom brand identity", bentoComponent: "reveal-icon", icon: Sparkles },
            { title: "Performance Development", description: "Lightning fast load times, SEO optimized codebase", bentoComponent: "reveal-icon", icon: Zap },
            { title: "Digital Brand Strategy", description: "Market positioning, Audience engagement tactics", bentoComponent: "reveal-icon", icon: Shield },
          ]}
        />
        <MetricCardFourteen
          title="Core Metrics"
          tag="Results"
          metricsAnimation="slide-up"
          useInvertedBackground={true}
          metrics={[
            { id: "1", value: "100+", description: "Projects completed across global industries" },
            { id: "2", value: "99%", description: "Satisfaction rate with a client-first approach" },
            { id: "3", value: "8+", description: "Years of expertise in crafting experiences" },
          ]}
        />
        <TeamCardTwo
          title="Portfolio: Industry Focus"
          description="Showcasing our work across key local industries."
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground={false}
          members={[
            { id: "1", name: "Real Estate Portal", role: "Property Tech", description: "Comprehensive portal solution." },
            { id: "2", name: "E-Commerce Hub", role: "Retail", description: "Scalable retail platform." },
            { id: "3", name: "Health App", role: "Healthcare", description: "Patient-focused interface." },
          ]}
        />
        <TestimonialCardTwo
          title="Client Feedback"
          description="What our partners say about us."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          testimonials={[
            { id: "1", name: "Sarah J.", role: "Founder", testimonial: "Decka Agency transformed our entire digital infrastructure.", icon: Star },
            { id: "2", name: "Michael T.", role: "CEO", testimonial: "Professional, fast, and highly creative.", icon: Star },
          ]}
        />
        <FaqBase
          title="Common Questions"
          description="Everything you need to know about decka.agency."
          textboxLayout="default"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          faqs={[
            { id: "1", title: "How do we get started?", content: "Fill out our contact form and we'll reach out within 24 hours." },
            { id: "2", title: "What is your process?", content: "We follow a streamlined discovery and design process." },
          ]}
        />
        <div id="contact" data-section="contact">
          <ContactText
            text="Ready to build something great at decka.agency?"
            background={{ variant: "gradient-bars" }}
            useInvertedBackground={false}
          />
        </div>
        <FooterCard
          logoText="Decka Agency"
          copyrightText="© 2025 | Decka Agency"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}