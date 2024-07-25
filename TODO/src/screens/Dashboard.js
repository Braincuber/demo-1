// components/Dashboard.js
import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  LayoutAnimation,
  Alert,
  SectionList,
} from "react-native";
import { scaleSize } from "../common/Utils/constant";
import { FONTS } from "../common/Utils/fonts";
import { COLORS } from "../common/Utils/Colors";
import CommonButton from "../common/Components/CommonButton";
import CommonTextInput from "../common/Components/CommonTextInput";
import { IMAGE } from "../common/Utils/image";
import RenderTodoComponent from "../common/Components/RenderTodoComponent";
import moment from "moment";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();
  const [isAddTask, setIsAddTask] = useState(false);

  const [text, setText] = useState("");
  const addTask = () => {
    if (text.trim() === "") {
      alert("Please enter task");
      return;
    }
    const newTask = { id: Date.now(), text: text.trim(), completed: false };
    setTasks([newTask, ...tasks]);
    setText("");
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const deleteTask = (id) => {
    Alert.alert("Are you sure, you want to delete this task?", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setTasks(tasks.filter((task) => task.id !== id));
        },
      },
    ]);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsAddTask(!isAddTask);
    setText("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  const groupByCreatedDate = (data) => {
    return data?.reduce((acc, current) => {
      const date = moment(data?.id).format("YYYY-MM-DD"); // Extract date from createdDate
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(current);
      return acc;
    }, {});
  };

  const tasksByDate = groupByCreatedDate(tasks);

  const sectionListData = Object.keys(tasksByDate).map((date) => {
    return {
      title: date,
      data: tasksByDate[date],
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Todo List</Text>

      {isAddTask && (
        <View style={styles.addTaskContainer}>
          <CommonTextInput
            ref={inputRef}
            componentStyle={styles.textInput}
            placeholder={"Enter Task"}
            value={text}
            onChangeText={setText}
            onSubmitEditing={() => {
              tasks.length == 0 && setIsAddTask(false);
            }}
          />
          <CommonButton
            icon={IMAGE.Plus}
            onPress={addTask}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      )}

      {tasks.length > 0 ? (
        <SectionList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          onScroll={() => {
            if (isAddTask) {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );
              setIsAddTask(false);
            }
          }}
          sections={sectionListData}
          renderSectionHeader={({ section: { title } }) => (
            <View
              key={title}
              style={{
                backgroundColor: COLORS.White,
              }}
            >
              <View style={styles.subContainer}>
                <Text style={styles.sectionText}>
                  {moment(title).format("ddd, DD/MM")}
                </Text>
              </View>
              <View style={styles.borderSection} />
            </View>
          )}
          renderItem={({ item }) => (
            <RenderTodoComponent
              key={item.id}
              task={item}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
            />
          )}
        />
      ) : (
        <View style={styles.emptyTask}>
          <Text style={styles.emptyTaskText}>
            Click on
            <Text style={{ fontFamily: FONTS.Bold, color: COLORS.Theme }}>
              {" "}
              + Add Task{" "}
            </Text>
            Button to add task
          </Text>
        </View>
      )}

      {!isAddTask && (
        <CommonButton
          icon={IMAGE.Plus}
          label={"Add Task"}
          onPress={handlePress}
          buttonStyle={styles.addTaskButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: scaleSize(20),
    paddingVertical: scaleSize(14),
  },
  headingText: {
    fontSize: scaleSize(30),
    fontFamily: FONTS.SemiBold,
    marginBottom: scaleSize(10),
    color: COLORS.Theme,
    textDecorationLine: "underline",
  },
  addTaskButton: {
    position: "absolute",
    bottom: scaleSize(50),
    right: scaleSize(20),
    paddingHorizontal: scaleSize(30),
  },
  addTaskContainer: {
    marginBottom: scaleSize(20),
    flexDirection: "row",
    alignItems: "center",
    marginTop: scaleSize(10),
  },
  emptyTask: {
    flex: 1,
    alignItems: "center",
    marginTop: scaleSize(100),
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.Outline,
    borderRadius: scaleSize(6),
  },
  contentContainerStyle: {
    paddingTop: scaleSize(20),
    paddingBottom: scaleSize(120),
  },
  emptyTaskText: {
    fontSize: scaleSize(18),
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
  },
  buttonStyle: {
    marginLeft: scaleSize(10),
    paddingLeft: scaleSize(20),
    paddingRight: scaleSize(10),
  },
  sectionText: {
    fontSize: scaleSize(16),
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
  },
  subContainer: {
    backgroundColor: COLORS.White,
    // paddingHorizontal: scaleSize(16),
    marginVertical: scaleSize(8),
  },
  borderSection: {
    borderWidth: 1,
    borderColor: COLORS.Grey,
  },
});
