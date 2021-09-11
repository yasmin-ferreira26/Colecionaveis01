import React from 'react';
import { TextBase, View, TouchbleOpacity } from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

            <Text style={estiloColecao.texto}>Coleção</Text>

            <TouchbleOpacity style={estiloColecao.botaoContainer} >
                <Text style={estiloColecao.botaoTexto}>Voltar</Text>
            </TouchbleOpacity>

            </View>
        </View>
    )
}
export default Colecao;