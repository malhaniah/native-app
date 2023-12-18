import { StyleSheet, TextInput, Button, View, Modal } from "react-native";
import React from "react";

interface IInput {
  onEnterInput: (target: string) => void;
  onAddItem: () => void;
  onCancel: () => void;
  text: string;
  modelVisible?: boolean;
}

export default function Input({
  onEnterInput,
  onAddItem,
  onCancel,
  text,
  modelVisible,
}: IInput) {
  return (
    <Modal visible={modelVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Enter your goal"
          onChangeText={onEnterInput}
          value={text}
          placeholderTextColor="#fff"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Cancel" onPress={onCancel} color="#eb4034" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Add Goal" onPress={onAddItem} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    borderBottomWidth: 1,
    flex: 1,
    paddingHorizontal: 20,
  },
  inputs: {
    width: "100%",
    height: 50,
    fontSize: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 10,
    gap: 10,
  },
  buttonWrapper: {
    width: "50%",
  },
  cancelButton: {
    backgroundColor: "red",
  },
});
