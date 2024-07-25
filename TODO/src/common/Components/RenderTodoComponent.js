// components/TodoItem.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { scaleSize } from "../Utils/constant";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import CommonOutlineButton from "./CommonOutlineButton";
import PropTypes from "prop-types";
import moment from "moment";

const RenderTodoComponent = ({ task, deleteTask, toggleCompleted }) => {
  return (
    <View style={styles.todoitem}>
      <CheckBox
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
      />
      <View style={{ flex: 1, marginLeft: scaleSize(10) }}>
        <Text style={[styles.todoitemtext, task.completed && styles.completed]}>
          {task.text}
        </Text>
        <Text style={styles.time}>
          {moment(task.id).format("h:mm a, MMMM Do")}
        </Text>
      </View>
      <CommonOutlineButton
        label={"Delete"}
        onPress={() => deleteTask(task.id)}
        buttonStyle={styles.deletebutton}
        labelStyle={styles.deletetext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoitem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(12),
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  todoitemtext: {
    flex: 1,
    fontSize: scaleSize(16),
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
  },
  completed: {
    textDecorationLine: "line-through",
    color: COLORS.TextGrey,
  },
  deletebutton: {
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(10),
    borderRadius: scaleSize(6),
    borderColor: COLORS.Red,
  },
  deletetext: {
    color: COLORS.Red,
    fontFamily: FONTS.SemiBold,
    fontSize: scaleSize(14),
  },
  checkbox: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  time: {
    color: COLORS.TextGrey,
    fontFamily: FONTS.Medium,
    fontSize: scaleSize(11),
  },
});

RenderTodoComponent.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  toggleCompleted: PropTypes.func,
};

export default RenderTodoComponent;
