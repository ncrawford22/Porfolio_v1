import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
        <p>Welcome to my Portfolio. This site was built using React.JS and Next.JS.</p>
        </SectionText>
        <Button onClick={() => window.location = 'https://www.academypgh.com/program-developer-bootcamp'}>Learn how to Code</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;