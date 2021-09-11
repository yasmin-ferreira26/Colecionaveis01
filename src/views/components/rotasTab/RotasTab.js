import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "../../src/views/Perfil/Perfil";
import RotasDrawer from "../rotasDrawer/RotasDrawer";

const rotasTab= () => {
    return(
        <Tab.Navigator>
            tabBarOptions={
        {
          labelStyle: { fontSize: 24 },
          style: {backgroundColor: '#14417b'},
          activeTintColor: '#FFFFFF'
        }
      }
      <Tab.Screen name="Inicial" component={rotasDrawer} />
      <Tab.Screen name="Perfil" component={Perfil} /> 
        </Tab.Navigator>
    );
}

export default RotasTab;
