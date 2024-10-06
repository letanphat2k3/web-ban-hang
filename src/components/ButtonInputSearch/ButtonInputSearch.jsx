import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
  const { 
    size, 
    placeholder, 
    textButton, 
    bordered = false, 
    backgroundColorInput = "#fff", 
    backgroundColorButton="#92B9E3",
    colorButton="#fff" 
    } = props;
  
  return (
    <div style={{ display: 'flex', backgroundColor: "#fff", borderRadius:"10px", }}>
      <InputComponent 
        size={size} 
        bordered={bordered}
        placeholder={placeholder} 
        style={{ backgroundColor: backgroundColorInput }} 
      />
      <ButtonComponent 
        size={size} 
        icon={<SearchOutlined color={colorButton} style={{color:'#fff'}} />}
        textButton = {textButton}
        styleButton = {{ backgroundColor: backgroundColorButton , color: colorButton, border: !bordered && 'none' }}
        styleTextButton ={{color: colorButton}}
      >
      </ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
