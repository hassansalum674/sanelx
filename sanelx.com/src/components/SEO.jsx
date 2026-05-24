import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "SanelX | Energy Intelligence Systems", 
  description = "SanelX is a leading energy intelligence company providing optimization, storage, and intelligent decision systems for modern energy infrastructure.",
  path = "",
  canonical,
  type = "website",
  image = "/sanelx_logo.webp",
  schemaData
}) => {
  const siteUrl = "https://sanelx.com";
  const url = canonical || `${siteUrl}${path}`;
  const fullImage = `${siteUrl}${image}`;

  // JSON-LD for Organization and WebSite to help Google generate Sitelinks/Rich Snippets
  const structData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SanelX",
    "url": siteUrl,
    "logo": fullImage,
    "description": description,
    "sameAs": [
      "https://twitter.com/sanelx",
      "https://linkedin.com/company/sanelx",
      "https://instagram.com/sanelx"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Energy Intelligence Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Energy Optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infrastructure Management"
          }
        }
      ]
    }
  };

  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SanelX",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || structData)}
      </script>
      {!schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(webSiteData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
