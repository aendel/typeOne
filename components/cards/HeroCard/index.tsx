import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import {SvgProps} from 'react-native-svg';
import {guestStyle} from '../../../routes/guest/style';
import {
  DEFAULT_UNDRAW_HEIGHT,
  DEFAULT_UNDRAW_WIDTH,
} from '../../../styles/constants';

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
    <View style={guestStyle.heroImageContainer}>
      <Card style={guestStyle.heroImage}>
        <Card.Content>{svgImage(svgProps)}</Card.Content>
      </Card>
    </View>
  );
};

export default HeroCard;
