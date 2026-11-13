"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { GlobeIcon, MailIcon, PhoneIcon, DownloadIcon, SettingsIcon } from "lucide-react";
import { RESUME_DATA, CV_VERSIONS, CVVersion, SkillCategory, ExperienceCategory } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases & Data",
  "ai-ml": "AI / ML",
  devops: "DevOps & Infra",
  mobile: "Mobile",
  "creative-3d": "Creative / 3D",
  payments: "Payments",
  cms: "CMS & Content",
  business: "Business & Product",
};

const EXPERIENCE_CATEGORY_LABELS: Record<ExperienceCategory, string> = {
  founder: "Founder & Technical Lead",
  employment: "Employment",
  attachment: "Industrial Attachment",
  independent: "Independent Projects",
  freelance: "Freelance / Contract",
};

const EXPERIENCE_CATEGORY_ORDER: ExperienceCategory[] = [
  "founder",
  "employment",
  "attachment",
  "independent",
  "freelance",
];

const DEFAULT_CV_VERSION: CVVersion = "software-engineering";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function SkillBadge({ skill, version }: { skill: typeof RESUME_DATA.skills[0]; version: CVVersion }) {
  const emphasis = CV_VERSIONS[version].skillEmphasis;
  const isEmphasized = emphasis.some((e) =>
    skill.name.toLowerCase().includes(e.toLowerCase()) ||
    e.toLowerCase().includes(skill.name.toLowerCase())
  );

  return (
    <Badge
      variant={isEmphasized ? "default" : "secondary"}
      className={cn(
        "text-xs font-mono",
        isEmphasized && "bg-primary text-primary-foreground shadow-sm"
      )}
    >
      {skill.name}
      {skill.level !== "expert" && (
        <span className="ml-1 opacity-60">({skill.level})</span>
      )}
    </Badge>
  );
}

function ExperienceCard({
  exp,
  version,
}: {
  exp: typeof RESUME_DATA.experience[0];
  version: CVVersion;
}) {
  const isFeatured = CV_VERSIONS[version].featuredExperienceIds.includes(exp.id);

  return (
    <Card
      className={cn(
        "group",
        isFeatured && "ring-1 ring-primary/30 border-primary/20"
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-x-2 text-base">
          <div className="flex items-center gap-x-2 flex-1 min-w-0">
            {exp.logo && (
              <img
                src={
                  typeof exp.logo === "string"
                    ? exp.logo
                    : exp.logo && typeof exp.logo === "object" && "src" in exp.logo
                    ? exp.logo.src
                    : ""
                }
                alt={`${exp.company} logo`}
                className="h-6 w-6 rounded bg-white border border-gray-200 object-contain flex-shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold leading-none truncate">
                <a className="hover:underline" href={exp.link || "#"}>
                  {exp.company}
                </a>
              </h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {exp.badges.map((badge) => (
                  <Badge
                    variant="secondary"
                    className="text-[10px] h-4"
                    key={badge}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
            <span className="tabular-nums whitespace-nowrap">
              {exp.start} - {exp.end}
            </span>
            {exp.location && (
              <span className="text-xs opacity-70">{exp.location}</span>
            )}
          </div>
        </div>

        <h4 className="font-mono text-sm leading-none mt-1">{exp.title}</h4>
      </CardHeader>

      <CardContent className="mt-2 space-y-2 text-xs">
        <p className="text-muted-foreground">{exp.description}</p>

        {exp.highlights && exp.highlights.length > 0 && (
          <ul className="space-y-1 pl-4 marker:text-primary/50">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="text-muted-foreground/80">
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {exp.metrics && Object.keys(exp.metrics).length > 0 && (
          <div className="flex flex-wrap gap-2 text-[10px] font-mono text-muted-foreground/60">
            {Object.entries(exp.metrics).map(([key, value]) => (
              <Badge variant="outline" key={key} className="h-4 px-1.5">
                {key}: {value}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function SkillsSection({ version }: { version: CVVersion }) {
  const categories = CV_VERSIONS[version].skillCategories;

  return (
    <Section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Technical Skills</h2>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">
            {CV_VERSIONS[version].label}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {categories.map((category) => {
          const skills = RESUME_DATA.skillsByCategory[category] || [];
          if (skills.length === 0) return null;

          return (
            <div key={category} className="space-y-2">
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                {SKILL_CATEGORY_LABELS[category]}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills
                  .sort((a, b) => {
                    const levelOrder = { expert: 4, advanced: 3, proficient: 2, learning: 1 };
                    return levelOrder[b.level] - levelOrder[a.level];
                  })
                  .map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} version={version} />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ExperienceSection({ version }: { version: CVVersion }) {
  const featuredIds = new Set(CV_VERSIONS[version].featuredExperienceIds);

  return (
    <Section>
      <h2 className="text-xl font-bold mb-4">Experience</h2>

      <div className="space-y-6">
        {EXPERIENCE_CATEGORY_ORDER.map((category) => {
          const experiences = RESUME_DATA.experienceByCategory[category] || [];
          const relevantExperiences = experiences.filter((exp) =>
            featuredIds.has(exp.id) || category === "founder"
          );
          if (relevantExperiences.length === 0) return null;

          return (
            <div key={category} className="space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                {EXPERIENCE_CATEGORY_LABELS[category]}
              </h3>
              <div className="space-y-3">
                {relevantExperiences.map((exp) => (
                  <ExperienceCard key={exp.id} exp={exp} version={version} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectsSection({ version }: { version: CVVersion }) {
  const featuredIds = new Set(CV_VERSIONS[version].featuredProjectIds);

  return (
    <Section className="print-force-new-page scroll-mb-16">
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {RESUME_DATA.flagshipProjects
          .filter((p) => featuredIds.has(p.id))
          .map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.techStack.slice(0, 5)}
              link={project.link?.href}
              logo={project.logo}
            />
          ))}
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section>
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <div className="space-y-3">
        {RESUME_DATA.education.map((education) => (
          <Card key={education.school}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">{education.school}</h3>
                <div className="text-sm tabular-nums text-muted-foreground">
                  {education.start} - {education.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">{education.degree}</CardContent>
            {education.highlights && (
              <CardContent className="mt-2 space-y-1 text-xs text-muted-foreground">
                <ul className="pl-4 marker:text-primary/50 space-y-1">
                  {education.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}

function CVVersionSelector({ currentVersion, onChange }: { currentVersion: CVVersion; onChange: (v: CVVersion) => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 print:hidden">
      <div className="bg-card border border-border rounded-lg shadow-lg p-2">
        <label className="block text-xs font-medium text-muted-foreground mb-1">
          CV Version
        </label>
        <select
          value={currentVersion}
          onChange={(e) => onChange(e.target.value as CVVersion)}
          className="bg-background border border-input rounded px-2 py-1 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {Object.entries(CV_VERSIONS).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function Page() {
  const [cvVersion, setCvVersion] = useState<CVVersion>(DEFAULT_CV_VERSION);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cv-version") as CVVersion | null;
    if (saved && CV_VERSIONS[saved]) {
      setCvVersion(saved);
    }
  }, []);

  const handleVersionChange = (version: CVVersion) => {
    setCvVersion(version);
    localStorage.setItem("cv-version", version);
  };

  const config = CV_VERSIONS[cvVersion];
  const personal = RESUME_DATA.personal;

  return (
    <>
      <JsonLdScript data={RESUME_DATA.jsonLd.person} />
      {RESUME_DATA.jsonLd.projects.map((proj, i) => (
        <JsonLdScript key={i} data={proj} />
      ))}

      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 pb-24">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{personal.name}</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-primary">
                {config.headline}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={personal.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="h-3 w-3" />
                  {personal.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {personal.contact.email ? (
                  <Button className="h-8 w-8" variant="outline" size="icon" asChild>
                    <a href={`mailto:${personal.contact.email}`}>
                      <MailIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {personal.contact.tel ? (
                  <Button className="h-8 w-8" variant="outline" size="icon" asChild>
                    <a href={`tel:${personal.contact.tel}`}>
                      <PhoneIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {personal.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                {personal.contact.email ? (
                  <a href={`mailto:${personal.contact.email}`}>
                    <span className="underline">{personal.contact.email}</span>
                  </a>
                ) : null}
                {personal.contact.tel ? (
                  <a href={`tel:${personal.contact.tel}`}>
                    <span className="underline">{personal.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="h-28 w-28 flex-shrink-0">
              <AvatarImage alt={personal.name} src={personal.avatarUrl} />
              <AvatarFallback>{personal.initials}</AvatarFallback>
            </Avatar>
          </div>

          {/* Professional Summary */}
          <Section>
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground leading-relaxed">
              {config.summary}
            </p>
          </Section>

          {/* Skills */}
          <SkillsSection version={cvVersion} />

          {/* Experience */}
          <ExperienceSection version={cvVersion} />

          {/* Projects */}
          <ProjectsSection version={cvVersion} />

          {/* Education */}
          <EducationSection />
        </section>

        {/* Command Menu */}
        <CommandMenu
          links={[
            { url: personal.personalWebsiteUrl, title: "Personal Website" },
            ...personal.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        />

        {/* CV Version Selector */}
        <CVVersionSelector currentVersion={cvVersion} onChange={handleVersionChange} />
      </main>
    </>
  );
}