import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import {  Col, Pagination, Row } from 'antd'
import { WrapperProduct, WrapperNavBar } from './style'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'

const TypeProductPage = () => {
    const onChange = () => {}
  return (
    <div style={{padding: '0 120px', backgroundColor:'#efefef'}}>
        <Row style={{ flexWrap:'nowrap', paddingTop:'10px' }}>
            <WrapperNavBar span={4} >
                <NavBarComponent/>
            </WrapperNavBar>
            <Col span={20}>
                <WrapperProduct>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProduct>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Pagination 
                        defaultCurrent={2} 
                        total={100} 
                        onChange={onChange} 
                    />
                </div>
            </Col>

        </Row>
    </div>
  )
}

export default TypeProductPage