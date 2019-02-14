import React from 'react';
import PropTypes from 'prop-types';
import simpleIcons from 'simple-icons';
import styled from 'styled-components';

const Icon = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.color};
`;

const SkillIcon = ({ skillName, color }) => {
  const icon = simpleIcons[skillName];
  const iconColor = color ? color : `#${icon.hex}`;

  return <Icon color={iconColor} dangerouslySetInnerHTML={{ __html: icon.svg }} />;
};

SkillIcon.propTypes = {
  skillName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SkillIcon;
