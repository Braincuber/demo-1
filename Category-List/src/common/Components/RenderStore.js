import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaleSize } from "../Utils/constant";
import PropTypes from "prop-types";
import { IMAGE } from "../Utils/image";

export default function RenderStore({
  title,
  isBorder = true,
  containerStyles,
  icon,
  onPress,
  rightArrowStyle,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={!onPress}
      style={[
        styles.storeContainer,
        containerStyles,
        {
          borderBottomWidth: isBorder ? 1 : 0,
          borderTopWidth: isBorder ? 1 : 0,
        },
      ]}
    >
      <View style={styles.nameContainer}>
        {icon && (
          <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
        )}
        <Text
          numberOfLines={1}
          style={styles.storeText}
        >{`${title} Store`}</Text>
      </View>
      <Image
        source={IMAGE.right}
        style={[styles.rightArrow, rightArrowStyle]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  storeText: {
    fontSize: scaleSize(14),
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
    flex: 1,
  },

  storeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: scaleSize(14),
    borderColor: COLORS.Grey,
  },

  rightArrow: {
    height: scaleSize(20),
    width: scaleSize(20),
    borderRadius: scaleSize(10),
  },
  iconStyle: {
    height: scaleSize(30),
    width: scaleSize(30),
    marginRight: scaleSize(10),
    borderRadius: scaleSize(15),
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
});

RenderStore.propTypes = {
  title: PropTypes.any,
  isBorder: PropTypes.bool,
  containerStyles: PropTypes.any,
  icon: PropTypes.any,
  onPress: PropTypes.func,
  rightArrowStyle: PropTypes.any,
};
