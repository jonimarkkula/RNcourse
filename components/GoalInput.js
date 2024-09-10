import { useState } from 'react';

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        ></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.modalButton}>
            <Button
              title="Cancel"
              onPress={props.closeModel.bind(this, false)}
              color="#F31282"
            ></Button>
          </View>
          <View style={styles.modalButton}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#5E0ACC"
            ></Button>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E4D0FF',
    borderRadius: 6,
    backgroundColor: '#E4D0FF',
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 24,
    flexDirection: 'row',
  },
  modalButton: {
    width: '30%',
    marginHorizontal: 8,
  },
});
