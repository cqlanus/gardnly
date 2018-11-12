// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    Form,
    Header,
    Popup,
    Icon,
    Divider,
    Dimmer,
    Loader,
    Button,
} from 'semantic-ui-react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { addGarden, editGarden, deleteGarden } from '../../redux/garden'
import { mapFormValues } from '../../utils/common'
import Strings from '../../resources/Strings'
import { isAuthLoading } from '../../selectors'

const ButtonContainer = styled.div`
    margin: 20px 0;
`

const NEW_GARDEN_FORM = {
    NAME: 'name',
    LENGTH: 'length',
    WIDTH: 'width',
    LOCATION: 'location',
    ZIP: 'zip',
}

const LOCATION_OPTIONS = [
    { key: '', text: '--', value: '' },
    { key: 'backyard', text: 'Backyard', value: 'backyard' },
    { key: 'frontyard', text: 'Frontyard', value: 'frontyard' },
    {
        key: 'communityGarden',
        text: 'Community Garden',
        value: 'communityGarden',
    },
    { key: 'other', text: 'Other', value: 'other' },
]

const initialValues = {
    [NEW_GARDEN_FORM.NAME]: '',
    [NEW_GARDEN_FORM.LOCATION]: '',
    [NEW_GARDEN_FORM.ZIP]: '',
    [NEW_GARDEN_FORM.WIDTH]: '',
    [NEW_GARDEN_FORM.LENGTH]: '',
}

type Props = {
    values: typeof initialValues,
    handleSubmit: (typeof initialValues) => void,
    handleChange: any => void,
    setFieldValue: (string, string) => void,
    errors: any,
    isEditing: boolean,
    garden: any,
    loading: boolean,
    deleteGarden: (string, any) => void,
    location: any,
    history: any,
}

class AddGardenForm extends Component<Props> {
    handleDelete = (gardenId: string) => () => {
        const { deleteGarden, history } = this.props
        deleteGarden(gardenId, { history })
    }

    handleSelect = (e, { value }) =>
        this.props.setFieldValue(NEW_GARDEN_FORM.LOCATION, value)

    renderDelete = () => {
        const { garden } = this.props
        if (!garden) {
            return null
        }
        if (garden) {
            return (
                <ButtonContainer>
                    <Button
                        fluid
                        negative
                        onClick={this.handleDelete(garden.id)}>
                        {Strings.deleteGarden}
                    </Button>
                </ButtonContainer>
            )
        }
    }

    render() {
        const {
            handleSubmit,
            handleChange,
            values,
            errors,
            garden,
            loading,
        } = this.props
        const submitText = garden ? Strings.updateGarden : Strings.createGarden
        return (
            <div>
                <h1>{Strings.letsStartGarden}</h1>
                <Divider />
                <Form onSubmit={handleSubmit}>
                    <Header>{Strings.whatCallGarden}</Header>
                    <Form.Input
                        fluid
                        label={'Name'}
                        value={mapFormValues(
                            values,
                            initialValues,
                            NEW_GARDEN_FORM.NAME,
                        )}
                        name={NEW_GARDEN_FORM.NAME}
                        onChange={handleChange}
                        error={!!errors[NEW_GARDEN_FORM.NAME]}
                    />

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
                            error={!!errors[NEW_GARDEN_FORM.LENGTH]}
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
                            error={!!errors[NEW_GARDEN_FORM.WIDTH]}
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
                            error={!!errors[NEW_GARDEN_FORM.LOCATION]}
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
                            <Form.Input
                                name={NEW_GARDEN_FORM.ZIP}
                                value={mapFormValues(
                                    values,
                                    initialValues,
                                    NEW_GARDEN_FORM.ZIP,
                                )}
                                onChange={handleChange}
                                error={!!errors[NEW_GARDEN_FORM.ZIP]}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Button type="submit" primary fluid>
                        {submitText}
                    </Form.Button>
                </Form>
                {this.renderDelete()}
                <Dimmer active={loading} page inverted>
                    <Loader />
                </Dimmer>
            </div>
        )
    }
}

const mapPropsToValues = ({ garden }) => {
    if (garden) {
        const { name, length, width, zip, location } = garden
        return { name, length, width, zip, location }
    } else {
        return initialValues
    }
}

const validationSchema = Yup.object().shape({
    [NEW_GARDEN_FORM.NAME]: Yup.string().required(),
    [NEW_GARDEN_FORM.LOCATION]: Yup.string().required(),
    [NEW_GARDEN_FORM.ZIP]: Yup.string().required(),
    [NEW_GARDEN_FORM.WIDTH]: Yup.number()
        .required()
        .min(0),
    [NEW_GARDEN_FORM.LENGTH]: Yup.number()
        .required()
        .min(0),
})

const mapState = (state, ownProps) => {
    const { garden } = ownProps
    return {
        isEditing: false,
        garden,
        loading: isAuthLoading(state),
    }
}

const mapDispatch = {
    addGarden,
    editGarden,
    deleteGarden,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withRouter,
    withFormik({
        mapPropsToValues,
        handleSubmit: async (
            values,
            {
                resetForm,
                props: { addGarden, isEditing, editGarden, garden, ...rest },
            },
        ) => {
            const action = garden
                ? () => editGarden(values, garden.id, rest)
                : () => addGarden(values, rest)
            await action()
            resetForm({})
        },
        validationSchema,
    }),
)(AddGardenForm)
