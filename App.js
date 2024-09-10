import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [myGoals, setMyGoals] = useState([]);

  function setAddGoalHandler(value) {
    setModalIsVisible(value);
  }

  function deleteGoalHandler(key) {
    setMyGoals((currentGoals) => {
      return currentGoals.filter((goal) => {
        return goal.key !== key;
      });
    });
  }

  function addGoalHandler(enteredGoalText) {
    setMyGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
    setAddGoalHandler(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5E0ACC"
          onPress={setAddGoalHandler.bind(this, true)}
        ></Button>
        <GoalInput
          closeModel={setAddGoalHandler}
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
        ></GoalInput>
        <View style={styles.goalsContainer}>
          <FlatList
            data={myGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  goal={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                ></GoalItem>
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
  },
});
