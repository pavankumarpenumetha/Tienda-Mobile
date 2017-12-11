import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import StoreForm from './StoreForm';
import { storeUpdate,storeCreate,storeSave,storeDelete } from '../actions';
import { Card, CardSection, Button, } from '../common';

class StoreEdit extends Component {
    constructor() {
        super();
        this.state = { errorMessage: ''};
    }
    componentWillMount() {
        _.each(this.props.storeItem, (value, prop) => {
          this.props.storeUpdate({ prop, value });
        });
      }
    onButtonPress(){
        const {location, store_name, description} = this.props;
        if((store_name === '') || (description === ''))
        {
            this.setState({errorMessage:'Provide Values'})
        }
        else{
            this.setState({errorMessage:''})
            this.props.storeSave({location,store_name,description,uid: this.props.storeItem.id});
        }
    }
    onDeleteButtonPress() {
        const {location, store_name, description} = this.props;
        this.props.storeDelete({uid: this.props.storeItem.id});
    }

        render() {
            return(
                <Card>
                    <StoreForm />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save Changes
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onDeleteButtonPress.bind(this)}>
                            Delete Store
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
    const { location, store_name, description } = state.storeForm;
    return { location, store_name, description };
};

export default connect(mapStateToProps, { storeUpdate ,storeCreate, storeSave, storeDelete })(StoreEdit);
