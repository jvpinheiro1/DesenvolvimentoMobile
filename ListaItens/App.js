import { Text, View, FlatList } from "react-native";
import styles from "./styles";

const nomes = [
  "Ana", "Carlos", "Maria", "João", "Fernanda", "Lucas", "Beatriz", "Pedro",
  "Juliana", "Roberto", "Camila", "Eduardo", "Paula", "Gustavo", "Carla", 
  "Ricardo", "Larissa", "Felipe", "Sofia", "Vinícius"
];
//precisa definir valor (ex 20) porque é const
const data = new Array(20).fill(null).map((v,i) => ({key: i.toString(), 
  value: nomes[Math.floor(Math.random() * nomes.length)]}));

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}