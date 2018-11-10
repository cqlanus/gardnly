// @flow
import React, { Component } from 'react'
import { Sidebar } from 'semantic-ui-react'
import styled from 'styled-components'
import Crop from './Crop'
import Images from '../../resources/Images'
import { defineCropHeightWidth, defineCropGridStyles } from '../../utils/bed'
import { getProps, arrayify } from '../../utils/common'

const StyledSidebar = styled(Sidebar)`
    background-color: #00000030;
`

const CropItemContainer = styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 8px;
    box-shadow: 1px 1px 4px #00000060;
    display: flex;
    align-items: center;
    &:hover {
        box-shadow: 2px 2px 6px #00000090;
        cursor: pointer;
    }
`

const CropItemImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 5px 0;
    box-sizing: border-box;
    width: 40px;
    border-radius: 5px;
    margin-right: 10px;
    &:hover {
        background-color: #fc0;
        cursor: grab;
    }
`

const CropItemBody = styled.div`
    flex: 3;
`

const SquareFootContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

const SquareFootGrid = styled.div`
    display: grid;
    grid-template-columns: ${getProps('columns', '1fr')};
    grid-template-rows: ${getProps('rows', '1fr')};
`

const SquareFootUnit = styled.img`
    height: ${getProps('height')};
    width: ${getProps('width')};
`

type Props = {
    crops: Array<*>,
    visible: boolean,
}

export default class CropSidebar extends Component<Props> {
    renderSquareFootIcon = (numPerSqFt: number) => {
        const array = arrayify(numPerSqFt)
        const { height, width } = defineCropHeightWidth(numPerSqFt, 40)
        const { columns, rows } = defineCropGridStyles(numPerSqFt)
        return (
            <SquareFootContainer>
                <SquareFootGrid columns={columns} rows={rows}>
                    {array.map(i => (
                        <SquareFootUnit
                            key={i}
                            src={Images.shade}
                            height={height}
                            width={width}
                        />
                    ))}
                </SquareFootGrid>
            </SquareFootContainer>
        )
    }

    renderCropListItem = (crop: any) => {
        return (
            <CropItemContainer key={crop.id}>
                <CropItemImage>
                    <Crop height={'40px'} width={'40px'} crop={crop} />
                </CropItemImage>
                <CropItemBody>
                    <h3>{crop.commonName}</h3>
                </CropItemBody>
                {this.renderSquareFootIcon(crop.numPerSqFt)}
            </CropItemContainer>
        )
    }

    render() {
        const { crops, visible } = this.props
        return (
            <StyledSidebar
                animation="push"
                direction={'right'}
                visible={visible}
                width={'wide'}>
                {crops.map(this.renderCropListItem)}
            </StyledSidebar>
        )
    }
}
