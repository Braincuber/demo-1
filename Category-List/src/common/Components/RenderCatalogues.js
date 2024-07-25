import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaleSize } from "../Utils/constant";
import PropTypes from "prop-types";

export default function RenderCatalogues({
  item,
  index,
  onPress,
  isSelected,
  image,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        onPress(item);
      }}
      key={item?.id}
      style={styles.container}
    >
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: isSelected ? COLORS.GreyBackground : COLORS.White,
            borderWidth: isSelected ? 1 : 0,
          },
        ]}
      >
        <Image source={image} style={styles.logoIMage} resizeMode="contain" />
      </View>
      <Text style={styles.titleText}>{item?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: scaleSize(12),
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
  },
  container: {
    alignItems: "center",
    marginVertical: scaleSize(10),
  },
  logoIMage: {
    height: scaleSize(40),
    width: scaleSize(40),
  },
  imageContainer: {
    height: scaleSize(60),
    width: scaleSize(60),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.GreyBackground,
    borderRadius: scaleSize(30),
    borderColor: COLORS.TextGrey,
    marginBottom: scaleSize(4),
  },
});

RenderCatalogues.propTypes = {
  item: PropTypes.any,
  index: PropTypes.number,
  onPress: PropTypes.func,
  isSelected: PropTypes.bool,
  image: PropTypes.any,
};
