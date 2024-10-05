import React,{useState} from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,FlatList, InteractionManager} from 'react-native';
import ToDoCard from "./components/ToDoCard/ToDoCard";




const App =  () => {
  // UseSate ile durumu todo Listesini kontrol altına alalım..

  const [inputText , setInputText] = useState<string>('')
  const [todoList, setTodoList] = useState<{text:string;completed:boolean}[]>([]); // toDo listesi için
 

  const addTodo = () =>{
    if(inputText.trim()){ // boşlukları atar ve empty olup olmadığını kontrol eder
      setTodoList([...todoList,{text:inputText,completed:false}]);
      setInputText('');

    }
  };

  const toggleTodo = (index:number) => {
    // Toggle the completed status of the todo item
    const updatedTodos = todoList.map((item, idx) => 
      idx === index ? {...item, completed: !item.completed } : item
    );
    setTodoList(updatedTodos);
  };

   // Yapılmamış görev sayısını hesapla
   const incompletedCount = todoList.filter(item => !item.completed).length;

  return(
    <View style = {styles.container}>
      
      <View style={styles.up_container}>
        <Text style={styles.page_title}> Yapılacaklar</Text>
        <Text style = {styles.toDo_count}>{incompletedCount}</Text>
      </View>

      {/* ToDo Listesi */}
      <FlatList
        data={todoList}
        renderItem={({item , index}) => (
          <ToDoCard 
          text = {item.text}
          completed={item.completed}
          onPress={() => toggleTodo(index)}// çift tıklama olayını buradan bağlıyoruz
          />
        )} 
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Sayfadanın aşağı tarafında kalan İnput ve Kaydet butonu için  */}
      <View style={styles.bottom_container}>
        <TextInput
        style={styles.tex_in}
        placeholder="Ekleyin...."
        placeholderTextColor="gray" 
        value={inputText}
        onChangeText={setInputText} // inputa yazılan değeri state alıyoruz 
        />

        <TouchableOpacity style ={styles.btn_container} onPress={addTodo}>
          <Text style={styles.btn_text} >
            Kaydet
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    backgroundColor:'#102027',
    flex:1,
    justifyContent:'space-between',
  },
  up_container:{
    // backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    margin:5
  },
  page_title:{
    fontSize :32,
    fontWeight:'bold',
    color:'#FFA500',
  },
  toDo_count:{
    fontSize:32,
    color:'#FFA500',

  },
  btn_container:{

  },
  btn_text : {
    color:'white',
    fontSize:18,
    backgroundColor:'#6A9C89',
    padding:7,
    margin:7,
    borderRadius:10,
    textAlign:'center'
  },
  tex_in:{
    color:'white',
    borderBottomWidth:1,
    borderBottomColor:'#D8D2C2',
    marginBottom:4
  },
  bottom_container:{
    backgroundColor:'#37474F',
    padding:10,
    margin:10,
    borderRadius:10,
    
  },

})



export default App;








