import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export default function ListTodos() {
  const todos = useSelector(state => state.todos.todos)

  const renderSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: "#CCD5AE",
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
              <View style={{flexDirection: 'row', width: '100%', backgroundColor: '#FEFAE0', padding: 10}}>
                <View style={{flexDirection: 'column', width: '50%'}}>
                  <Text style={{color: '#031D44', fontWeight: 'bold'}}>Awareness</Text>
                  <Text style={{color: '#D4A373', fontSize: 20, fontWeight: 'bold'}}>{item.body}</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{color: '#031D44', fontWeight: 'bold'}}>Clarity</Text>
                  <Text style={{color: '#D4A373', fontSize: 20, fontWeight: 'bold'}}>{item.mind}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', width: '100%', backgroundColor: '#FAEDCD', padding: 10}}>
                <View style={{flexDirection: 'column', width: '50%'}}>
                  <Text style={{color: '#031D44', fontWeight: 'bold'}}>Focus</Text>
                  <Text style={{color: '#D4A373', fontSize: 20, fontWeight: 'bold'}}>{item.focus}</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{color: '#031D44', fontWeight: 'bold'}}>Calmness</Text>
                  <Text style={{color: '#D4A373', fontSize: 20, fontWeight: 'bold'}}>{item.breath}</Text>
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
    backgroundColor: '#FEFAE0',
    alignItems: 'left',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
});
