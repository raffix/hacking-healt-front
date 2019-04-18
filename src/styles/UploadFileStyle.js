import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  cursor: pointer;
  width: 90vh;
  padding-bottom: -30vh;
  margin-top: -5vh;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#CD9A7B",
  upload: "#CE9F73",
  error: "#e57878",
  success: "#CE9F73"
};

const Icone = styled.a`
  margin-left:20px;
`;

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || "upload"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const Container = styled.div`
  height: 100%;
  margin-bottom: 10vh;
  width: 90vh;
  margin-left: 40vh;
  display: flex;
  // justify-content: center;
  // align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  // max-width: 400px;
  // background: #58120D;
  border-radius: 4px;
  margin-top: 25vh;
`;


