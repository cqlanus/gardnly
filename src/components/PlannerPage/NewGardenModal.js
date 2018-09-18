// @flow
import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import NewGardenForm from './NewGardenForm'

type Props = {
    addGarden: any => void,
}

type State = {
    modalOpen: boolean,
}

export default class NewGardenModal extends Component<Props, State> {
    state = {
        modalOpen: false,
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleSubmit = (garden: any) => {
        const { addGarden } = this.props
        addGarden(garden)
        this.handleClose()
    }

    render() {
        const { modalOpen } = this.state
        return (
            <Modal
                open={modalOpen}
                onClose={this.handleClose}
                trigger={<Button onClick={this.handleOpen}>New Garden</Button>}>
                <Modal.Header>Create a new garden</Modal.Header>
                <Modal.Actions>
                    <NewGardenForm onSubmit={this.handleSubmit} />
                </Modal.Actions>
            </Modal>
        )
    }
}
