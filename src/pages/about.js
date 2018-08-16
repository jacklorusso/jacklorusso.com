import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section";

const AboutPage = () => (
  <Layout>
    <Section>
      <div>
        <h1 className="text-xl md:text-2xl md:max-w-80 my-p5 font-medium leading-normal">
          About me
        </h1>
        <p className="max-w-p13">
          When I'm not building products or tinkering with side projects, you'll
          either find me in one of Sydney's vegan cafes or doing my best to
          spend some time in nature. Whenever we can, my partner and I go on
          road trips or spend a weekend camping — it's nice to get out of the
          city some times!
        </p>
      </div>
    </Section>
    <Section>
      <h2>What I’m doing now</h2>
      <h3>Traveling!</h3>
      <p>6-8 months. 20-22 countries.</p>
      <h3>Reading</h3>
      <p>The Power of Now</p>
      <p>Why I'm No Longer Talking to White People About Race</p>
      <p>SMACSS</p>
      <h3>Writing</h3>
      <p>Design is a process, not a job title.</p>
      <h3>Side projects</h3>
    </Section>
  </Layout>
);

export default AboutPage;
