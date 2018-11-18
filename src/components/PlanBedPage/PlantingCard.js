// @flow
import type { Planting } from '../../data/crop'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Image, Input, Button } from 'semantic-ui-react'

const CardContainer = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
`

const Section = styled.div`
    margin-bottom: 5px;
`

type Props = {
    planting: Planting,
}

class PlantingCard extends Component<Props> {
    render() {
        const { planting } = this.props
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
                                <Button>{'By Seed'}</Button>
                                <Button>{'Transplanted'}</Button>
                            </Button.Group>
                        </Section>
                        <Section>
                            <Card.Description>
                                {'Date planted'}
                            </Card.Description>
                            <Input
                                fluid
                                type={'date'}
                                size={'mini'}
                                action={'Add'}
                            />
                        </Section>
                        <Section>
                            <Button fluid primary size={'tiny'}>
                                {'Save'}
                            </Button>
                        </Section>
                    </Card.Content>
                </Card>
            </CardContainer>
        )
    }
}

export default PlantingCard
