"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Sparkles, Shield, Zap, Star } from "lucide-react";

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
            brandName="ProService"
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Get Quote", href: "#contact" }}
          />
        </div>
        <HeroSplitDoubleCarousel
          title="ProService: Local Professional Solutions"
          description="We provide expert cleaning, pressure washing, and landscaping services. Elevate your property's curb appeal with our high-performance maintenance team."
          tag="Top Rated Maintenance"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Get Your Estimate", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=1", imageAlt: "Cleaning services" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "Pressure washing" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "Landscaping" },
          ]}
          rightCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=1", imageAlt: "Cleaning equipment" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp", imageAlt: "Pressure washing tool" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp?_wi=1", imageAlt: "Landscaping tool" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Our Specialized Services"
          description="Tailored care for your residential and commercial properties."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            { title: "Professional Cleaning", description: "Deep cleaning, recurring maintenance, sanitation services.", bentoComponent: "reveal-icon", icon: Sparkles },
            { title: "Pressure Washing", description: "Driveway restoration, deck washing, siding cleaning.", bentoComponent: "reveal-icon", icon: Zap },
            { title: "Complete Landscaping", description: "Lawn care, garden design, seasonal cleanup.", bentoComponent: "reveal-icon", icon: Shield },
          ]}
        />
        <MetricCardFourteen
          title="Reliability at a Glance"
          tag="Results"
          metricsAnimation="slide-up"
          useInvertedBackground={true}
          metrics={[
            { id: "1", value: "500+", description: "Satisfied residential & commercial clients" },
            { id: "2", value: "98%", description: "Client satisfaction rating on repeat services" },
            { id: "3", value: "10+", description: "Years of professional maintenance experience" },
          ]}
        />
        <TestimonialCardTwo
          title="Client Feedback"
          description="See what homeowners say about our quality."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          testimonials={[
            { id: "1", name: "Alex R.", role: "Homeowner", testimonial: "The pressure washing result was incredible. Like a new house!", icon: Star },
            { id: "2", name: "Jessica M.", role: "Office Manager", testimonial: "Reliable and thorough cleaning crew every single week.", icon: Star },
          ]}
        />
        <FaqBase
          title="Questions & Answers"
          description="Information about our service process."
          textboxLayout="default"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          faqs={[
            { id: "1", title: "How do I request a quote?", content: "Simply use the form below and we will contact you for a site visit." },
            { id: "2", title: "Are you licensed/insured?", content: "Yes, our company is fully licensed and insured for your peace of mind." },
          ]}
        />
        <div id="contact" data-section="contact">
          <ContactText
            text="Get started with your service quote today."
            background={{ variant: "gradient-bars" }}
            useInvertedBackground={false}
          />
        </div>
        <FooterCard
          logoText="ProService"
          copyrightText="© 2025 | ProService"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}