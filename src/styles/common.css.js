const Common = {

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo:{
        width: 300, 
        height: 80,
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
    },
    boton:{
        width: 325,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: '#00b5b2',
        borderWidth: 2,
        marginTop: 10,
    },
    textoBoton:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00b5b2'
    },
    navBar: {
        width: 360,
        height: 100,
        backgroundColor: '#5b2144',  
        elevation: 3,
    },
    navBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoTitle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },
    infoSubtitle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    info: {
        color: 'black',
        textAlign: 'center',
        fontSize: 14,
    }
};

module.exports = Common;