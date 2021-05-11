import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './App/Navigation/AuthNavigation';

function App(props) {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

export default App;
