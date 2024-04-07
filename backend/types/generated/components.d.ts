import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactLink extends Schema.Component {
  collectionName: 'components_contact_links';
  info: {
    displayName: 'Link';
    icon: '';
    description: '';
  };
  attributes: {
    RedSocial: Attribute.Enumeration<['Facebook', 'Instagram', 'X (Twitter)']> &
      Attribute.Required;
    Url: Attribute.String & Attribute.Required & Attribute.Unique;
    Logo: Attribute.Media & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.link': ContactLink;
    }
  }
}
