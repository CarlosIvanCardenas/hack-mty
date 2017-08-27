const Common = {

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo:{
        width: 300, 
        height: 80,
    },
    icon:{
        width: 200, 
        height: 200,
    },
    title: {
        color: '#5b2144',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
    },
    boton:{
        width: 325,
        height: 55,
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: '#00b5b2',
        borderWidth: 2,
        marginTop: 10,
    },
    textoBoton:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00b5b2'
    },
    navBar: {
        width: 800,
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
        color: '#5b2144',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    infoSubtitle: {
        color: '#5b2144',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    info: {
        color: '#5b2144',
        textAlign: 'center',
        fontSize: 14,
        borderBottomColor: '#5b2144',
        borderBottomWidth: 2,
        paddingBottom: 15,
        marginBottom: 10
    }
};

module.exports = Common;