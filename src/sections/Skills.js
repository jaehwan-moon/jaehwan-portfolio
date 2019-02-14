import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import SkillIcon from '../components/SkillIcon';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CARD_HEIGHT = '100px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Skill = ({
  skillName,
  fontAwesomeIcon,
}) => (
  <Card p={0}>
    <Flex 
      style={{ height: CARD_HEIGHT }}
      flexDirection="column"
      alignItems="center"t
      justifyContent="center"
      p={1}>
      <Box width={1/2}>
        <SkillIcon skillName={fontAwesomeIcon} />
      </Box>
      <Text width="100px" textAlign="center">
        {skillName}
      </Text>
    </Flex>
  </Card>
);

Skill.propTypes = {
  skillName: PropTypes.string.isRequired,
  fontAwesomeIcon: PropTypes.string.isRequired,  
};

const Skills = () => (
  <Section.Container id="skills" Background={Background}>
    <Section.Header name="Skills" icon="💻" Box="notebook" />
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          contentfulAbout {
            skills {
              id
              skillName
              fontAwesomeIcon
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="150px">
          {contentfulAbout.skills.map((p, i) => (
            <Fade key={p.id} bottom delay={i * 200}>
              <Skill {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Skills;