import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ContactSection } from "@/components/sections/contact-section";
import { generateOgImage } from "@/ai/flows/generate-og-image";
import type { Metadata } from 'next';

// This is a server component, so we can fetch data directly or call server functions.

export async function generateMetadata(): Promise<Metadata> {
  const siteTitle = "Portfolio - Sai Krishna Mukka";
  const siteDescription = "Portfolio of Sai Krishna Mukka, an AI/ML Engineer and Full Stack Developer. Discover innovative projects in AI, web development, and more.";
  const technologies = ["Python", "FastAPI", "OpenAI API", "React", "Firebase", "TailwindCSS", "Next.js", "TypeScript", "Node.js", "MongoDB", "GCP", "OCI", "AI/ML"];

  let ogImageUrl: string | undefined = undefined;
  try {
    const ogData = await generateOgImage({
      projectTitle: siteTitle,
      projectDescription: `This portfolio highlights skills in ${technologies.join(', ')}. ${siteDescription}`,
      technologiesUsed: technologies,
    });
    ogImageUrl = ogData.ogImageUrl;
  } catch (error) {
    console.error("Failed to generate OG image:", error);
    ogImageUrl = "https://placehold.co/1200x630.png"; // Fallback placeholder
  }

  const metadataResult: Metadata = {
    title: siteTitle,
    description: siteDescription,
    keywords: ["portfolio", "Sai Krishna Mukka", "AI Engineer", "ML Engineer", "Full Stack Developer", ...technologies],
    authors: [{ name: "Sai Krishna Mukka" }],
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: "https://yourdomain.com", // Replace with your actual domain
      siteName: siteTitle,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      // creator: '@yourtwitterhandle', // Replace with your Twitter handle
    },
  };
  
  if (ogImageUrl) {
    metadataResult.openGraph!.images = [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ];
  }

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
