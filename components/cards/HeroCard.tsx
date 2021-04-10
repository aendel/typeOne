import React from 'react';
import {Card} from 'react-native-paper';
import {SvgProps} from 'react-native-svg';
import {guestStyle} from '../../routes/guest/styles/style';
import {
  DEFAULT_UNDRAW_HEIGHT,
  DEFAULT_UNDRAW_WIDTH,
} from '../../styles/constants';

interface IHeroCardProps {
  svgImage: React.FC<SvgProps>;
}

const svgProps: React.PropsWithChildren<SvgProps> = {
  width: DEFAULT_UNDRAW_WIDTH,
  height: DEFAULT_UNDRAW_HEIGHT,
};

const HeroCard: React.FC<IHeroCardProps> = (props) => {
  const {svgImage} = props;
  return (
    <Card style={guestStyle.heroImageContainer}>
      <Card.Content>{svgImage(svgProps)}</Card.Content>
    </Card>
  );
};

export default HeroCard;
