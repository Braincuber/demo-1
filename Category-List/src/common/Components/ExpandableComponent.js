import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaleSize } from "../Utils/constant";
import PropTypes from "prop-types";
import { IMAGE } from "../Utils/image";
import RenderStore from "./RenderStore";

export default function ExpandableComponent({ data, onPress, isSelected }) {
  const isHaveSubData = data?.subCategories?.length > 0;
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        disabled={!isHaveSubData}
        style={[
          styles.container,
          {
            borderBottomWidth: isSelected ? 0 : 1,
          },
        ]}
      >
        <View style={styles.nameContainer}>
          <Image
            source={data?.image ? data?.image : IMAGE.Logo}
            style={styles.catagoryImage}
            resizeMode="contain"
          />
          <Text numberOfLines={1} style={styles.title}>{`${data?.name}`}</Text>
        </View>
        {isHaveSubData && (
          <Image
            source={IMAGE.right}
            style={[
              styles.rightArrow,
              {
                transform: [{ rotate: isSelected ? "-90deg" : "0deg" }],
              },
            ]}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
      {isSelected && (
        <View>
          <RenderStore
            containerStyles={{ paddingTop: scaleSize(2) }}
            title={data?.name}
            isBorder={false}
          />

          {data?.subCategories?.map((item, index) => (
            <RenderStore
              title={item?.name}
              icon={IMAGE.chatgpt}
              key={item?.id}
              rightArrowStyle={{
                opacity: 0.4,
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: scaleSize(18),
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: scaleSize(14),
    borderTopWidth: 1,
    borderColor: COLORS.Grey,
    borderBottomWidth: 1,
  },
  rightArrow: {
    height: scaleSize(20),
    width: scaleSize(20),
  },
  catagoryImage: {
    height: scaleSize(35),
    width: scaleSize(35),
    marginRight: scaleSize(10),
    borderRadius: scaleSize(15),
  },
});

ExpandableComponent.propTypes = {
  data: PropTypes.any,
  onPress: PropTypes.func,
  isSelected: PropTypes.any,
};
