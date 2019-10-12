import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    return (
        <Modal visible={false}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="enter something"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                />
                <Button title="Add" onPress={props.handler.bind(this, enteredGoal)} />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        width: "80%",
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 10,

    },
    inputContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})
export default GoalInput
