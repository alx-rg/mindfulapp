import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import ListTodos from '../app/components/ListTodos';
// import DetailsScreen from './screen/DetailsScreen';


export default function ListScreen( {navigation}) {
  return (
		<SafeAreaView style={styles.container}>
      <ListTodos />
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details' , {
          itemId: 86,
          otherParam: 'anything you want here',
          })}
      /> */}
		</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
