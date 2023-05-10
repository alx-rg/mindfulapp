import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export default function ListTodos() {
	const todos = useSelector(state => state.todos.todos)
	return (
		<View style={styles.container}>
			<FlatList
				data={todos}
				renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>Awareness: {item.body}</Text>
              <Text>Clarity: {item.mind}</Text>
              <Text>Focus: {item.focus}</Text>
              <Text>Calmness: {item.breath}</Text>
            </View>
          );
				}}
        keyExtractor={(item, index) => index.toString()}
        />
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'blue',
		width: '100%',
		height: 30
  },
  textInput: {
    border: 1,
    borderWidth: 1,
    width: '80%',
    padding: 10
  }
});
