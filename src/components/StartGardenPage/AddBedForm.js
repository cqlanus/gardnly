// @flow
import React, { Component } from 'react'
import { Form, Header, Divider, Popup, Icon, Button } from 'semantic-ui-react'
import { withFormik } from 'formik'
import Strings from '../../resources/Strings'

const ADD_BED_FORM = {
    LENGTH: 'length',
    WIDTH: 'width',
    LOCATION: 'location',
    ZIP: 'zip',
}

const EXPOSURE_OPTIONS = [
    { key: 'full', text: 'Full Sun', value: 'full' },
    { key: 'partial', text: 'Partial Sun', value: 'partial' },
    { key: 'shade', text: 'Shade', value: 'shade' },
]

type State = {
    value: ?string,
}

class AddBedForm extends Component<*, State> {
    state = {
        value: null,
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { handleSubmit, handleChange } = this.props
        const { value } = this.state
        return (
            <div>
                <h1>Now, let's add beds to the garden space.</h1>
                <Divider />
                <Form onSubmit={handleSubmit}>
                    <Header>Tell us about one bed in the garden.</Header>
                    <Form.Group widths={'equal'}>
                        <Form.Input
                            label={Strings.length}
                            type={'number'}
                            min={'1'}
                            name={ADD_BED_FORM.LENGTH}
                            onChange={handleChange}
                        />
                        <Form.Input
                            label={Strings.width}
                            min={'1'}
                            type={'number'}
                            name={ADD_BED_FORM.WIDTH}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group widths={'equal'}>
                        <Form.Select
                            label={'How much sun will it receive?'}
                            options={EXPOSURE_OPTIONS}
                            onChange={handleChange}
                        />
                        <Form.Input
                            label={'How many beds will be like this?'}
                            type={'number'}
                            min={'1'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button.Group primary widths={'3'}>
                            <Button>Continue adding beds</Button>
                            <Button.Or />
                            <Button>Begin filling beds</Button>
                        </Button.Group>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default withFormik({})(AddBedForm)
