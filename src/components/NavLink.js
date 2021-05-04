import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spacer from "./spacer";
import { useNavigation } from "@react-navigation/native";

function NavLink({ label, routeName }) {
  const navigation = useNavigation();
  const ChangeRoute = ()=>{
      console.log("route called");
      
    navigation.navigate(routeName)
  }
  return (
    <TouchableOpacity onPress={ChangeRoute}>
      <Spacer>
        <Text style={styles.navLink}>{label}</Text>
      </Spacer>
    </TouchableOpacity>
  );
}

export default NavLink;
const styles = StyleSheet.create({
  navLink: {
    color: "blue",
  },
});
