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
  const [focus, setFocus] = useState(null)
  const [breath, setBreath] = useState(null)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(addTodo({ name, body, mind, breath, focus }))
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
      <Text>What is your state of mind right now?</Text>
      <Text>Please write a few words to describe your mental state.</Text>
			<TextInput
				style={styles.textInput}
				value={name}
				onChangeText={setName}
			/>
      <Text>Awareness</Text>
      <Text>How aware are you of your thoughts and feelings?</Text>
      <Text>Scale of 1 (not at all) to 5 (very aware)</Text>
      <SegmentedControlTab
        values={['1', '2', '3', '4', '5']}
        selectedIndex={body}
        onTabPress={setBody}
        tabsContainerStyle={commonTabStyle}
      />
      <Text>Clarity</Text>
      <Text>How clear is your mind?</Text>
      <Text>Scale of 1 (very foggy) to 5 (very clear)</Text>
      <SegmentedControlTab
        values={['1', '2', '3', '4', '5']}
        selectedIndex={mind}
        onTabPress={setMind}
        tabsContainerStyle={commonTabStyle}
      />
      <Text>Focus</Text>
      <Text>How focused are you on the present moment?</Text>
      <Text>Scale of 1 (very distracted) to 5 (very focused)</Text>
      <SegmentedControlTab
        values={['1', '2', '3', '4', '5']}
        selectedIndex={focus}
        onTabPress={setFocus}
        tabsContainerStyle={commonTabStyle}
      />
      <Text>Calmness</Text>
      <Text>How calm are you feeling?</Text>
      <Text>Scale of 1 (very anxious) to 5 (very calm)</Text>
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
