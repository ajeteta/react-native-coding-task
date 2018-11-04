import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }
  render() {
    return (
        
        <View style={styles.backgroundWhite}>
                 
                <View style={styles.spaceAtTop}/>
        
                <View style={styles.top}>

                    <Image  
                        source={require('./assets/logo.png')}
                        style={styles.logo}
                    />
                        
                    <View style={styles.space}/>
                    
                    <Text style={styles.header}>Hello, my name is: {this.state.name}</Text>

                    <View style={styles.space}/>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter name"
                        onChangeText={(name) => { this.setState({ name }); }}
                    />
                </View>
                
        </View>
    );
  }
}

const styles = StyleSheet.create({
    backgroundWhite: {
        flex: 1,
        backgroundColor: '#fff'
    },
    spaceAtTop: {
        height: '4%',
        backgroundColor: 'rgb(7,167,255)'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'rgb(7,167,255)',
        fontSize: 22,
        fontWeight: 'bold'
    },
    space: {
        height: '8%'
    },
    logo: {
        width: '100%',
        height: '40%'
    },
    input: {
        padding: 5,
        height: 40,
        width: 180,
        fontSize: 18,
        backgroundColor: '#fff',
        borderColor: 'rgb(7,167,255)',
        borderWidth: 3
    }
});
