import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../asset/images/DTSamSung.png'
import imageProductSmall from '../../asset/images/DTss1.png'
import {
    StarFilled,
    PlusOutlined,
    MinusOutlined,
  } from '@ant-design/icons';
import { 
    WrapperAddressTextProduct, 
    WrapperInputNumber, 
    WrapperPriceProduct, 
    WrapperPriceTextProduct, 
    WrapperQualityProduct, 
    WrapperStyleTextSell, 
    WrpperStyleImageCol, 
    WrpperStyleImageSmall, 
    WrpperStyleNameProduct } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ProductDetailsComponent = () => {
    const onChange = () => {}
  return (
    <Row style={{padding:'16px', backgroundColor:'#fff', borderRadius:'4px'}}>
        <Col span={10} style={{border: '1px solid #e5e5e5', paddingRight:'8px' , borderRadius:'4px'}}>
            <Image src={imageProduct} alt='image product' preview={false}/>
            <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                <WrpperStyleImageCol span={4}>
                    <WrpperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                </WrpperStyleImageCol>
                <WrpperStyleImageCol span={4}>
                    <WrpperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                </WrpperStyleImageCol>
                <WrpperStyleImageCol span={4}>
                    <WrpperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                </WrpperStyleImageCol>
                <WrpperStyleImageCol span={4}>
                    <WrpperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                </WrpperStyleImageCol>
                <WrpperStyleImageCol span={4}>
                    <WrpperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                </WrpperStyleImageCol>
                <WrpperStyleImageCol span={4}>
                    <WrpperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
                </WrpperStyleImageCol>
            </Row>
        </Col>
        <Col span={14} style={{paddingLeft:'10px'}}>
            <WrpperStyleNameProduct> Điện thoại Xiaomi Redmi Note 12 (8GB/128GB) - Hàng chính hãng </WrpperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize:'12px', color:'rgb(253, 216, 54)'}}/>
                <WrapperStyleTextSell> | đã bán 1000+</WrapperStyleTextSell>
            </div>

            <WrapperPriceProduct>
                <WrapperPriceTextProduct>2.000.000đ</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressTextProduct>
                <span>Giao đến </span>
                <span className="address">Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
                <span className='change-address'> - Đổi địa chỉ</span>
            </WrapperAddressTextProduct>

            <div style={{margin: '10px 0 20px', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5', padding: '10px 0'}}>
                <div style={{marginBottom:'10px'}}> Số lượng: </div>
                <WrapperQualityProduct>
                    <button style={{border:'none', background:'transparent'}}>
                        <MinusOutlined  style={{color:'#000', fontSize:'20px'}} />
                    </button>
                    <WrapperInputNumber  defaultValue={3} onChange={onChange} size='small' />
                    <button style={{border:'none',  background:'transparent'}}>
                        <PlusOutlined  style={{color:'#000', fontSize:'20px'}} />
                    </button>

                </WrapperQualityProduct>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <ButtonComponent
                    bordered={false}
                    size={40} 
                    textButton = {'Chọn mua'}
                    styleButton = {{ 
                            backgroundColor: 'rgb(256, 57, 69)' , 
                            height:'48px',
                            width: '220px',
                            border:'none',
                            borderRadius: '4px',
                             }}
                    styleTextButton ={{color:'#fff', fontWeight:'700'}}
                >
                </ButtonComponent>

                <ButtonComponent
                    bordered={false}
                    size={40} 
                    textButton = {'Mua trả sau'}
                    styleButton = {{ 
                            backgroundColor: '#fff' , 
                            height:'48px',
                            width: '220px',
                            border:'1px solid rgb(13, 92, 182)',
                            borderRadius: '4px',
                             }}
                    styleTextButton ={{color:'rgb(13, 92, 182)', fontSize:'15px'}}
                >
                </ButtonComponent>
            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent