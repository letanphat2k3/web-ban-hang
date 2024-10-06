import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputStyle = styled(Input)`
    border-top: none;
    border-right: none;
    border-left: none;
    &:focrs {
        background-color: rgb(232, 240, 254);
    }
    out-line: none;
`