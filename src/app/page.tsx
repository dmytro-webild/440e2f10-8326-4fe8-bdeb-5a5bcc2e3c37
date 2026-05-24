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
            brandName="DesignAgency"
            navItems={[
              { name: "Work", id: "services" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Hire Us", href: "#contact" }}
          />
        </div>
        <HeroSplitDoubleCarousel
          title="DesignAgency: Crafting Digital Excellence"
          description="We transform visions into high-performance web experiences. From modern UI design to full-scale digital strategy, we build platforms that captivate and convert."
          tag="Premium Web Design"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Start a Project", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=1", imageAlt: "FreshNest Cleaning Co. Website Interface" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "BlueLine Pressure Washing Branding" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "Design concept" },
          ]}
          rightCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=1", imageAlt: "FreshNest UI Detail" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp", imageAlt: "BlueLine UI Detail" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp?_wi=1", imageAlt: "User Experience Design" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Our Design Capabilities"
          description="Full-stack digital agency services to scale your brand presence."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            { title: "Brand Identity", description: "Crafting unique visual languages and design systems that define modern businesses.", bentoComponent: "reveal-icon", icon: Sparkles },
            { title: "Web Development", description: "Building fast, responsive, and secure web applications tailored to your specific needs.", bentoComponent: "reveal-icon", icon: Zap },
            { title: "Digital Strategy", description: "Data-driven consulting to optimize user journey and business performance.", bentoComponent: "reveal-icon", icon: Shield },
          ]}
        />
        <MetricCardFourteen
          title="Our Track Record"
          tag="Proven Results"
          metricsAnimation="slide-up"
          useInvertedBackground={true}
          metrics={[
            { id: "1", value: "150+", description: "Successful brand transformations" },
            { id: "2", value: "99%", description: "Client retention for long-term growth" },
            { id: "3", value: "8+", description: "Years of digital design leadership" },
          ]}
        />
        <TestimonialCardTwo
          title="Client Success"
          description="Hear what our partners say about our work."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          testimonials={[
            { id: "1", name: "Founder", role: "FreshNest Cleaning Co.", testimonial: "The digital transformation has revolutionized how our customers engage with us.", icon: Star },
            { id: "2", name: "Director", role: "BlueLine Pressure Washing", testimonial: "Professional, creative, and highly strategic. A game-changer for our market.", icon: Star },
          ]}
        />
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about partnering with our agency."
          textboxLayout="default"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          faqs={[
            { id: "1", title: "How do we begin a project?", content: "Simply reach out via our contact form to schedule an initial discovery call." },
            { id: "2", title: "Do you offer ongoing support?", content: "We provide comprehensive post-launch support and optimization services to keep your platform evolving." },
          ]}
        />
        <div id="contact" data-section="contact">
          <ContactText
            text="Ready to transform your digital presence?"
            background={{ variant: "gradient-bars" }}
            useInvertedBackground={false}
          />
        </div>
        <FooterCard
          logoText="DesignAgency"
          copyrightText="© 2025 | DesignAgency"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}