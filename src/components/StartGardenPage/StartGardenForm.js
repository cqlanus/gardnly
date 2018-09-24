// @flow
import React from 'react'
import { Form, Header, Input, Popup, Icon, Divider } from 'semantic-ui-react'
import { withFormik } from 'formik'
import { withRouter } from 'react-router-dom'
import Strings from '../../resources/Strings'

const NEW_GARDEN_FORM = {
    LENGTH: 'length',
    WIDTH: 'width',
    LOCATION: 'location',
    ZIP: 'zip',
}

const LOCATION_OPTIONS = [
    { key: 'backyard', text: 'Backyard', value: 'backyard' },
    { key: 'frontyard', text: 'Frontyard', value: 'frontyard' },
    {
        key: 'comminityGarden',
        text: 'Community Garden',
        value: 'comminityGarden',
    },
    { key: 'other', text: 'Other', value: 'other' },
]

const StartGardenForm = ({ handleSubmit, handleChange }) => {
    return (
        <div>
            <h1>Let's start with the overall garden space</h1>
            <Divider />
            <Form onSubmit={handleSubmit}>
                <Header>How big is your garden space?</Header>
                <Form.Group widths={'equal'}>
                    <Form.Input
                        label={Strings.length}
                        type={'number'}
                        min={'0'}
                        name={NEW_GARDEN_FORM.LENGTH}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label={Strings.width}
                        min={'0'}
                        type={'number'}
                        name={NEW_GARDEN_FORM.WIDTH}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Header>Where will your space be located?</Header>
                <Form.Group widths={'equal'}>
                    <Form.Select
                        options={LOCATION_OPTIONS}
                        label={'Location'}
                        name={NEW_GARDEN_FORM.LOCATION}
                        onChange={handleChange}
                    />
                    <Form.Field>
                        <label>
                            Zip Code
                            <Popup
                                trigger={
                                    <Icon
                                        circular
                                        size={'small'}
                                        name={'info'}
                                    />
                                }
                                content={
                                    'We ask for your zip code to find the length of your growing season'
                                }
                                size="small"
                            />
                        </label>
                        <Input onChange={handleChange} />
                    </Form.Field>
                </Form.Group>
                <Form.Button type="submit" primary fluid>
                    Create Garden
                </Form.Button>
            </Form>
        </div>
    )
}

const initialValues = {
    [NEW_GARDEN_FORM.LOCATION]: '',
    [NEW_GARDEN_FORM.ZIP]: '',
    [NEW_GARDEN_FORM.WIDTH]: 0,
    [NEW_GARDEN_FORM.LENGTH]: 0,
}

export default withRouter(
    withFormik({
        mapPropsToValues: () => initialValues,
        handleSubmit: (values, { props: { onSubmit, history } }) => {
            // onSubmit && onSubmit(values)
            history.push('/start/0')
        },
    })(StartGardenForm),
)
