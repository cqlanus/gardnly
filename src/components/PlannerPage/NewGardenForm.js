import React from 'react'
import { Form } from 'semantic-ui-react'
import { withFormik } from 'formik'

const NewGardenForm = ({ values, handleChange, handleSubmit }) => {
    const { name, width, length } = values
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input
                    label="Garden Name"
                    name="name"
                    onChange={handleChange}
                    value={name}
                />
                <Form.Input
                    label="Length"
                    type="number"
                    name="length"
                    onChange={handleChange}
                    value={length}
                />
                <Form.Input
                    label="Width"
                    type="number"
                    name="width"
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
    name: '',
    width: 0,
    length: 0,
}

export default withFormik({
    mapPropsToValues: () => initialValues,
    handleSubmit: (values, { props: { onSubmit } }) => {
        onSubmit(values)
    },
})(NewGardenForm)
