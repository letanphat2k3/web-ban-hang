import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from './style'
import SlideComponent from '../../components/SlideComponent/SlideComponent'
import slide1 from '../../asset/images/slide1.webp'
import slide2 from '../../asset/images/slide2.webp'
import slide3 from '../../asset/images/slide3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
// import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'


const HomePage = () => {
  const arr = ['TV', 'Tu Lanh', 'laptop']
  return (
    <>
     <div style={{width:'1270px', margin: '0 auto'}}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct>
    </div> 
    <div className='body' style={{backgroundColor: '#efefef', width:'100%'}}>
      <div id='container' style={{height:'2000px', width:'1270px', margin:'0 auto'}}>
      <SlideComponent arrImage = {[slide1, slide2, slide3]}/>
        <WrapperProduct>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
        </WrapperProduct>
        <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'10px'}}>
          <WrapperButtonMore 
            textButton='Xem thêm' 
            type='outline' styleButton={{
                                border :'1px solid rgb(11, 116, 229)', 
                                color: 'rgb(11, 116, 229)',
                                height: '38px',
                                width: '240px', 
                                borderRadius:'4px'}}
            styleTextButton={{fontWeight: '500'}} />
        </div>
      </div>


       {/* <NavBarComponent/> */}

    </div>
    </>
  )
}

export default HomePage