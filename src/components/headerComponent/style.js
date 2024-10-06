import { Row } from 'antd'
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
    padding: 10px 0px;
    width: 1270px;
    background-color: #6C7EE1;
    aligh-item: center;
    gap: 16px;
    flex-wrap: nowrap; // xử lý khoảng cách
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    front-weight: bold;
    text-alight: left
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    aligh-item: center;
    color: #fff;
    gap: 10px;
    font-size:12px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap; // xử lý không cho rớt chữ khi phóng to hoặc thu nhỏ
`

