// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Header, Divider, Button } from 'semantic-ui-react'
import { withFormik } from 'formik'
import { addBed } from '../../redux/bed'
import { mapFormValues } from '../../utils/common'
import Strings from '../../resources/Strings'

const ADD_BED_FORM = {
    LENGTH: 'length',
    WIDTH: 'width',
    EXPOSURE: 'exposure',
    QUANTIY: 'quantity',
}

const EXPOSURE_OPTIONS = [
    { key: '', text: '--', value: '--' },
    { key: 'full', text: 'Full Sun', value: 'full' },
    { key: 'partial', text: 'Partial Sun', value: 'partial' },
    { key: 'shade', text: 'Shade', value: 'shade' },
]

const initialValues = {
    [ADD_BED_FORM.LENGTH]: '',
    [ADD_BED_FORM.WIDTH]: '',
    [ADD_BED_FORM.EXPOSURE]: '--',
    [ADD_BED_FORM.QUANTIY]: '',
}

type Props = {
    handleSubmit: any => void,
    handleChange: any => void,
    setFieldValue: (any, any) => void,
    values: typeof initialValues,
    isSubmitting: boolean,
    addBed: (any, number) => void,
    history: any,
    match: any,
    garden: any,
}

class AddBedForm extends Component<Props> {
    componentDidMount() {
        const { garden, history } = this.props
        !garden && history.push('/home')
    }

    handleChange = (e, { value }) =>
        this.props.setFieldValue(ADD_BED_FORM.EXPOSURE, value)

    handleBeginFillingBeds = async () => {
        const { addBed, values, history } = this.props
        const { quantity, ...bed } = values
        await addBed(bed, Number(quantity))
        history.push(`/home/bed`)
    }

    render() {
        const { handleSubmit, handleChange, values, isSubmitting } = this.props
        return (
            <div>
                <h1>{Strings.letsAddToGarden}</h1>
                <Divider />
                <Form>
                    <Header>{Strings.tellUsAboutBed}</Header>
                    <Form.Group widths={'equal'}>
                        <Form.Input
                            label={Strings.length}
                            type={'number'}
                            min={'1'}
                            value={mapFormValues(
                                values,
                                initialValues,
                                ADD_BED_FORM.LENGTH,
                            )}
                            name={ADD_BED_FORM.LENGTH}
                            onChange={handleChange}
                        />
                        <Form.Input
                            label={Strings.width}
                            min={'1'}
                            value={mapFormValues(
                                values,
                                initialValues,
                                ADD_BED_FORM.WIDTH,
                            )}
                            type={'number'}
                            name={ADD_BED_FORM.WIDTH}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group widths={'equal'}>
                        <Form.Select
                            label={Strings.howMuchSun}
                            options={EXPOSURE_OPTIONS}
                            value={mapFormValues(
                                values,
                                initialValues,
                                ADD_BED_FORM.EXPOSURE,
                            )}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            label={Strings.howManyBeds}
                            type={'number'}
                            min={'1'}
                            value={mapFormValues(
                                values,
                                initialValues,
                                ADD_BED_FORM.QUANTIY,
                            )}
                            name={ADD_BED_FORM.QUANTIY}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
                <Button.Group primary widths={'3'}>
                    <Button
                        onClick={handleSubmit}
                        type={'submit'}
                        loading={isSubmitting}>
                        {Strings.continueAddingBeds}
                    </Button>
                    <Button.Or />
                    <Button onClick={this.handleBeginFillingBeds}>
                        {Strings.beginFillingBeds}
                    </Button>
                </Button.Group>
            </div>
        )
    }
}

const mapState = state => {
    return {
        garden: state.garden.currentGarden,
    }
}

const mapDispatch = {
    addBed,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        enableReinitialize: true,
        handleSubmit: async (
            values,
            { resetForm, setSubmitting, props: { history, addBed } },
        ) => {
            setSubmitting(true)
            const { quantity, ...bed } = values
            await addBed(bed, Number(quantity))
            resetForm({})
            setSubmitting(false)
        },
    }),
)(AddBedForm)
