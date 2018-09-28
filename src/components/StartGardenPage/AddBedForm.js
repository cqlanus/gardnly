// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Header, Divider, Button } from 'semantic-ui-react'
import { withFormik } from 'formik'
import { addBed } from '../../redux/garden'
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
    [ADD_BED_FORM.LENGTH]: 0,
    [ADD_BED_FORM.WIDTH]: 0,
    [ADD_BED_FORM.EXPOSURE]: '--',
    [ADD_BED_FORM.QUANTIY]: 0,
}

type Props = {
    handleSubmit: any => void,
    handleChange: any => void,
    setFieldValue: (any, any) => void,
    values: typeof initialValues,
    isSubmitting: boolean,
}

class AddBedForm extends Component<Props> {
    handleChange = (e, { value }) =>
        this.props.setFieldValue(ADD_BED_FORM.EXPOSURE, value)

    render() {
        const { handleSubmit, handleChange, values, isSubmitting } = this.props
        return (
            <div>
                <h1>{Strings.letsAddToGarden}</h1>
                <Divider />
                <Form onSubmit={handleSubmit}>
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
                    <Form.Group>
                        <Button.Group primary widths={'3'}>
                            <Button type={'submit'} loading={isSubmitting}>
                                {Strings.continueAddingBeds}
                            </Button>
                            <Button.Or />
                            <Button
                                onClick={() => {
                                    console.log('hello')
                                }}>
                                {Strings.beginFillingBeds}
                            </Button>
                        </Button.Group>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

const mapDispatch = {
    addBed,
}

export default compose(
    connect(
        null,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        enableReinitialize: true,
        handleSubmit: async (
            values,
            { resetForm, setSubmitting, props: { history, addBed } },
        ) => {
            const { quantity, ...bed } = values
            setSubmitting(true)
            console.log({ bed })
            await addBed(bed)
            resetForm({})
            setSubmitting(false)
        },
    }),
)(AddBedForm)
