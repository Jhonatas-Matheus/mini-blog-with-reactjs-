import styled, { css } from "styled-components";
interface iStyledContainerProp {
  mode?: string;
}
export const StyledContainer = styled.div<iStyledContainerProp>`
  min-height: 60vh;
  margin-bottom: 5em;
  ${({ mode }) => {
    if (mode === "error") {
      return css`
        color: #721c24;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        padding: 5px;
        border-radius: 5px;
      `;
    }
  }}
`;
