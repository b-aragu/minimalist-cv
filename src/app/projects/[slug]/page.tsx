import { Metadata } from "next";
import { notFound } from "next/navigation";
import { RESUME_DATA, Project } from "@/data/resume-data";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { JsonLdScript } from "@/components/json-ld-script";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all project case study pages at build time
export async function generateStaticParams() {
  return RESUME_DATA.projects
    .filter((p) => p.caseStudySlug)
    .map((p) => ({
      slug: p.caseStudySlug!,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = RESUME_DATA.projects.find((p) => p.caseStudySlug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | ${RESUME_DATA.personal.name}`,
    description: project.longDescription || project.description,
    openGraph: {
      title: `${project.title} | ${RESUME_DATA.personal.name}`,
      description: project.longDescription || project.description,
      type: "article",
    },
  };
}

function MetricCard({ label, value }: { label: string; value: string | number | boolean }) {
  const displayValue = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;
  return (
    <Card className="text-center">
      <CardContent className="py-4">
        <div className="text-2xl font-bold font-mono tabular-nums">{displayValue}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{label}</div>
      </CardContent>
    </Card>
  );
}

function TechBadge({ tag }: { tag: string }) {
  return (
    <Badge variant="secondary" className="text-xs h-5 px-2">
      {tag}
    </Badge>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = RESUME_DATA.projects.find((p) => p.caseStudySlug === slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.longDescription || project.description,
    url: project.link?.href,
    creator: {
      "@type": "Person",
      name: RESUME_DATA.personal.name,
      url: RESUME_DATA.personal.personalWebsiteUrl,
    },
    programmingLanguage: project.techStack,
    dateCreated: project.period.split("–")[0].trim(),
    keywords: project.techStack.join(", "),
    about: {
      "@type": "Thing",
      name: project.category,
    },
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero */}
        <article className="space-y-8">
          <header className="space-y-4 print-break-inside-avoid">
            <div className="flex items-center gap-3 flex-wrap">
              {project.logo && (
                <img
                  src={
                    typeof project.logo === "string"
                      ? project.logo
                      : project.logo && typeof project.logo === "object" && "src" in project.logo
                      ? project.logo.src
                      : ""
                  }
                  alt={`${project.title} logo`}
                  className="h-12 w-12 rounded-lg bg-white border border-gray-200 object-contain"
                />
              )}
              <div>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground uppercase tracking-wide">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project
                </span>
                <h1 className="text-3xl font-bold mt-1">{project.title}</h1>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="font-mono">{project.role}</span>
              <span>•</span>
              <span className="font-mono">{project.period}</span>
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <GlobeIcon className="h-3 w-3" />
                  Live Demo
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <GithubIcon className="h-3 w-3" />
                  Repository
                </a>
              )}
            </div>
          </header>

          {/* Metrics */}
          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <Section className="print-break-inside-avoid">
              <h2 className="text-xl font-bold mb-4">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <MetricCard key={key} label={key} value={value} />
                ))}
              </div>
            </Section>
          )}

          {/* Description */}
          <Section className="print-break-inside-avoid">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </Section>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <Section className="print-break-inside-avoid">
              <h2 className="text-xl font-bold mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">→</span>
                    <span className="text-pretty">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Tech Stack */}
          <Section className="print-break-inside-avoid">
            <h2 className="text-xl font-bold mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tag) => (
                <TechBadge key={tag} tag={tag} />
              ))}
            </div>
          </Section>

          {/* Action Buttons */}
          <Section className="print:hidden">
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <Button asChild variant="default">
                  <a href={project.link.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    View Live
                  </a>
                </Button>
              )}
              {project.repo && (
                <Button asChild variant="outline">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
              <Button asChild variant="ghost">
                <Link href="/">← Back to Portfolio</Link>
              </Button>
            </div>
          </Section>
        </article>
      </main>
    </>
  );
}