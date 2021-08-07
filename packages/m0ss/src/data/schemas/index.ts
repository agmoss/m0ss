import { Organization, Person, WebSite, WithContext } from "schema-dts";

import { metaData } from "..";

export const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://m0ss.dev/",
    name: "Andrew Moss",
};

export const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: metaData.name,
    disambiguatingDescription: "Computer Programmer",
    jobTitle: "Computer Programmer",
    birthDate: "1995-10-18",
};

export const orgSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: metaData.url,
    logo: metaData.logo,
};
