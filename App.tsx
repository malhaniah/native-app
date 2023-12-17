import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState<string>("");
  const [courseGoal, setCourseGoal] = useState<Array<string>>([]);

  const handleInput = (target: string) => {
    setGoal(target);
  };

  const handleAddGoal = () => {
    setCourseGoal((prevCourseGoal) => [...prevCourseGoal, goal]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Enter your goal"
          onChangeText={handleInput}
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>
      <View shouldRasterizeIOS style={styles.goalsContainer}>
        <ScrollView>
          {courseGoal.map((goal, index) => (
            <View key={index} style={styles.goalWrapper}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    flex: 1,
    marginBottom: 20,
    borderBottomColor: "#ccc",
  },
  inputs: {
    width: "70%",
    height: 50,
    fontSize: 16,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  goalsContainer: {
    flex: 4,
  },
  goalWrapper: {
    backgroundColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  goalText: {
    fontSize: 16,
    color: "#111",
  },
});
