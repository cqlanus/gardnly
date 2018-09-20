import React from 'react'
import { Form } from 'semantic-ui-react'
import { withFormik } from 'formik'
import Strings from '../../resources/Strings'

const GARDEN_BED_FORM = {
    NAME: 'name',
    LENGTH: 'length',
    WIDTH: 'width',
}

const NewGardenBedForm = ({ values, handleChange, handleSubmit }) => {
    const { name, width, length } = values
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input
                    label={Strings.bedName}
                    name={GARDEN_BED_FORM.NAME}
                    onChange={handleChange}
                    value={name}
                />
                <Form.Input
                    label={`${Strings.length} (${Strings.ft})`}
                    type="number"
                    name={GARDEN_BED_FORM.LENGTH}
                    onChange={handleChange}
                    value={length}
                />
                <Form.Input
                    label={`${Strings.width} (${Strings.ft})`}
                    type="number"
                    name={GARDEN_BED_FORM.WIDTH}
                    onChange={handleChange}
                    value={width}
                />
            </Form.Group>
            <Form.Button type="submit" primary fluid>
                Create
            </Form.Button>
        </Form>
    )
}

const initialValues = {
    [GARDEN_BED_FORM.NAME]: '',
    [GARDEN_BED_FORM.WIDTH]: 0,
    [GARDEN_BED_FORM.LENGTH]: 0,
}

export default withFormik({
    mapPropsToValues: () => initialValues,
    handleSubmit: (values, { props: { onSubmit } }) => {
        onSubmit(values)
    },
})(NewGardenBedForm)
