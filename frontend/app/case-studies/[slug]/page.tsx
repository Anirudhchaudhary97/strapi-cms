interface CaseStudyDetailPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  return (
    <div className="section-container py-24">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <h1 className="text-4xl font-semibold text-slate-900 capitalize">{params.slug.replace(/-/g, " ")}</h1>
        <p className="text-base text-slate-600">
          Expanded case study storytelling for <span className="font-semibold">{params.slug}</span> will display here once the CMS integration is complete.
        </p>
      </div>
    </div>
  );
}
