import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export default function ListTodos() {
	const todos = useSelector(state => state.todos.todos)

  const renderSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: "#CED0CE",
      }}
    />
  );

	return (
		<View style={styles.container}>
			<FlatList
				data={todos}
        style={{width: '100%'}}
				renderItem={({item, index}) => {
          return (
            <View style={{flexDirection: 'column', width: '100%', paddingBottom: 10}}>
              <Text style={{color: '#031D44', fontSize: 18, fontWeight: 'bold', paddingBottom: 10, paddingTop: 10}}>{item.name}</Text>
                <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={{flexDirection: 'column',width: '50%'}}>
                  <Text>Awareness: {item.body}</Text>
                  <Text>Clarity: {item.mind}</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text>Focus: {item.focus}</Text>
                  <Text>Calmness: {item.breath}</Text>
                </View>
              </View>
            </View>
          );
				}}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
        />
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5896F',
    alignItems: 'left',
    justifyContent: 'center',
		width: '100%',
		height: 30,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  textInput: {
    border: 1,
    borderWidth: 1,
    width: '80%',
    padding: 10
  }
});
