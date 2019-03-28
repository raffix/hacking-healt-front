import React, { Component } from 'react'; 
import './styles/App.css';
import './styles/NavigationFormStyle.css';
import './styles/InputTextStyle.css';
import './styles/ActionsButtonsStyle.css';
import './styles/UploadFileStyleCss.css';
import NavigationFormComponent from './components/NavigationFormComponent';
import UploadFileComponent from './components/UploadFileComponent';
import FileListComponent from './components/FileListComponent';

import { uniqueId } from "lodash";
import filesize from "filesize";

import api from "./services/api";

import { Container, Content } from "./styles/UploadFileStyle";

const inputs = [
  {
    "id": "nome",
    "title": "Sobre a criança",
    "subtitle": "Nome completo",
    "hint": "Informe o nome completo da criança",
    "placeholder": "Digite aqui"
  }, {
    "id": "input2",
    "title": "Input 2",
    "subtitle": "Input 2",
    "hint": "Input 2",
    "placeholder": "Digite aqui"
  }, {
    "id": "input3",
    "title": "Input 3",
    "subtitle": "Input 3",
    "hint": "Input 3",
    "placeholder": "Digite aqui"
  }, {
    "id": "input4",
    "title": "Input 4",
    "subtitle": "Input 4",
    "hint": "Input 4",
    "placeholder": "Digite aqui"
  },


];

class App extends Component {

  state = {
    uploadedFiles: []
  };

  async componentDidMount() {
    const response = await api.get("posts");

    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("posts", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  handleDelete = async id => {
    await api.delete(`posts/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const { uploadedFiles } = this.state;
    return (
      <div className="App">
        <NavigationFormComponent inputs={inputs} />

        {/* ***upload arquivo*** */}
        <Container>
        <Content>
          <UploadFileComponent onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileListComponent files={uploadedFiles} onDelete={this.handleDelete} />
          )}
        </Content>
      </Container>
      {/* ********************** */}

      </div>
    );
  }
}

export default App;
