//import liraries
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { scaleSize } from "../common/Utils/constant";
import { FONTS } from "../common/Utils/fonts";
import { COLORS } from "../common/Utils/Colors";
import CataloguesComponent from "../common/Components/CataloguesComponent";
import { CategolguesData } from "../assets/json/data";
import TabBar from "../common/Components/TabBar";
import ProductComponent from "../common/Components/ProductComponent";
import Services from "../common/Components/Services";
/**
 * Welcome screen component.
 * This component is displayed first when the app is launched.
 * It displays the text "Welcome" in the center of the screen.
 */
const Home = () => {
  const Tabs = ["Products", "Services"];
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedStore, setSelectedStore] = useState(CategolguesData[0]);

  return (
    <View style={styles.container}>
      <CataloguesComponent
        onPress={setSelectedStore}
        data={CategolguesData}
        selectedStore={selectedStore}
      />
      <View style={styles.sideContainer}>
        <TabBar
          tabs={Tabs}
          onTabPress={setSelectedTab}
          activeIndex={selectedTab}
        />
        {
          {
            0: (
              <ProductComponent
                data={selectedStore.subCategories}
                selectedStore={selectedStore}
              />
            ),
            1: <Services />,
          }[selectedTab]
        }
      </View>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.White,
  },
  text: {
    fontSize: scaleSize(20),
    fontFamily: FONTS.Medium,
  },
  sideContainer: {
    flex: 1,
    zIndex: -1,
  },
});

//make this component available to the app
export default Home;
