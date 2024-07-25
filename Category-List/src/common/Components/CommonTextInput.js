import React, { useRef, useImperativeHandle, forwardRef } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "../Utils/fonts";
import { COLORS } from "../Utils/Colors";
import PropTypes from "prop-types";
import { IMAGE } from "../Utils/image";
import { scaleSize } from "../Utils/constant";

const { height } = Dimensions.get("window");

const CommonTextInput = forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      textInputStyle,
      icon,
      componentStyle,
      isPassword = false,
      onSubmitEditing,
      returnKeyType,
      keyboardType,
      autoCapitalize,
      extraIconStyle,
    },
    ref
  ) => {
    const textInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      },
    }));

    return (
      <View style={componentStyle}>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={textInputRef}
            style={[styles.textInput, textInputStyle]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={COLORS.TextGrey}
            secureTextEntry={isPassword}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              onChangeText("");
              Keyboard.dismiss();
            }}
            disabled={value.length === 0}
          >
            <Image
              source={value.length > 0 ? IMAGE.Cross : icon}
              style={[
                extraIconStyle,
                {
                  height: value.length > 0 ? scaleSize(14) : scaleSize(16),
                  width: value.length > 0 ? scaleSize(14) : scaleSize(16),
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: RFValue(6),
    // paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(17, height),
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
    fontSize: RFValue(18, height),
    marginHorizontal: RFValue(4, height),
  },
  textInputContainer: {
    borderRadius: RFValue(6),
    paddingHorizontal: RFValue(8),
    backgroundColor: COLORS.GreyBackground,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputHeading: {
    color: COLORS.Black,
    fontFamily: FONTS.Medium,
    fontSize: RFValue(16),
    marginBottom: RFValue(4),
  },
});

CommonTextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  textInputStyle: PropTypes.object,
  icon: PropTypes.any,
  componentStyle: PropTypes.object,
  isPassword: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  extraIconStyle: PropTypes.object,
};

export default CommonTextInput;
