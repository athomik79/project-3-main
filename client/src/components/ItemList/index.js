import React, { Component } from 'react';
import { Container, Button, Card, CardColumns, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/item';
import PropTypes from 'prop-types';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

class ItemList extends Component {

    // Storing getItems action as a prop
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
    };
    // Lifecyle method to return item array state
    componentDidMount() {
        this.props.getItems()
    }

    // Calls deleteItem action
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        return (
            <Container>
                <CardColumns >
                    {this.props.item.items.map(item => {
                        const contentState = convertFromRaw(item);
                        const editorState = EditorState.createWithContent(contentState);
                        return (
                            <Card key={item._id}>
                                <CardBody >
                                    {this.props.isAuthenticated ? (
                                        <Button
                                            style={{ float: 'right' }}
                                            size='sm'
                                            onClick={this.onDeleteClick.bind(this, item._id)}
                                        >
                                            &times;
                                        </Button>
                                    ) : null}
                                    <Editor editorState={editorState} readOnly={true} />
                                    <p className='card-text'><small className='text-muted'>Created At: <span>
                                        {item.date}
                                    </span></small></p>
                                </CardBody>
                            </Card>
                        )
                    })}
                </CardColumns>
            </Container>
        );
    }
}

// Mapping item redux state to component property
const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ItemList);