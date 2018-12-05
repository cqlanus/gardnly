// @flow
import type { Planting } from '../../data/crop'
import React, { Component } from 'react'
import { compose } from 'redux'
import { withFormik } from 'formik'
import styled from 'styled-components'
import { Card, Image, Input, Button } from 'semantic-ui-react'
import { mapFormValues } from '../../utils/common'

const CardContainer = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
`

const Section = styled.div`
    margin-bottom: 15px;
`

const PLANTING_FORM = {
    PLANTED_BY: 'planted',
    PLANTED_ON: 'plantedOn',
}

const initialValues = {
    [PLANTING_FORM.PLANTED_ON]: '',
    [PLANTING_FORM.PLANTED_BY]: '',
}

const PLANTED_BY = {
    SEED: 'SEED',
    TRANSPLANT: 'TRANSPLANT',
}

type Props = {
    planting: Planting,
    handleSubmit: (typeof initialValues) => void,
    handleChange: any => void,
    values: typeof initialValues,
    dirty: boolean,
    updatePlanting: any => void,
}

type State = {
    planted: ?string,
}

const isActive = planted => state => planted === state

class PlantingCard extends Component<Props, State> {
    state = {
        planted: null,
    }

    componentDidUpdate(lastProps) {
        const { planting: lastPlanting } = lastProps
        const { planting } = this.props
        const hasNewPlanted = planting && !lastPlanting
        const plantingHasChanged =
            planting &&
            lastPlanting &&
            planting.planted !== lastPlanting.planted
        if (hasNewPlanted || plantingHasChanged) {
            this.setState({ planted: planting.planted })
        }
    }

    handleBySeed = e => {
        const { handleChange } = this.props
        handleChange(e)
        this.setState({ planted: e.target.value })
    }

    render() {
        const {
            planting,
            handleSubmit,
            handleChange,
            values,
            dirty,
        } = this.props
        const { planted } = this.state
        const bySeed = isActive(PLANTED_BY.SEED)
        const byTransplant = isActive(PLANTED_BY.TRANSPLANT)
        const valueForField = mapFormValues(values, initialValues)
        if (!planting) {
            return null
        }
        const { crop } = planting

        return (
            <CardContainer>
                <Card>
                    <Card.Content>
                        <Image
                            floated={'right'}
                            size={'mini'}
                            src={crop.image}
                        />
                        <Card.Header>{crop.commonName}</Card.Header>
                        <Card.Meta>{crop.latinName}</Card.Meta>
                        <Card.Meta>{`Row ${planting.row +
                            1} | Col ${planting.column + 1}`}</Card.Meta>
                    </Card.Content>
                    <Card.Content>
                        <Section>
                            <Button.Group fluid size={'tiny'} widths={3} basic>
                                <Button
                                    active={bySeed(planted)}
                                    onClick={this.handleBySeed}
                                    value={PLANTED_BY.SEED}
                                    name={PLANTING_FORM.PLANTED_BY}>
                                    {'By Seed'}
                                </Button>
                                <Button
                                    active={byTransplant(planted)}
                                    onClick={this.handleBySeed}
                                    value={PLANTED_BY.TRANSPLANT}
                                    name={PLANTING_FORM.PLANTED_BY}>
                                    {'Transplanted'}
                                </Button>
                            </Button.Group>
                        </Section>
                        <Section>
                            <Input
                                fluid
                                value={valueForField(PLANTING_FORM.PLANTED_ON)}
                                name={PLANTING_FORM.PLANTED_ON}
                                onChange={handleChange}
                                type={'date'}
                                size={'mini'}
                                label={'Date planted'}
                            />
                        </Section>
                        <Section>
                            <Button
                                disabled={!dirty}
                                fluid
                                primary
                                type={'submit'}
                                size={'tiny'}
                                onClick={handleSubmit}>
                                {'Save'}
                            </Button>
                        </Section>
                    </Card.Content>
                </Card>
            </CardContainer>
        )
    }
}

const mapPropsToValues = ({ planting }) => {
    if (planting) {
        const { planted, plantedOn } = planting
        return { planted, plantedOn }
    } else {
        return initialValues
    }
}

export default compose(
    withFormik({
        mapPropsToValues,
        enableReinitialize: true,
        handleSubmit: (values, { props: { planting, updatePlanting } }) => {
            const input = { id: planting.id, ...values }
            updatePlanting(input)
        },
    }),
)(PlantingCard)
