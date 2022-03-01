import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {isFlipped: new Set() };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    return (e) => {
      e.preventDefault();
      let isFlipped = new Set(this.state.isFlipped);
      if (isFlipped.has(id)) {
        isFlipped.delete(id);
      } else {
        isFlipped.add(id);
      }
      this.setState({ isFlipped });
    };
  }

  render() {
    return (
      <Section nopadding id='projects'>
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <div class= "boxed">
        <GridContainer>
          {projects.map(({id, image, title, description, tags, source, visit}) => (
            
            <ReactCardFlip isFlipped={this.state.isFlipped.has(id)} flipDirection="horizontal">
            <BlogCard  key={id} onClick={this.handleClick(id)}>
                {/* FRONT */}
                <Img src={image}/>
                {/* FRONT*/}
            </BlogCard>
            <BlogCard>
                {/* BACK */}
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo  key={id} onClick={this.handleClick(id)}>{description}</CardInfo>
                <div>
                <TitleContent></TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
                </div>
                  <UtilityList>
                    <ExternalLinks href={visit}>Code</ExternalLinks>
                  </UtilityList>
            </BlogCard>
                {/* BACK*/}
            </ReactCardFlip>
          ))}
        </GridContainer>
        </div>
      </Section>
    );
  }
}
export default Projects;
