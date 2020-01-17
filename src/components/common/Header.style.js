import styled from "styled-components";
import { LayoutContent } from './Layout.style'

export const HeaderStyle = styled.header`
  padding: 15px;
  font-size: 18px;
`;

export const HeaderContent = styled(LayoutContent)`
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const HeaderList = styled.ul`
  display: inline-flex;
`;

export const HeaderItem = styled.li`
  & + & {
    margin-left: 20px;
  }
`;
