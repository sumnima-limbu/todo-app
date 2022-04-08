import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Button,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (enteredText) => {
    setText(enteredText);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo ..."
        onChangeText={changeHandler}
      />

      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="#026670"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
