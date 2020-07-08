import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  // ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  NavLink,
  Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component {
  state = {
    modal: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    msg: null,
  };

  // Prop types
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  //
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  // Updates text input state
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = this.state;

    // Create user object
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    // Attempt to register
    this.props.register(newUser);

    // Close modal
    // this.toggle();
  };

  render() {
    return (
      <div>
        {/* Opens Modal from navlink onClick */}
        <NavLink onClick={this.toggle} href='#'>
          Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            {/* Checks message state and alerts message */}
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='firstName'>First Name</Label>
                <Input
                  type='text'
                  firstName='firstName'
                  id='firstName'
                  placeholder='First Name'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Label for='lastName'>Last Name</Label>
                <Input
                  type='text'
                  lastName='lastName'
                  id='lastName'
                  placeholder='Last Name'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  email='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Label for='firstName'>First Name</Label>
                <Input
                  type='password'
                  firstName='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

// Mapping item state to props
// Value isAuthenticated
// State of auth/error coming from root reducer
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
