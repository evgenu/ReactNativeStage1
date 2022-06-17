import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/target.jpg')} />
        <TextInput 
          style={styles.textInput} 
          placeholder='Your goal!' 
          onChangeText={goalInputHandler}
          value={enteredGoalText} 
        /> 
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add goal!' color='#b180f0' onPress={addGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' color='#f31282' onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
    );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    width: '90%',
    marginRight: 8,
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '40%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});