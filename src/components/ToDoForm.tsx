import React, {useState} from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

type taskProp = {
  addTask: (task: string) => void;
};

function ToDoForm({addTask}: taskProp): React.JSX.Element {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask.trim());
      setNewTask(''); // Clear input after adding
    }
  };

  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Add a new task..."
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 5,
  },
});

export default ToDoForm;
