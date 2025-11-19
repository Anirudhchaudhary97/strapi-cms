interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  return (
    <div className="section-container py-24">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <h1 className="text-4xl font-semibold text-slate-900 capitalize">{params.slug.replace(/-/g, " ")}</h1>
        <p className="text-base text-slate-600">
          Detailed service content will be sourced from Strapi for <span className="font-semibold">{params.slug}</span>. This placeholder confirms the dynamic route is wired up.
        </p>
      </div>
    </div>
  );
}
