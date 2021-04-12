import React from 'react';
import {StatusBar, View} from 'react-native';
import {Title} from 'react-native-paper';
import {ViewPageStyle} from '../../styles/theme';

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
        <StatusBar />
      </View>
    </>
  );
};

export default ViewPage;
