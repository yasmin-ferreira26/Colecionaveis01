import React from "react"; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colecao from "../../src/views/Colecao/Colecao";
import Item from "../../src/views/Item/Item";
import Perfil from '../;;/views/Perfil/Perfil';
import RotasPrincipalStack from "../rotasStack/RotasPrincipalStack";

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName='Inicial'>
        <Drawer.Screen name="Inicial" component={rotasPrincipalStack}/>
        <Drawer.Screen name="Colecao" component={Colecao}/>
        <Drawer.Screen name="Item" component={Item}/>
        <Drawer.Screen name="Perfil" component={Perfil}/>
      </Drawer.Navigator>
    );
}
export default RotasDrawer; 