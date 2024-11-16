import React from 'react';
import {ScrollView, StyleSheet, View, Text, Pressable} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type TaskListProps = {
  tasks: string[];
};

function ToDoList({tasks}: TaskListProps): React.JSX.Element {
  return (
    <ScrollView>
      <Text style={styles.header}>Tasks</Text>
      {tasks.map((task, index) => (
        <View key={index}>
          <BouncyCheckbox
            style={styles.main}
            fillColor="blue"
            TouchableComponent={Pressable}
            unFillColor="#FFFFFF"
            text={task}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
  main: {
    margin: 5,
  },
});
export default ToDoList;
