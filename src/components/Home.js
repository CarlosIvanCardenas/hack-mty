'use strict'

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import commonStyles from "../styles/common.css";
import * as firebase from 'firebase';
//import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube';

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            info: ''
        }
    }
    
  download(){
    alert("Not implemented yet")
  }

    render(){
        return(
                <ScrollView style={{flex: 1, backgroundColor: 'white',marginBottom: 60, paddingLeft: 15, paddingRight: 15}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center',}} >
                    <Text style={commonStyles.title} >Quiénes somos</Text>
                    <Text style={commonStyles.info} >El Consejo Nuevo León es un órgano transexenal, apartidista, consultivo y propositivo del Estado en materia de planeación estratégica y su evaluación. Está compuesto por 16 miembros con voz y voto, además del secretario técnico y asesores expertos sin voto.{'\n'}
    Este organismo está sustentado en la Ley de Planeación Estratégica del Estado de Nuevo León y su respectivo reglamento, con el objetivo de establecer el proceso de planeación estratégica en busca del desarrollo sostenible del estado.</Text>
                    <Text style={commonStyles.title} >MISIÓN</Text>
                    <Text style={commonStyles.info} >Promover el desarrollo sostenible del estado de Nuevo León bajo una visión de largo plazo, a través de:{'\n'}
    Una planeación integral que atienda los ejes económico, social y ambiental.{'\n'}
    Mecanismos de planeación, evaluación de resultados, comunicación y rendición de cuentas.{'\n'}
    Una constitución autónoma con recursos mixtos, de origen público y privado, que privilegie la transparencia.</Text>
                    <Text style={commonStyles.title} >VISIÓN 2030</Text>
                    <Text style={commonStyles.info} >Hacer de Nuevo León un estado líder con niveles sostenibles de desarrollo económico, social, humano y ambiental garantizando así el bienestar de todos sus habitantes.{'\n'}
    Esto se logrará a través de una ciudadanía comprometida e instituciones eficaces que muestren respeto a la legalidad en todas sus acciones.{'\n'}
    El desempeño en lo económico, social, humano y ambiental será comparable al de países desarrollados.</Text>
                    <Text style={commonStyles.title} >ANTECEDENTES</Text>
                    <Text style={commonStyles.info} >Nuevo León ha demostrado que, cuando la comunidad se organiza, se pueden lograr resultados excepcionales.{'\n'}
Tras la aprobación a finales de 2013 de la Ley de Planeación Estratégica del Estado de Nuevo León por parte del H. Congreso del Estado de Nuevo León y su publicación en el Periódico Oficial del Estado el 17 de enero de 2014, se creó el Consejo Nuevo León para la Planeación Estratégica, instalado formalmente el 29 de septiembre de 2014.{'\n'}

Este mecanismo se propuso para que funcione permanentemente para:{'\n'}

-Conciliar intereses.{'\n'}
-Alinear esfuerzos para no perder el objetivo.{'\n'}
-Articular mejor el trabajo de las cámaras y organismos intermedios.{'\n'}
-Asegurar el progreso económico y social de los ciudadanos de Nuevo León.{'\n'}
-Dotar al Estado de instrumentos que puedan crear un mejor futuro para la región</Text>
                    <TouchableHighlight onPress={this.download.bind(this)} style={commonStyles.boton} >
                        <Text style={commonStyles.textoBoton} >Descarga el Plan Estratégico</Text>
                    </TouchableHighlight>
                
                {/* <YouTube
                    apiKey="AIzaSyCdz1p9q4dltDv4CZp2MAMeGBP7rPonHt0"
                    videoId="3m1wHthi7Vc"   // The YouTube video ID
                    play={true}             // control playback of video with true/false
                    fullscreen={true}       // control whether the video should play in fullscreen or inline
                    loop={true}             // control whether the video should loop when ended

                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={{ alignSelf: 'stretch', height: 300, marginTop:30 }}
                /> */}
                </ScrollView>
           
        );
    }
}

const styles = StyleSheet.create({
});

module.exports = Home;