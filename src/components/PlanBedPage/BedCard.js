// @flow
import type { Bed } from '../../data/bed'
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFormik } from 'formik'
import styled from 'styled-components'
import { Card, Message, Input, Button } from 'semantic-ui-react'
import { format } from 'date-fns'
import { mapFormValues } from '../../utils/common'
import { makeBedUpdate } from '../../redux/bed'

const CardContainer = styled.div`
    position: fixed;
    right: 20px;
    bottom: 70px;
`

const Section = styled.div`
    margin-bottom: 15px;
`

const Flex = styled.div``

const BED_UPDATE = {
    WATER: 'WATER',
    FERTILIZE: 'FERTILIZE',
    WEED: 'WEED',
    HARVEST: 'HARVEST',
}

const BED_UPDATE_FORMATTED = {
    WATER: 'Water',
    FERTILIZE: 'Fertilize',
    WEED: 'Weed',
    HARVEST: 'Harvest',
}

const BED_FORM = {
    CREATED: 'created',
    TYPE: 'type',
}

const initialValues = {
    [BED_FORM.CREATED]: '',
    [BED_FORM.TYPE]: '',
}

type Props = {
    bed: Bed,
    handleSubmit: (typeof initialValues) => void,
    handleChange: any => void,
    values: typeof initialValues,
}

type State = {
    tab: ?string,
}

class BedCard extends Component<Props, State> {
    state = {
        tab: null,
    }

    handleTabClick = (e: any) => {
        const { handleChange } = this.props
        const { tab } = this.state
        const value = e.target.value
        const isSame = tab === value
        handleChange(e)
        this.setState({ tab: isSame ? null : value })
    }

    isActive = (value: string) => {
        const { tab } = this.state
        return tab === value
    }

    render() {
        const { bed, handleSubmit, handleChange, values } = this.props
        const { tab } = this.state
        const created = format(new Date(bed.created), 'MMM D, YYYY')
        const updateText = tab && BED_UPDATE_FORMATTED[tab]
        const valueForField = mapFormValues(values, initialValues)

        const {
            updates: { items },
        } = bed
        const { created: updateCreated } =
            items.find(({ type }) => type === tab) || {}
        const lastUpdated = updateCreated 
            ? format(new Date(updateCreated), 'MMM D, YYYY')
            : `N/A`
        

        return (
            <CardContainer>
                <Card>
                    <Card.Content>
                        <Card.Header>{'Bed Status'}</Card.Header>
                        <Card.Meta>{`created ${created}`}</Card.Meta>
                    </Card.Content>
                    <Card.Content>
                        <Section>
                            <Button.Group
                                fluid
                                size={'tiny'}
                                widths={4}
                                basic
                                compact>
                                <Button
                                    value={BED_UPDATE.WATER}
                                    name={BED_FORM.TYPE}
                                    onClick={this.handleTabClick}
                                    active={this.isActive(BED_UPDATE.WATER)}>
                                    Water
                                </Button>
                                <Button
                                    value={BED_UPDATE.FERTILIZE}
                                    name={BED_FORM.TYPE}
                                    onClick={this.handleTabClick}
                                    active={this.isActive(
                                        BED_UPDATE.FERTILIZE,
                                    )}>
                                    Fertilize
                                </Button>
                                <Button
                                    value={BED_UPDATE.WEED}
                                    name={BED_FORM.TYPE}
                                    onClick={this.handleTabClick}
                                    active={this.isActive(BED_UPDATE.WEED)}>
                                    Weed
                                </Button>
                                <Button
                                    value={BED_UPDATE.HARVEST}
                                    name={BED_FORM.TYPE}
                                    onClick={this.handleTabClick}
                                    active={this.isActive(BED_UPDATE.HARVEST)}>
                                    Harvest
                                </Button>
                            </Button.Group>
                        </Section>
                        {updateText && (
                            <div>
                                <Section>
                                    <Flex>
                                        <Message
                                            className={'center aligned'}
                                            info
                                            floating>
                                            <Message.Header>
                                                {`Last ${updateText}`}
                                            </Message.Header>
                                            {lastUpdated}
                                        </Message>
                                    </Flex>
                                </Section>
                                <Section>
                                    <Input
                                        fluid
                                        name={BED_FORM.CREATED}
                                        value={valueForField(BED_FORM.CREATED)}
                                        onChange={handleChange}
                                        type={'date'}
                                        size={'mini'}
                                        label={'Date'}
                                    />
                                </Section>
                                <Section>
                                    <Button
                                        fluid
                                        primary
                                        compact
                                        type={'submit'}
                                        onClick={handleSubmit}
                                        size={'tiny'}>
                                        {`Add ${updateText} Event`}
                                    </Button>
                                </Section>
                            </div>
                        )}
                    </Card.Content>
                </Card>
            </CardContainer>
        )
    }
}

const mapDispatch = {
    makeBedUpdate,
}

export default compose(
    connect(
        null,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        handleSubmit: (values, { props }) => {
            console.log({ values })
            const { makeBedUpdate } = props
            makeBedUpdate(values)
        },
    }),
)(BedCard)
