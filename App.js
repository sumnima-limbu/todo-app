import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header.js";
import TodoItem from "./components/TodoItem.js";
import AddTodo from "./components/AddTodo.js";
import Sandbox from "./components/Sandbox.js";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "practice react native", key: "1" },
    { text: "practice practice", key: "2" },
    { text: "and practice", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((oldTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...oldTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long!", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* add to do form */}
          <AddTodo submitHandler={submitHandler} />
          {/* to do form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edeae5",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
