import { StyleSheet, SafeAreaView } from 'react-native';
import ListTodos from '../app/components/ListTodos';


export default function ListScreen( {navigation}) {
  return (
		<SafeAreaView style={styles.container}>
      <ListTodos />
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
