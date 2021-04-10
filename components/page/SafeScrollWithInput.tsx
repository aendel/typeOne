import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const SafeScrollWithInputPage = ({
  children,
}: {
  children: Array<React.ReactNode>;
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SafeScrollWithInputPage;
