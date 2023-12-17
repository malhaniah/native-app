import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import Input from "./components/Input";
import DisplayList from "./components/DisplayList";

export default function App() {
  interface IGoal {
    text: string;
    key: string;
  }

  const [goal, setGoal] = useState<string>("");
  const [courseGoal, setCourseGoal] = useState<Array<IGoal>>([]);
  const [modelVisible, setModelVisible] = useState<boolean>(false);

  const handleInput = (target: string) => {
    setGoal(target);
  };

  const handleAddGoal = () => {
    setCourseGoal((prevCourseGoal) => [
      ...prevCourseGoal,
      { text: goal, key: Math.random().toString() },
    ]);
    setGoal("");
    handleModelVisible();
  };

  const handleDeleteGoal = (id: string) => {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.key !== id.toString());
    });
  };

  const handleModelVisible = () => {
    setModelVisible((prevModelVisible) => !prevModelVisible);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={handleModelVisible} />
      <Input
        onAddItem={handleAddGoal}
        onEnterInput={handleInput}
        onCancel={handleModelVisible}
        text={goal}
        modelVisible={modelVisible}
      />
      <DisplayList
        deleteFunctionHandler={handleDeleteGoal}
        ListItem={courseGoal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
