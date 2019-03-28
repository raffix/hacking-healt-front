import React, { Component } from "react";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./../styles/UploadFileStyle";
import { FiUpload } from "react-icons/fi";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste e solte o arquivo aqui ou</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  };

  render() {
    const { onUpload } = this.props;
    return (
      <div className="CarregaArquivoComponente">
        <h1>Upgrade de arquivos</h1>
        <h2>Campo para subir arquivos</h2>
        <div className="CarregaArquivo">
          <a className="IconeUpload"> <FiUpload /></a>
          <Dropzone accept="image/*" onDropAccepted={onUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                {this.renderDragMessage(isDragActive, isDragReject)}
                <h3>Procure no Computador</h3>
              </DropContainer>
            )}
            
          </Dropzone>
         </div>
       </div>
     );
  }
}
