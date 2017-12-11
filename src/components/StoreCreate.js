import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { storeUpdate, storeCreate } from '../actions';
import { Card, CardSection, Button, Input } from '../common';
import StoreForm from './StoreForm';

class StoreCreate extends Component {
    constructor() {
        super();
        this.state = { errorMessage: ''};
    }
    onButtonPress() {
       
        const { id, store_name, description } = this.props;
        if((store_name === '') || (description === ''))
        {
            this.setState({errorMessage:'Provide Values'})
        }
        else{
            this.setState({errorMessage:''})
            this.props.storeCreate({id, store_name, description });
        }
        
    }

    render() {
        return (
            <Card>
                <StoreForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create Store
                    </Button>
                </CardSection>
                <Text style={{ fontSize: 18, color:'#FF0000',textAlign: 'center'}}>
                    {this.state.errorMessage}
                </Text>
            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    const { id, store_name, description } = state.storeForm;
    return { id, store_name, description };
  };
  
  export default connect(mapStateToProps, { storeUpdate ,storeCreate })(StoreCreate);

