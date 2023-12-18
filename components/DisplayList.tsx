import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

interface IDisplayList {
  ListItem: Array<{ text: string; key: string }>;
  deleteFunctionHandler: (args: any) => void;
}

export default function DisplayList({
  ListItem,
  deleteFunctionHandler,
}: IDisplayList) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={ListItem}
        renderItem={(data) => {
          return (
            <View style={styles.goalWrapper}>
              <Pressable
                android_ripple={{ color: "#eee" }}
                onPress={() => deleteFunctionHandler(data.item.key)}
                style={({ pressed }) => pressed && styles.goalPressed}
              >
                <Text style={styles.goalText}>{data.item.text}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 4,
    padding: 10,
  },
  goalWrapper: {
    backgroundColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
  },
  goalPressed: {
    backgroundColor: "#eee",
  },
  goalText: {
    fontSize: 16,
    padding: 10,
    color: "#111",
  },
});
