import React from 'react'
import { Badge, Col} from 'antd'
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
 } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div style={{width:'100%', background:'#6C7EE1', display:'flex', justifyContent:'center'}}>
      <WrapperHeader >
        <Col span={5}>
          <WrapperTextHeader>
            SimpleShop
          </WrapperTextHeader>
        </Col>
        <Col span={13}>
        <ButtonInputSearch 
          bordered = {false}
          size = "large"
          textButton = "Tìm kiếm"     
          placeholder="Nhập sản phẩm cần tìm kiếm..."
        />

        </Col>
        <Col span={6} style={{display:'flex', gap:'54px', alignItems: 'center'}}>
          <WrapperHeaderAccount>
           <UserOutlined style={{fontSize: '30px'}}/>
           <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>
                            Tài khoản 
                </WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
           </div>
          </WrapperHeaderAccount>
          <div>
              <Badge count={4} size="small">
                <ShoppingCartOutlined style={{color:'#fff', fontSize:'30px'}} />
              </Badge>
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent