import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaleSize } from "../Utils/constant";
import PropTypes from "prop-types";

import CommonTextInput from "./CommonTextInput";
import { IMAGE } from "../Utils/image";
import RenderStore from "./RenderStore";
import ExpandableComponent from "./ExpandableComponent";

export default function ProductComponent({ data, selectedStore }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [filterData, setFilterData] = useState(data);

  const handleSearch = (text) => {
    setSearch(text);
    if (text === "") {
      setFilterData(data);
      setSelected([]);
      return;
    }
    const filteredData = data.map((item) => {
      return {
        ...item,
        subCategories: item.subCategories.filter((i) =>
          i.name.toLowerCase().includes(text.toLowerCase())
        ),
      };
    });
    const onlyData = filteredData.filter(
      (item) => item.subCategories.length > 0
    );
    setFilterData(onlyData);
    setSelected(onlyData.map((item) => item.id));
  };

  useEffect(() => {
    setSelected([]);
    setFilterData(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <CommonTextInput
        value={search}
        componentStyle={styles.componentStyle}
        onChangeText={handleSearch}
        textInputStyle={styles.textInputStyle}
        placeholder={"Enter Keyword and search..."}
        icon={IMAGE.Search}
        extraIconStyle={{
          tintColor: COLORS.TextGrey,
        }}
      />
      <RenderStore title={selectedStore.name} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Text style={styles.selectCategoryText}>Select Category</Text>
        {filterData?.map((item, index) => {
          const isSelected = selected.includes(item.id);
          return (
            <View key={item.id}>
              <ExpandableComponent
                onPress={() => {
                  if (selected.includes(item.id)) {
                    setSelected(selected.filter((i) => i !== item.id));
                  } else {
                    setSelected([...selected, item.id]);
                  }
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut
                  );
                }}
                isSelected={isSelected}
                data={item}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: scaleSize(14),
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
  },
  storeText: {
    fontSize: scaleSize(14),
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
  },
  componentStyle: {
    marginVertical: scaleSize(12),
    borderWidth: 1,
    borderColor: COLORS.Grey,
    borderRadius: scaleSize(6),
    marginHorizontal: scaleSize(12),
  },
  container: {
    backgroundColor: COLORS.White,
    flex: 1,
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
  storeContainer: {
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
  selectCategoryText: {
    fontSize: scaleSize(12),
    padding: scaleSize(12),
    fontFamily: FONTS.SemiBold,
    color: COLORS.TextGrey,
  },
  contentContainerStyle: {
    paddingBottom: scaleSize(30),
  },
});

ProductComponent.propTypes = {
  data: PropTypes.any,
  selectedStore: PropTypes.any,
};
