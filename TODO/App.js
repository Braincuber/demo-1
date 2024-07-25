//import liraries
import React from "react";
import { View, StyleSheet, LogBox, SafeAreaView } from "react-native";
import Router from "./src/screens/Router";
import { SafeAreaProvider } from "react-native-safe-area-context";

// create a component
const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaView />
        <Router />
      </View>
    </SafeAreaProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
