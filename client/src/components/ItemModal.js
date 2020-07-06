import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {v4 as uuid} from 'uuid';

class ItemModal extends Component {
  state = {
    modal: false,
    item: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  // Updates text input state
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e =>{
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: this.state.name
    }

    // Add item with addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >Add Snippet</Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add To Snippet List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Snippet
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Snippet"
                  onChange={this.onChange} />
                  <Button 
                    color="dark"
                    style={{marginTop: '2rem'}}
                    block
                  >Add Snippet</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

// Mapping item state to props
const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);