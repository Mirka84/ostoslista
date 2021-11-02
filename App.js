import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [text, setText]=useState('');
  const [data, setData]=useState([]); 


   const addList = () => {
    setData([...data, {key: text}]);
    setText('');  
   }
  
  return (

    <View style={styles.container}>
      <View>
        <Text>Shopping list: </Text>
      </View>
      <View style={styles.textinput}>
        <TextInput
          onChangeText={text => setText(text)}
          value={text}
        />
      </View>
      <View style={styles.button}>
        <Button  onPress={addList} title="ADD" />
        <Button  onPress={() => setData([])} title="CLEAR" />
      </View>
      <View>
        <Text>List:</Text>
      </View>
      <FlatList
          data={data}
          renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
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
  },
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, 
  button: { 
    flex: 2, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
  }
});
    

