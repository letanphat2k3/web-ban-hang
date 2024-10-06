import React from 'react'
import { 
    StyleNameProduct,
    WrapperCardStyle,
    WrapperDiscountText,
    WrapperImageLogo,
    WrapperPriceText, 
    WrapperReportText } from './style'
import {
    StarFilled
  } from '@ant-design/icons';
import logo from '../../asset/images/logo.png'


const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        bodyStyle={{padding:'10px'}}
        headStyle={{width: '200px', height:'200px'}}
        style={{ width: '200px' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <WrapperImageLogo src={logo} alt="logo" />
        <StyleNameProduct>
            iphone
        </StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight:'4px'}}> 4.96 <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}} /> </span>
            <span> | đã bán 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{marginRight:'8px'}}> 
                1.000.000đ
            </span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
  </WrapperCardStyle>
    
  )
}

export default CardComponent