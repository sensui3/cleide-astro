// Schemas centralizados para SEO e structured data
// src/utils/schemas.ts

export const clinicSameAs = [
  "https://share.google/Cc5TiToMQvi6ONl21",
  "https://www.doctoralia.com.br/cleide-salem-sarkis/psicologo-psicanalista/sao-paulo",
  "https://www.mundopsicologos.com/consultorios/cleide-salem-sarkis"
];

export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": "https://cleidesarkis.com.br/#clinic",
  "name": "Clínica de Psicologia Dra. Cleide Sarkis",
  "alternateName": "Dra. Cleide Salem Sarkis - Psicanalista e Psicóloga",
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
    "latitude": -23.5646118,
    "longitude": -46.650892
  },
  "hasMap": "https://share.google/Cc5TiToMQvi6ONl21",
  "url": "https://cleidesarkis.com.br",
  "telephone": "+5511998059125",
  "medicalSpecialty": ["Psychoanalysis"],
  "sameAs": clinicSameAs,
  "areaServed": [
    { "@type": "City", "name": "São Paulo" },
    { "@type": "AdministrativeArea", "name": "Bela Vista" },
    { "@type": "AdministrativeArea", "name": "Paraíso" },
    { "@type": "AdministrativeArea", "name": "Vila Mariana" },
    { "@type": "AdministrativeArea", "name": "Avenida Paulista" },
    { "@type": "AdministrativeArea", "name": "Jardins" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "13:00"
    }
  ]
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://cleidesarkis.com.br/sobre/#person",
  "name": "Dra. Cleide Salem Sarkis",
  "jobTitle": "Psicóloga Clínica e Psicanalista",
  "description": "Especialista em Psicanálise, Hipnose Clínica e Psicoterapia Transpessoal com mais de 35 anos de experiência clínica em São Paulo.",
  "url": "https://cleidesarkis.com.br/sobre/",
  "image": "https://cleidesarkis.com.br/cleide-sarkis.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 509 - Conj. 1513",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01311-000",
    "addressCountry": "BR"
  },
  "telephone": "+5511998059125",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Conselho Regional de Psicologia de São Paulo (CRP-06)"
    },
    "identifier": "CRP 06/05750"
  },
  "knowsAbout": [
    "Psicanálise",
    "Hipnose Clínica",
    "Psicoterapia Transpessoal",
    "Transtornos de Ansiedade",
    "Síndrome de Burnout",
    "Síndrome do Pânico",
    "Depressão",
    "Traumas Emocionais"
  ],
  "sameAs": clinicSameAs
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
    "@id": params.url ? `${params.url}#psychologist` : "https://cleidesarkis.com.br/#psychologist",
    "name": params.name || "Dra. Cleide Salem Sarkis - Psicanalista e Psicóloga",
    "image": "https://cleidesarkis.com.br/cleide-sarkis-atendimento.webp",
    "description": params.description || "Atendimento psicanalítico especializado na Avenida Paulista, São Paulo.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paulista, 509 - Conj. 1513",
      "addressLocality": params.addressLocality || "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01311-000",
      "addressCountry": "BR"
    },
    "hasMap": "https://share.google/Cc5TiToMQvi6ONl21",
    "url": params.url || "https://cleidesarkis.com.br/psicanalise-sao-paulo/",
    "telephone": "+5511998059125",
    "areaServed": params.areaServed
      ? {
          "@type": "AdministrativeArea",
          "name": params.areaServed
        }
      : undefined,
    "medicalSpecialty": ["Psychoanalysis"],
    "sameAs": clinicSameAs
  };
}

export function createContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - Dra. Cleide Salem Sarkis",
    "description": "Entre em contato com a Dra. Cleide Sarkis para agendar sua consulta de psicanálise em São Paulo ou online.",
    "url": "https://cleidesarkis.com.br/contato/",
    "mainEntity": clinicSchema
  };
}

export function createTherapySchema(therapyName: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": therapyName,
    "description": `Tratamento especializado com psicanálise e abordagens integradas na Avenida Paulista em São Paulo com a Dra. Cleide Sarkis.`,
    "medicalSpecialty": "Psychoanalysis",
    "availableService": {
      "@type": "MedicalBusiness",
      "name": "Clínica de Psicologia Dra. Cleide Sarkis",
      "url": url,
      "sameAs": clinicSameAs
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
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": params.title,
    "description": params.description,
    "author": {
      "@type": "Person",
      "@id": "https://cleidesarkis.com.br/sobre/#person",
      "name": "Dra. Cleide Salem Sarkis",
      "jobTitle": "Psicóloga Clínica e Psicanalista",
      "url": "https://cleidesarkis.com.br/sobre/"
    },
    "datePublished": params.datePublished,
    "dateModified": params.dateModified || params.datePublished,
    "url": params.url,
    "publisher": {
      "@type": "Organization",
      "name": "Clínica de Psicologia Dra. Cleide Sarkis",
      "url": "https://cleidesarkis.com.br",
      "logo": "https://cleidesarkis.com.br/cleide-sarkis-atendimento.webp"
    },
    "image": params.image || "https://cleidesarkis.com.br/cleide-sarkis-atendimento.webp"
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
