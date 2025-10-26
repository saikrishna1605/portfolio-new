import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ContactSection } from "@/components/sections/contact-section";
// import { generateOgImage } from "@/ai/flows/generate-og-image"; // Disabled - requires Google AI API key
import type { Metadata } from 'next';

// This is a server component, so we can fetch data directly or call server functions.

export async function generateMetadata(): Promise<Metadata> {
  const siteTitle = "Portfolio - Sai Krishna Mukka";
  const siteDescription = "Portfolio of Sai Krishna Mukka, an AI/ML Engineer and Full Stack Developer. Discover innovative projects in AI, web development, and more.";
  const technologies = ["Python", "FastAPI", "OpenAI API", "React", "Firebase", "TailwindCSS", "Next.js", "TypeScript", "Node.js", "MongoDB", "GCP", "OCI", "AI/ML"];

  // Use a static OG image instead of AI-generated one
  // To enable AI-generated OG images, set up Google AI API key in .env.local
  // GOOGLE_GENAI_API_KEY=your_api_key_here
  const ogImageUrl = "https://placehold.co/1200x630.png?text=Sai+Krishna+Mukka+Portfolio"; // Static placeholder
  
  // Uncomment below to enable AI-generated OG images (requires API key)
  /*
  try {
    const ogData = await generateOgImage({
      projectTitle: siteTitle,
      projectDescription: `This portfolio highlights skills in ${technologies.join(', ')}. ${siteDescription}`,
      technologiesUsed: technologies,
    });
    ogImageUrl = ogData.ogImageUrl;
  } catch (error) {
    console.warn("OG image generation disabled or API key not configured");
  }
  */

  
  const metadataResult: Metadata = {
    title: siteTitle,
    description: siteDescription,
    keywords: ["portfolio", "Sai Krishna Mukka", "AI Engineer", "ML Engineer", "Full Stack Developer", ...technologies],
    authors: [{ name: "Sai Krishna Mukka" }],
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-new-saikrishna1605s-projects.vercel.app",
      siteName: siteTitle,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [ogImageUrl],
      // creator: '@yourtwitterhandle', // Replace with your Twitter handle
    },
  };
  
  return metadataResult;
}
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CertificationsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
