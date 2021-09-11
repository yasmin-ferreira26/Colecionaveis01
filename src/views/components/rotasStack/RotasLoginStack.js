import React from 'react';
import { createStackNavigator } from "@react-navigation/native-stack";
import Login from '../../views/Login/Login';
import rotasTab from '../rotasTab/rotasTab';
import estiloRotasStack from './estiloRotasStack';

const Stack = createStackNavigator();

const RotasLoginStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen
                name="Login"
                component={Login}
                options={
                { cardStyle: estiloRotasStack.screenLogin,
                    headerShown: false,
                }
                }
            />
            <Stack.Screen
                name="Inicial"
                component={rotasTab}
                options={
                { cardStyle: estiloRotasStack.screenInicial,
                    headerShown: false,
                }
                }
            />
        </Stack.Navigator>
    );
}
export default RotasLoginStack;
