import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 50,
        width: 300,
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 1,
        margin: 5,
        height: 35,
        width: 35,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    TextContainer: {
        flex:1,
        fontSize: 20,
    },
    mainContainer1: {
        flex: 1,
        backgroundColor: '#cc504e',
        height: 1,
    },
    headerContainer: {
        flex: 0.15,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#cc504e",
        alignItems:"center",
        paddingRight: 5
    },
    leftHeaderContainer: {
        flexDirection: "row"
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22,
        // textAlign: 'center',
        // marginLeft: 10
        marginLeft: 160
    },
    logoText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        alignItems: "flex-start",
        marginLeft: 140
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    message: {
        fontSize: 18,
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 18,
        flex: 1,
    },
    send: {
        alignSelf: 'center',
        color: 'lightseagreen',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20,
    },
    avatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
        marginRight: 10,
    },
    rowText: {
        flex: 1,
        alignItems: "flex-end",
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        height: 24,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 50,
        flexDirection: "row",
    },
    separator: {
        justifyContent:'space-between',
        padding: 10,
        height: 50,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    Box:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 18,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 20,
        width: 125,
        height: 45
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,

    },
    senderMessageContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row-reverse",
    },
    receiverMessageContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    chatBox:{
        flex: 1,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.5,
        marginRight: 60,
        padding:10,
        textAlign: "justify",
        alignItems: "flex-end",
    },
    iconContainer : {
        borderRadius: 30,
        width: 30,
        height: 30
    },
    senderMessage:{
        paddingRight:10,
        marginLeft: 60
    },
    receiverMessage:{
        paddingLeft:10,
        marginRight: 60
    }
});