//import liraries
import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaleSize } from "../Utils/constant";
import PropTypes from "prop-types";

// create a component
const CommonButton = ({
  label,
  buttonStyle,
  labelStyle,
  onPress,
  icon,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.loginButtonContainer, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon && (
        <Image
          source={icon}
          style={[styles.image, { tintColor: iconColor }]}
          resizeMode="contain"
        />
      )}
      {label && <Text style={[styles.loginButton, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  loginButtonContainer: {
    backgroundColor: COLORS.Theme,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scaleSize(22),
    borderRadius: scaleSize(100),
  },
  loginButton: {
    color: COLORS.White,
    fontFamily: FONTS.RMedium,
    fontSize: scaleSize(18),
  },
  image: {
    height: scaleSize(18),
    width: scaleSize(18),
    marginRight: scaleSize(10),
  },
});

CommonButton.propTypes = {
  label: PropTypes.string,
  buttonStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  onPress: PropTypes.func,
  icon: PropTypes.any,
  iconColor: PropTypes.string,
};

//make this component available to the app
export default CommonButton;
