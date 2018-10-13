// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Header, Input, Popup, Icon, Divider } from 'semantic-ui-react'
import { withFormik } from 'formik'
import { addGarden } from '../../redux/garden'
import { mapFormValues } from '../../utils/common'
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

class StartGardenForm extends Component<*> {
    handleSelect = (e, { value }) =>
        this.props.setFieldValue(NEW_GARDEN_FORM.LOCATION, value)

    render() {
        const { handleSubmit, handleChange, values } = this.props
        return (
            <div>
                <h1>{Strings.letsStartGarden}</h1>
                <Divider />
                <Form onSubmit={handleSubmit}>
                    <Header>{Strings.howBigIsGarden}</Header>
                    <Form.Group widths={'equal'}>
                        <Form.Input
                            label={Strings.length}
                            type={'number'}
                            min={'0'}
                            value={mapFormValues(
                                values,
                                initialValues,
                                NEW_GARDEN_FORM.LENGTH,
                            )}
                            name={NEW_GARDEN_FORM.LENGTH}
                            onChange={handleChange}
                        />
                        <Form.Input
                            label={Strings.width}
                            min={'0'}
                            type={'number'}
                            value={mapFormValues(
                                values,
                                initialValues,
                                NEW_GARDEN_FORM.WIDTH,
                            )}
                            name={NEW_GARDEN_FORM.WIDTH}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Header>{Strings.whereLocated}</Header>
                    <Form.Group widths={'equal'}>
                        <Form.Select
                            options={LOCATION_OPTIONS}
                            label={'Location'}
                            value={mapFormValues(
                                values,
                                initialValues,
                                NEW_GARDEN_FORM.LOCATION,
                            )}
                            name={NEW_GARDEN_FORM.LOCATION}
                            onChange={this.handleSelect}
                        />
                        <Form.Field>
                            <label>
                                {Strings.zipCode}
                                <Popup
                                    trigger={
                                        <Icon
                                            circular
                                            size={'small'}
                                            name={'info'}
                                        />
                                    }
                                    content={Strings.whyWeAskForZip}
                                    size="small"
                                />
                            </label>
                            <Input
                                name={NEW_GARDEN_FORM.ZIP}
                                value={mapFormValues(
                                    values,
                                    initialValues,
                                    NEW_GARDEN_FORM.ZIP,
                                )}
                                onChange={handleChange}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Button type="submit" primary fluid>
                        {Strings.createGarden}
                    </Form.Button>
                </Form>
            </div>
        )
    }
}

const initialValues = {
    [NEW_GARDEN_FORM.LOCATION]: '',
    [NEW_GARDEN_FORM.ZIP]: '',
    [NEW_GARDEN_FORM.WIDTH]: 0,
    [NEW_GARDEN_FORM.LENGTH]: 0,
}

const mapDispatch = {
    addGarden,
}

export default compose(
    connect(
        null,
        mapDispatch,
    ),
    withRouter,
    withFormik({
        mapPropsToValues: () => initialValues,
        handleSubmit: async (values, { props: { addGarden, history } }) => {
            await addGarden(values)
            history.push('/start/0')
        },
    }),
)(StartGardenForm)
