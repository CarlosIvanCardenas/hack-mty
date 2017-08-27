'use strict'

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Image
} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';
import commonStyles from "../styles/common.css";

class Info extends Component{
    constructor(props) {
        super(props)
        this.state = {
            page: '',
            indicador: ['Cobertura preescolar: niños de 3 a 5 años inscritos en preescolar', 'Cobertura media superior: jóvenes de 15 a 17 años inscritos en educación media superior', 'Logro académico: alumnos de nivel 1 o menor en la prueba PISA', 'Calidad docente: docentes "no idóneos" para una plaza en educación pública'],
            fuente: ['Fuente: Secretaría de Educación Pública/CONAPO', 'Fuente: Secretaría de Educación Pública/CONAPO', 'Fuente: INEE', 'Fuente: INEE'],
            title: '',
            subtitle: '',
            icon: require('../../assets/img/gob.png'),
            array: [require('../../assets/img/Educacion.png'), require('../../assets/img/salud.png'), require('../../assets/img/desarrolloSocial.png'), require('../../assets/img/desarrolloSustentable.png')]
        }
    }

    getData(idx, value) {
        this.setState({
            title: this.state.indicador[idx],
            subtitle: this.state.fuente[idx],
            icon: this.state.array[idx]
        })
    }

    render(){
        return(
            <ScrollView style={{flex: 1, backgroundColor: 'white',marginBottom: 60, paddingLeft: 15, paddingRight: 15}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center',}} >
                <ModalDropdown 
                    options={this.state.indicador}
                    style={commonStyles.boton}
                    textStyle={commonStyles.textoBoton}
                    dropdownStyle={{width: 285, height: 100, marginTop: 5, marginLeft: 20}}
                    defaultValue={'Indicador'}
                    onSelect={(idx, value) => this.getData(idx, value)}
                />
                <Text style={commonStyles.infoTitle} >{this.state.title}</Text>
                <Text style={commonStyles.infoSubtitle} >{this.state.subtitle}</Text>
                <Image style={commonStyles.icon} source={this.state.icon} />
            </ScrollView>
        );
    }
}

module.exports = Info;