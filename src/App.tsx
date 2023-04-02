// @ts-nocheck
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SelectBox = ({ options, onSelect }) => {
  const handleChange = (e) => {
    const selectedOption = options.find(
      (option) => option.value === e.target.value
    );
    onSelect(selectedOption);
  };
  return (
    <select onChange={handleChange}>
      <option value="">Selecione uma opção</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const ButtonForm = ({ onSubmit }) => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: "button", label, value });
    setLabel("");
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Label:
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </label>
      <label>
        Value:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

const TextForm = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: "text", text });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Texto:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

const RichTextForm = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: "richText", text });
    setText("");
  };
  const handleTextChange = (value) => {
    setText(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Texto:</label>
      <ReactQuill
        value={text}
        onChange={handleTextChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
          ],
        }}
        placeholder="Digite aqui..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

const ImageForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: "image", name, url });
    setName("");
    setUrl("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

const Form = ({ onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const handleSubmit = (List) => {
    onSubmit(List);
    setSelectedOption(null);
  };
  return (
    <div>
      <SelectBox
        options={[
          { label: "Botão", value: "button" },
          { label: "Texto", value: "text" },
          { label: "Rich Text", value: "richText" },
          { label: "Imagem", value: "image" },
        ]}
        onSelect={handleSelect}
      />
      {selectedOption && (
        <div>
          {selectedOption.value === "button" && (
            <ButtonForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "text" && (
            <TextForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "richText" && (
            <RichTextForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "image" && (
            <ImageForm onSubmit={handleSubmit} />
          )}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [dataList, setDataList] = useState([]);
  const handleFormSubmit = (List) => {
    setDataList([...dataList, List]);
  };
  return (
    <div>
      <ul>
        {dataList.map((List, index) => (
          <li key={index}>
            <pre>{JSON.stringify(List, null, 2)}</pre>
          </li>
        ))}
      </ul>
      <h1>Adicionar novo commponente</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
