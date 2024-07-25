// TabBar.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scaleSize } from "../Utils/constant";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import PropTypes from "prop-types";

const TabBar = ({ tabs, onTabPress, activeIndex }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={tab}
          style={[styles.tabBar]}
          onPress={() => onTabPress(index)}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  color: index === activeIndex ? COLORS.Black : COLORS.TextGrey,
                },
              ]}
            >
              {tab}
            </Text>
            {index === activeIndex && (
              <View
                style={{
                  width: scaleSize(100),
                  height: scaleSize(2),
                  backgroundColor: COLORS.Black,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GreyBackground,
    flexDirection: "row",
  },
  tabBar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.SemiBold,
    fontSize: scaleSize(16),
    paddingVertical: scaleSize(10),
  },
});

//Props types
TabBar.propTypes = {
  tabs: PropTypes.any,
  onTabPress: PropTypes.func,
  activeIndex: PropTypes.any,
};

export default TabBar;
