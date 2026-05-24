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
            brandName="Decka Agency"
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Services", id: "services" },
              { name: "Contact", id: "contact" },
            ]}
          />
        </div>
        <div id="hero" data-section="hero">
          <HeroSplitDoubleCarousel
            title="Websites That Help Local Businesses Get More Customers"
            description="We create modern, conversion-focused websites for local service businesses that improve credibility and turn visitors into loyal clients."
            tag="Websites Built for Local Businesses"
            tagIcon={Sparkles}
            tagAnimation="slide-up"
            background={{ variant: "canvas-reveal" }}
            buttons={[
              { text: "View Portfolio" },
            ]}
            buttonAnimation="slide-up"
            carouselPosition="right"
            leftCarouselItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=1", imageAlt: "FreshNest Cleaning Co. Website Interface" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "BlueLine Pressure Washing Branding" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "Evergreen Landscaping Website" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=1", imageAlt: "Peak Home Services Website" },
            ]}
            rightCarouselItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=1", imageAlt: "FreshNest Cleaning Co. Website Interface" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "BlueLine Pressure Washing Branding" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "Evergreen Landscaping Website" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=1", imageAlt: "Peak Home Services Website" },
            ]}
            carouselItemClassName="!aspect-[4/5]"
          />
        </div>
        <div id="services" data-section="services">
          <FeatureBento
            title="Our Digital Services"
            description="We build sites that work as hard as your business does."
            textboxLayout="default"
            animationType="slide-up"
            useInvertedBackground={false}
            features={[
              { title: "Conversion Design", description: "High-impact UI and UX layouts tailored to convert local leads into customers.", bentoComponent: "reveal-icon", icon: Sparkles },
              { title: "Responsive Web Dev", description: "Pixel-perfect builds that look incredible on every mobile device.", bentoComponent: "reveal-icon", icon: Zap },
              { title: "SEO & Speed", description: "Fast-loading, optimized infrastructure to rank your local business higher.", bentoComponent: "reveal-icon", icon: Shield },
            ]}
          />
        </div>
        <MetricCardFourteen
          title="Proven Results"
          tag="Track Record"
          metricsAnimation="slide-up"
          useInvertedBackground={true}
          metrics={[
            { id: "1", value: "150+", description: "Local businesses transformed" },
            { id: "2", value: "99%", description: "Client satisfaction rating" },
            { id: "3", value: "8+", description: "Years of expert service" },
          ]}
        />
        <TestimonialCardTwo
          title="Client Success Stories"
          description="See how our websites have impacted local service companies."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          testimonials={[
            { id: "1", name: "Founder", role: "FreshNest Cleaning Co.", testimonial: "Our new site has increased leads by 40% in just two months.", icon: Star },
            { id: "2", name: "Director", role: "BlueLine Pressure Washing", testimonial: "The site looks amazing and actually brings in local calls.", icon: Star },
          ]}
        />
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about building a website for your business."
          textboxLayout="default"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          faqs={[
            { id: "1", title: "How do we get started?", content: "Fill out our contact form and we'll schedule a discovery chat." },
            { id: "2", title: "Do you handle ongoing maintenance?", content: "Yes, we provide full support to keep your site fast and secure." },
          ]}
        />
        <div id="contact" data-section="contact">
          <ContactText
            text="Ready to grow your customer base?"
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