import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.deleteGoal}>
            <View style={styles.listItem}>
                <Text style={{ color: "white" }}> {props.item} </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "#a2eaf9",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        alignItems: "center"
    }
})
export default GoalItem
