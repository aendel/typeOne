import React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import {ViewPageStyle} from '../../styles/theme';
import GlucoseAddFab from '../fabs/glucoseFab';

interface IViewPageProps {
  children?: React.ReactNode;
  title: React.ReactNode;
}

const ViewPage: React.FC<IViewPageProps> = (props) => {
  return (
    <>
      <View style={ViewPageStyle.body}>
        <Title>{props.title}</Title>
        {props.children}
      </View>
    </>
  );
};

export default ViewPage;
