//import liraries
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { scaleSize } from "../common/Utils/constant";
import { FONTS } from "../common/Utils/fonts";
import { COLORS } from "../common/Utils/Colors";
import { SCREENS } from "../common/Utils/Screens";
import { useNavigation } from "@react-navigation/native";
/**
 * Splash screen component.
 * This component is displayed while the app is loading.
 * It displays the text "Splash" in the center of the screen.
 */
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.Home);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cateory App</Text>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.White,
  },
  text: {
    fontSize: scaleSize(44),
    fontFamily: FONTS.RMedium,
    textDecorationLine: "underline",
  },
});

//make this component available to the app
export default Splash;
