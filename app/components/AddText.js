import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux'
import { addTodo } from '../Todos'
import { useState } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default function AddTodo() {
  const [name, setName] = useState("Hello")
  const [body, setBody] = useState(null)
  const [mind, setMind] = useState(null)
  const [breath, setBreath] = useState(null)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(addTodo({ name, body, mind, breath }))
  }

  const commonTabStyle = {
    backgroundColor: 'white',
    width: '80%',
    tabStyle: {
      backgroundColor: 'white',
      width: 50,
    },
    activeTabStyle: {
      backgroundColor: 'blue',
      width: 50,
    },
    tabTextStyle: {
      color: 'black',
    },
    activeTabTextStyle: {
      color: 'white',
    },
  };

  return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				value={name}
				onChangeText={setName}
			/>
      <Text>Body</Text>
      <SegmentedControlTab
        values={['1', '2', '3', '4', '5']}
        selectedIndex={body}
        onTabPress={setBody}
        tabsContainerStyle={commonTabStyle}
      />
      <Text>Mind</Text>
      <SegmentedControlTab
        values={['1', '2', '3', '4', '5']}
        selectedIndex={mind}
        onTabPress={setMind}
        tabsContainerStyle={commonTabStyle}
      />
      <Text>Breath</Text>
      <SegmentedControlTab
        values={['1', '2', '3', '4', '5']}
        selectedIndex={breath}
        onTabPress={setBreath}
        tabsContainerStyle={commonTabStyle}
      />
			<Button
				title='Add'
				onPress={handleAddTodo}
			/>
			<StatusBar style="auto" />
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'green',
		width: '100%',
		height: 30
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10
  }
});
