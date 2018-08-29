import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section";

const AboutPage = () => (
  <Layout>
    <Section>
      <h1 className="my-p1 font-forma-display font-medium text-lg md:text-xl">
        The places I've been to are highlighted; everything else is on my list.
      </h1>
    </Section>
    <Section>
      <p className="text-justify md:text-lg text-foreground-faded leading-tight">
        Afghanistan <span className="text-foreground">Albania</span> Algeria
        Andorra Angola Antigua and Barbuda Argentina Armenia{" "}
        <span className="text-foreground">Australia</span> Austria Azerbaijan
        Bahamas Bahrain Bangladesh Barbados Belarus Belgium Belize Benin Bhutan
        Bolivia Bosnia and Herzegovina Botswana Brazil{" "}
        <span className="text-foreground">Brunei</span> Bulgaria Burkina Faso
        Burundi Cabo Verde <span className="text-foreground">Cambodia</span>{" "}
        Cameroon Canada Central African Republic Chad Chile China Colombia
        Comoros Democratic Republic of the Congo Republic of the Congo Costa
        Rica Cote d'Ivoire <span className="text-foreground">Croatia</span> Cuba
        Cyprus Czech Republic <span className="text-foreground">Denmark</span>{" "}
        Djibouti Dominica Dominican Republic Ecuador{" "}
        <span className="text-foreground">Egypt</span> El Salvador Equatorial
        Guinea Eritrea Estonia Eswatini Ethiopia{" "}
        <span className="text-foreground">Fiji</span> Finland{" "}
        <span className="text-foreground">France</span> Gabon Gambia Georgia
        Germany Ghana <span className="text-foreground">Greece</span> Grenada
        Guatemala Guinea Guinea-Bissau Guyana Haiti Honduras Hungary{" "}
        <span className="text-foreground">Iceland India Indonesia</span> Iran
        Iraq Ireland Israel <span className="text-foreground">Italy</span>{" "}
        Jamaica <span className="text-foreground">Japan Jordan</span> Kazakhstan
        Kenya Kiribati Kosovo Kuwait Kyrgyzstan{" "}
        <span className="text-foreground">Laos</span> Latvia Lebanon Lesotho
        Liberia Libya Liechtenstein Lithuania Luxembourg{" "}
        <span className="text-foreground">Macedonia</span> Madagascar Malawi
        Malaysia Maldives Mali Malta Marshall Islands Mauritania Mauritius
        Mexico Micronesia Moldova Monaco Mongolia{" "}
        <span className="text-foreground">Montenegro</span> Morocco Mozambique
        Myanmar Namibia Nauru{" "}
        <span className="text-foreground">
          Nepal Netherlands New Zealand Norway
        </span>{" "}
        Oman Pakistan Palau Palestine Panama Papua New Guinea Paraguay Peru
        Philippines Poland Portugal Qatar Romania Russia Rwanda Saint Kitts and
        Nevis Saint Lucia Saint Vincent and the Grenadines Samoa San Marino Sao
        Tome and Principe Saudi Arabia Senegal Serbia Seychelles Sierra Leone{" "}
        <span className="text-foreground">Singapore</span> Slovakia{" "}
        <span className="text-foreground">Slovenia</span> Solomon Islands
        Somalia South Africa South Korea South Sudan{" "}
        <span className="text-foreground">Spain</span> Sri Lanka Sudan Suriname
        Swaziland <span className="text-foreground">Sweden</span> Switzerland
        Syria Taiwan Tajikistan Tanzania{" "}
        <span className="text-foreground">Thailand</span> Timor-Leste Togo Tonga
        Trinidad and Tobago Tunisia{" "}
        <span className="text-foreground">Turkey</span> Turkmenistan Tuvalu
        Uganda Ukraine{" "}
        <span className="text-foreground">United Arab Emirates</span> United
        Kingdom{" "}
        <span className="text-foreground">United States of America</span>{" "}
        Uruguay Uzbekistan{" "}
        <span className="text-foreground">Vanuatu Vatican City</span> Venezuela{" "}
        <span className="text-foreground">Vietnam</span> Yemen
        Zambia&nbsp;Zimbabwe
      </p>
    </Section>
  </Layout>
);

export default AboutPage;
