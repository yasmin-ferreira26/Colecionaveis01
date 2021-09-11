import React from "react";
import { createStackNavigator } from "@react-navigation/native-stack";
import Inicial from "../../src/views/Inicial/Inicial";
import Colecao from "../../src/views/Colecao/Colecao";
import Item from "../../src/views/Item/Item";
import estiloRotasStack from "./estiloRotasStack";

const Stack = createStackNavigator();

const RotasLoginStack = () => {
    return (
        <Stack.Navigator initialRouteName="Inicial" >
            <Stack.Screen
                name="Inicial"
                component={Inicial}
                options={
                    {
                        cardStyle: estiloRotasStack.screenInicial,
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Colecao"
                component={Colecao}
                options={
                    {
                        cardStyle: estiloRotasStack.screenColecao,
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Item"
                component={Item}
                options={
                    {
                        cardStyle: estiloRotasStack.screenItem,
                        headerShown: false
                    }
                }
            />
        </Stack.Navigator>
    );
}
export default RotasPrincipalStack;
