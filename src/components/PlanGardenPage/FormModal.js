// @flow
import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'

type Props = {
    handleSubmit: any => void,
    formTitle: string,
    buttonTitle: string,
    form: any => any,
}

type State = {
    modalOpen: boolean,
}

export default class FormModal extends Component<Props, State> {
    state = {
        modalOpen: false,
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleSubmit = (values: any) => {
        const { handleSubmit } = this.props
        handleSubmit(values)
        this.handleClose()
    }

    render() {
        const { modalOpen } = this.state
        const { formTitle, form, buttonTitle } = this.props
        return (
            <Modal
                open={modalOpen}
                onClose={this.handleClose}
                trigger={
                    <Button onClick={this.handleOpen}>{buttonTitle}</Button>
                }>
                <Modal.Header>{formTitle}</Modal.Header>
                <Modal.Actions>{form(this.handleSubmit)}</Modal.Actions>
            </Modal>
        )
    }
}
