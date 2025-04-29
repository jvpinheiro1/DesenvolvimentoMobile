import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-web";

export default function ListFilter ({onFilter}) {
    return(
        <View>
            {}
            <TextInput 
                autoFocus
                placeholder="Search"
                style={styles.filter}
                onChange={onFilter}
            />
        </View>
    );
}