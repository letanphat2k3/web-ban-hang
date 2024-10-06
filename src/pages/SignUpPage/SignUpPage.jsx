import React, { useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import ImageLogoLogIn from '../../asset/images/logo-sign-in.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';



const SignUpPage = () => {
  // const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowPassword] = useState(false)

  // const [isShowConfirmPassword,SetIsShowConfirmPassword] = useState(false)
  const [isShowConfirmPassword] = useState(false)
  
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0, 0, 0, 0.53)', height:'100vh'}}>
     <div style={{width:'800px', height:'445px', borderRadius:'8px', backgroundColor:'#fff', display:'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          <InputFormComponent style={{marginBottom:'10px'}} placeholder='abc@gmail.com' />
          <div style={{position:'relative'}}>
            <span style={{
              zIndex:10,
              position:'absolute',
              top:'4px',
              right:'8px'
            }}>{
              isShowConfirmPassword ? (
                <EyeFilled/>
              ) :(
                <EyeInvisibleFilled/>
              )
            }
            </span>
            <InputFormComponent placeholder='password' style={{marginBottom:'10px'}}/>
          </div>

          <div style={{position:'relative'}}>
            <span style={{
              zIndex:10,
              position:'absolute',
              top:'4px',
              right:'8px'
            }}>{
              isShowPassword ? (
                <EyeFilled/>
              ) :(
                <EyeInvisibleFilled/>
              )
            }
            </span>
            <InputFormComponent placeholder='password' style={{marginBottom:'10px'}}/>
          </div>
          <ButtonComponent
                    bordered={false}
                    size={40} 
                    textButton = {'Đăng ký'}
                    styleButton = {{ 
                            backgroundColor: 'rgb(256, 57, 69)' , 
                            height:'48px',
                            width: '100%',
                            border:'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px'
                            }}
                    styleTextButton ={{color:'#fff', fontWeight:'700'}}
                >
            </ButtonComponent>
          <p>Bạn đã có tài khoản?  <WrapperTextLight >Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>

        <WrapperContainerRight>  
            <Image src={ImageLogoLogIn} preview={false} alt='image-logo' height='203px' width='203px'/>
            <h4>Mua sắm tại SimpleShop</h4>
        </WrapperContainerRight>
      
    </div>
   </div>
  )
}

export default SignUpPage