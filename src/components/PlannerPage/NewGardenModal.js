// @flow
import React, { Component } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

type Props = {
    addGarden: any => void,
}

type State = {
    name: ?string,
    width: ?number,
    length: ?number,
}

export default class NewGardenModal extends Component<Props, State> {
    state = {
        name: '',
        width: 0,
        length: 0,
    }

    handleChange = (fieldName: string, callback?: string => any) => (
        evt: any,
    ) => {
        const value = callback ? callback(evt.target.value) : evt.target.value
        this.setState({ [fieldName]: value })
    }

    handleSubmit = () => {
        const { addGarden } = this.props
        addGarden(this.state)
    }

    render() {
        const { name, width, length } = this.state
        return (
            <Modal trigger={<Button>New Garden</Button>}>
                <Modal.Header>Create a new garden</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                label="Garden Name"
                                onChange={this.handleChange('name')}
                                value={name}
                            />
                            <Form.Input
                                label="Length"
                                type="number"
                                onChange={this.handleChange('length', parseInt)}
                                value={length}
                            />
                            <Form.Input
                                label="Width"
                                type="number"
                                onChange={this.handleChange('width', parseInt)}
                                value={width}
                            />
                        </Form.Group>
                        <Form.Button primary fluid>
                            Create
                        </Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}
