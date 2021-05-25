import React, { useContext } from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import gstyles, { mainAppColor, mainTextColor, lightTextColor } from '../../gstyles';
import { useNavigation } from '@react-navigation/native';
import ContextUser from '../../context/UserContext';

export default function Receitas() {

    const navigation = useNavigation();
    const { remedios } = useContext(ContextUser)

    function listaRemedios({ item }) {
        return (
            <TouchableOpacity style={gstyles.listTextButton} onPress={() => navigation.navigate('DetalheReceitas', { title: item.name })}>
                <View style={gstyles.listButtonIcon}>
                    <MaterialCommunityIcons size={24} name={'pill'} />
                </View>
                <View style={gstyles.listButtonTxt}>
                    <Text style={gstyles.listButtonTitle}>{item.name ? item.name : 'Carregando...'}</Text>
                    <Text style={gstyles.listButtonDesc}>{item.presc ? item.presc : 'Carregando...'}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={gstyles.container}>
            {remedios.length > 0 ?
                <View>

                    <View style={styles.subContainer}>
                        <FlatList
                            data={remedios.medicamentoInfo}
                            keyExtractor={item => item.COD_RECE.toString()}
                            renderItem={listaRemedios}
                        />
                    </View>
                </View>
                :

                <View style={styles.header2}>

                    <Text style={{ ...styles.headerTitle, marginBottom: '15%' }}>Receitas</Text>

                    <Text style={gstyles.listButtonDesc} >
                        Parece que voce não tem nenhuma receita ativa!{'\n'}
                            Verifique e tire suas duvidas com a unidade ou acesse o AGORA na internet
                        </Text>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()}>
                        
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>
                </View>

            }
        </View>
    );
}



/**
 *
 *
 *
 *  Para testar
 * precisa trocar a key label por nome e qtd por presc
 *
 * [{
                            label: 'Paracetamol',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Ibuprofeno',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Dipirona',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Cloroquina',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Hidroxocloroquina',
                            qtd: '2 capsulas por dia'
                        }, {
                            label: 'Sei la',
                            qtd: '2 capsulas por dia'
                        }]
 *
 *
 */