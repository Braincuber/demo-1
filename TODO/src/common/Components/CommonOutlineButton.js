//import liraries
import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaleSize } from "../Utils/constant";
import PropTypes from "prop-types";

// create a component
const CommonOutlineButton = ({
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
      <Text style={[styles.loginButton, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  loginButtonContainer: {
    // backgroundColor: COLORS.Theme,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.Outline,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scaleSize(12),
    paddingHorizontal: scaleSize(12),
    borderRadius: scaleSize(100),
  },
  loginButton: {
    color: COLORS.TextBlue,
    fontFamily: FONTS.RBold,
    fontSize: scaleSize(14),
  },
  image: {
    height: scaleSize(18),
    width: scaleSize(18),
    marginRight: scaleSize(8),
  },
});

CommonOutlineButton.propTypes = {
  label: PropTypes.string,
  buttonStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  onPress: PropTypes.func,
  icon: PropTypes.any,
  iconColor: PropTypes.string,
};

//make this component available to the app
export default CommonOutlineButton;
