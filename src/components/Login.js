import React, { Component } from 'react';
import { Alert, Text ,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Input, Card, CardSection, Button } from '../common';


class Login extends Component {
    constructor() {
        super();
        this.state = { email: '', password: '', errorMessage: ''};
    }
    onButtonPress= () =>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        var emailValue = this.state.email;
        const { password }  = this.state ;
       
        if((reg.test(emailValue) === false) || (password === ''))
        {
            this.setState({errorMessage:'Provide valid Credentials'})
            return false;
        }
        else 
        {
            AsyncStorage.setItem('@UserLogined:key', 'User Successfully Logined');
            Actions.main();
        }
        
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        style={{ width: 100, height: 40 }} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        style={{ width: 100, height: 40 }} 
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
                <Text style={{ fontSize: 18, color:'#FF0000',textAlign: 'center'}}>
                    {this.state.errorMessage}
                </Text>
            </Card>
        );
    }
}

export default Login;
