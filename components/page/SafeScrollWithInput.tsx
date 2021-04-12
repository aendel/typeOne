import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const SafeScrollWithInputPage = ({
  children,
}: {
  children: Array<React.ReactNode>;
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1, justifyContent: 'space-around'}}>
          <ScrollView>{children}</ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SafeScrollWithInputPage;
