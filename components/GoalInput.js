import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);

    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="enter something"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={props.handler.bind(this, enteredGoal)} />
                    </View >
                    <View style={styles.button}>
                        <Button color='red' title="Cancel" onPress={props.cancel} />
                    </View>
                </View>
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
        marginBottom: 10

    }, buttonContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    inputContainer: {

        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }, button: {
        width: "40%"
    }
})
export default GoalInput
