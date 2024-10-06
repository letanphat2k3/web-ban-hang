import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  height: 44px;
  font-size: 15px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
  background-color: #fff;
  &:hover{
    color: rgb(11, 116, 229);
    background-color: rgb(13, 92, 128);
    span {
      color: #fff;
    }
  }
  width: 100%;
  aligm-item: center;
  text-align: center;
`

export const WrapperProduct = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
`