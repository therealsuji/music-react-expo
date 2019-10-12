import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }])
  }
  const deleteGoal = (id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Button title='Add a Goal' />
      <GoalInput handler={addGoalHandler} />
      <FlatList showsVerticalScrollIndicator={false} data={courseGoals} renderItem={itemData =>
        <GoalItem deleteGoal={deleteGoal.bind(this, itemData.item.key)} item={itemData.item.value} />
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },


});


