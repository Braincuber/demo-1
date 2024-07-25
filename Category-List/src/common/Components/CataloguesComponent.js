import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaleSize } from "../Utils/constant";
import PropTypes from "prop-types";
import RenderCatalogues from "./RenderCatalogues";

export default function CataloguesComponent({ data, onPress, selectedStore }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>Catalogues</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.subContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item, index) => {
          const isSelected = selectedStore?.id === item?.id;
          return (
            <RenderCatalogues
              isSelected={isSelected}
              onPress={onPress}
              item={item}
              key={item?.id}
              image={item?.image}
              index={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: scaleSize(16),
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
    paddingBottom: scaleSize(6),
    paddingTop: scaleSize(10),
  },
  container: {
    paddingHorizontal: scaleSize(12),
    backgroundColor: COLORS.White,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subContainer: {
    paddingBottom: scaleSize(20),
  },
});

CataloguesComponent.propTypes = {
  data: PropTypes.array,
  selectedStore: PropTypes.any,
  onPress: PropTypes.func,
};
