import type { Schema, Struct } from '@strapi/strapi';

export interface AboutValueItem extends Struct.ComponentSchema {
  collectionName: 'components_about_value_items';
  info: {
    description: 'Mission or core value detail';
    displayName: 'Value Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonContactChannel extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_channels';
  info: {
    description: 'Primary contact method';
    displayName: 'Contact Channel';
  };
  attributes: {
    channelType: Schema.Attribute.Enumeration<
      ['phone', 'email', 'office', 'whatsapp', 'form']
    > &
      Schema.Attribute.DefaultTo<'phone'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_common_cta_cards';
  info: {
    description: 'Call-to-action with supporting copy';
    displayName: 'CTA Card';
  };
  attributes: {
    body: Schema.Attribute.Text;
    primaryAction: Schema.Attribute.Component<'common.cta-link', false>;
    secondaryAction: Schema.Attribute.Component<'common.cta-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonCtaLink extends Struct.ComponentSchema {
  collectionName: 'components_common_cta_links';
  info: {
    description: 'Call-to-action link';
    displayName: 'CTA Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonListItem extends Struct.ComponentSchema {
  collectionName: 'components_common_list_items';
  info: {
    description: 'Reusable bullet point';
    displayName: 'List Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonMediaBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_media_blocks';
  info: {
    description: 'Image or video with caption';
    displayName: 'Media Block';
  };
  attributes: {
    altText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface CommonStat extends Struct.ComponentSchema {
  collectionName: 'components_common_stats';
  info: {
    description: 'Key performance metric';
    displayName: 'Stat';
  };
  attributes: {
    description: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomepageCaseStudiesSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_case_studies_sections';
  info: {
    description: 'Selected success stories';
    displayName: 'Case Studies Section';
  };
  attributes: {
    caseStudies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    cta: Schema.Attribute.Component<'common.cta-card', false>;
    heading: Schema.Attribute.Component<'homepage.section-heading', false>;
  };
}

export interface HomepageClientsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_clients_sections';
  info: {
    description: 'Trusted clients logos';
    displayName: 'Clients Section';
  };
  attributes: {
    clients: Schema.Attribute.Relation<'oneToMany', 'api::client.client'>;
    heading: Schema.Attribute.Component<'homepage.section-heading', false>;
  };
}

export interface HomepageContactSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_contact_sections';
  info: {
    description: 'Contact summary for homepage';
    displayName: 'Contact Section';
  };
  attributes: {
    channels: Schema.Attribute.Component<'common.contact-channel', true>;
    heading: Schema.Attribute.Component<'homepage.section-heading', false>;
    primaryAction: Schema.Attribute.Component<'common.cta-card', false>;
    summary: Schema.Attribute.Text;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    description: 'Homepage hero configuration';
    displayName: 'Hero';
  };
  attributes: {
    backgroundMedia: Schema.Attribute.Media<'images' | 'videos'>;
    badge: Schema.Attribute.String;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    primaryAction: Schema.Attribute.Component<'common.cta-link', false>;
    secondaryAction: Schema.Attribute.Component<'common.cta-link', false>;
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
    subheadline: Schema.Attribute.Text;
  };
}

export interface HomepageSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_homepage_section_headings';
  info: {
    description: 'Reusable heading block';
    displayName: 'Section Heading';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_services_sections';
  info: {
    description: 'Featured security services';
    displayName: 'Services Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.cta-card', false>;
    heading: Schema.Attribute.Component<'homepage.section-heading', false>;
    lead: Schema.Attribute.Text;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface HomepageStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_stats_sections';
  info: {
    description: 'Proof points and numbers';
    displayName: 'Stats Section';
  };
  attributes: {
    heading: Schema.Attribute.Component<'homepage.section-heading', false>;
    stats: Schema.Attribute.Component<'shared.stat-item', true>;
  };
}

export interface HomepageTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials_sections';
  info: {
    description: 'Client feedback carousel';
    displayName: 'Testimonials Section';
  };
  attributes: {
    heading: Schema.Attribute.Component<'homepage.section-heading', false>;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface HomepageWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_homepage_why_choose_sections';
  info: {
    description: 'Reasons to choose the company';
    displayName: 'Why Choose';
  };
  attributes: {
    heading: Schema.Attribute.Component<'homepage.section-heading', false>;
    mediaBlock: Schema.Attribute.Component<'common.media-block', false>;
    reasons: Schema.Attribute.Component<'common.list-item', true>;
  };
}

export interface SecurityHighlight extends Struct.ComponentSchema {
  collectionName: 'components_security_highlights';
  info: {
    description: 'Value proposition for a security service';
    displayName: 'Highlight';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SecurityServiceOption extends Struct.ComponentSchema {
  collectionName: 'components_security_service_options';
  info: {
    description: 'Specific coverage tier or package';
    displayName: 'Service Option';
  };
  attributes: {
    availability: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    pricingNote: Schema.Attribute.String;
    responseTime: Schema.Attribute.String;
  };
}

export interface ServiceFeatureBullet extends Struct.ComponentSchema {
  collectionName: 'components_service_feature_bullets';
  info: {
    description: 'Single bullet point for a service column';
    displayName: 'Feature Bullet';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ServiceFeatureColumn extends Struct.ComponentSchema {
  collectionName: 'components_service_feature_columns';
  info: {
    description: 'Column of service bullet points';
    displayName: 'Feature Column';
  };
  attributes: {
    columnTitle: Schema.Attribute.String;
    items: Schema.Attribute.Component<'service.feature-bullet', true>;
  };
}

export interface SharedEmailItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_email_items';
  info: {
    description: 'Labeled email contact';
    displayName: 'Email Item';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    label: Schema.Attribute.String;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: 'Highlight title, copy and icon';
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOpengraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_opengraphs';
  info: {
    description: 'Default Open Graph metadata';
    displayName: 'OpenGraph';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPhoneItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_phone_items';
  info: {
    description: 'Labeled phone contact';
    displayName: 'Phone Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Platform URL for footer or hero';
    displayName: 'Social Link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'Other']
    > &
      Schema.Attribute.DefaultTo<'Facebook'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    description: 'Numeric proof point';
    displayName: 'Stat Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_items';
  info: {
    description: 'Milestone in company journey';
    displayName: 'Timeline Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.value-item': AboutValueItem;
      'common.contact-channel': CommonContactChannel;
      'common.cta-card': CommonCtaCard;
      'common.cta-link': CommonCtaLink;
      'common.list-item': CommonListItem;
      'common.media-block': CommonMediaBlock;
      'common.stat': CommonStat;
      'contact.social-link': ContactSocialLink;
      'homepage.case-studies-section': HomepageCaseStudiesSection;
      'homepage.clients-section': HomepageClientsSection;
      'homepage.contact-section': HomepageContactSection;
      'homepage.hero': HomepageHero;
      'homepage.section-heading': HomepageSectionHeading;
      'homepage.services-section': HomepageServicesSection;
      'homepage.stats-section': HomepageStatsSection;
      'homepage.testimonials-section': HomepageTestimonialsSection;
      'homepage.why-choose': HomepageWhyChoose;
      'security.highlight': SecurityHighlight;
      'security.service-option': SecurityServiceOption;
      'service.feature-bullet': ServiceFeatureBullet;
      'service.feature-column': ServiceFeatureColumn;
      'shared.email-item': SharedEmailItem;
      'shared.feature-item': SharedFeatureItem;
      'shared.media': SharedMedia;
      'shared.opengraph': SharedOpengraph;
      'shared.phone-item': SharedPhoneItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.stat-item': SharedStatItem;
      'shared.timeline-item': SharedTimelineItem;
    }
  }
}
