// Schemas centralizados para SEO e structured data
// src/utils/schemas.ts

export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dra. Cleide Salem Sarkis - Psicanalista",
  "image": "https://cleidesarkis.com.br/cleide-sarkis-atendimento.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 509 - Conj. 1513",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01311-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.5615,
    "longitude": -46.6559
  },
  "url": "https://cleidesarkis.com.br",
  "telephone": "+5511998059125",
  "medicalSpecialty": ["Psychiatry", "Psychoanalysis"],
  "areaServed": [
    { "@type": "City", "name": "São Paulo" },
    { "@type": "AdministrativeArea", "name": "Bela Vista" },
    { "@type": "AdministrativeArea", "name": "Paraíso" },
    { "@type": "AdministrativeArea", "name": "Vila Mariana" },
    { "@type": "AdministrativeArea", "name": "Jardins" },
    { "@type": "AdministrativeArea", "name": "Zona Sul" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ]
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dra. Cleide Salem Sarkis",
  "jobTitle": "Psicanalista e Psicóloga Clínica",
  "description": "Especialista em Psicanálise, Hipnose Clínica e Abordagem Transpessoal com mais de 35 anos de experiência em São Paulo.",
  "url": "https://cleidesarkis.com.br/sobre/",
  "image": "https://cleidesarkis.com.br/cleide-sarkis.webp",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "telephone": "+5511998059125"
};

export function createPsychologistSchema(params: {
  name?: string;
  description?: string;
  url?: string;
  addressLocality?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "@id": params.url ? `${params.url}#psychologist` : undefined,
    "name": params.name || "Dra. Cleide Sarkis - Psicanalista",
    "image": "https://cleidesarkis.com.br/cleide-sarkis-atendimento.webp",
    "description": params.description || "Atendimento psicanalítico especializado em São Paulo.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paulista, 509 - Conj. 1513",
      "addressLocality": params.addressLocality || "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01311-000",
      "addressCountry": "BR"
    },
    "url": params.url || "https://cleidesarkis.com.br/psicanalise-sao-paulo/",
    "telephone": "+5511998059125",
    "areaServed": params.areaServed
      ? {
          "@type": "AdministrativeArea",
          "name": params.areaServed
        }
      : undefined,
    "medicalSpecialty": ["Psychiatry", "Psychoanalysis"]
  };
}

export function createContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - Dra. Cleide Salem Sarkis",
    "description": "Entre em contato com a Dra. Cleide Sarkis para agendar sua consulta de psicanálise em São Paulo ou online.",
    "url": "https://cleidesarkis.com.br/contato/"
  };
}

export function createTherapySchema(therapyName: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": therapyName,
    "description": `Tratamento especializado com psicanálise e técnicas integradas. Recupere sua saúde mental em São Paulo com a Dra. Cleide Sarkis.`,
    "medicalSpecialty": "Psychiatry",
    "availableService": {
      "@type": "MedicalBusiness",
      "name": "Dra. Cleide Sarkis",
      "url": url
    }
  };
}

export function createFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function createArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": params.title,
    "description": params.description,
    "author": {
      "@type": "Person",
      "name": "Dra. Cleide Salem Sarkis"
    },
    "datePublished": params.datePublished,
    "dateModified": params.dateModified,
    "url": params.url,
    "publisher": {
      "@type": "Person",
      "name": "Dra. Cleide Salem Sarkis",
      "url": "https://cleidesarkis.com.br"
    },
    "image": "https://cleidesarkis.com.br/cleide-sarkis-atendimento.webp"
  };
}

export function createItemListSchema(items: Array<{ name: string; url: string; description?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": item.url,
      "description": item.description || null
    }))
  };
}
