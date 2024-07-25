import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { View, StyleSheet, TextInput, Image, Dimensions } from "react-native";
import { scaleSize } from "../Utils/constant";
import { FONTS } from "../Utils/fonts";
import { COLORS } from "../Utils/Colors";
import PropTypes from "prop-types";

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
          <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
          <TextInput
            ref={textInputRef}
            style={[styles.textInput, textInputStyle]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={COLORS.TextGrey}
            secureTextEntry={isPassword}
            onSubmitEditing={onSubmitEditing}
            onBlur={onSubmitEditing}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: scaleSize(6),
    paddingVertical: scaleSize(17),
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
    fontSize: scaleSize(18),
  },
  textInputContainer: {
    borderRadius: scaleSize(6),

    backgroundColor: COLORS.White,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputHeading: {
    color: COLORS.Black,
    fontFamily: FONTS.Medium,
    fontSize: scaleSize(16),
    marginBottom: scaleSize(4),
  },
  iconStyle: {
    height: scaleSize(16),
    width: scaleSize(16),
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
};

export default CommonTextInput;
