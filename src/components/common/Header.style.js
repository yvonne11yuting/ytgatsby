import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 15px;
  font-size: 18px;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
`;

export const HeaderList = styled.ul`
  display: inline-flex;
`;

export const HeaderItem = styled.li`
  & + & {
    margin-left: 20px;
  }
`;
