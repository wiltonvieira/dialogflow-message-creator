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
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
      onChange={handleChange}
    >
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
      <label className="flex">
        Label:
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        />
      </label>
      <label className="flex">
        Value:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        />
      </label>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Enviar
      </button>
    </form>
  );
};

const FixedButtonForm = ({ onSubmit }) => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [leftIconName, setLeftIconName] = useState("");

  const handleSelect = (option) => {
    console.log(option);
    setLeftIconName(option.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: "fixedButton", label, value, leftIconName });
    setLabel("");
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Left icon name:
          <SelectBox
            options={[
              { label: "←", value: "arrow-left" },
              { label: "→", value: "arrow-right" },
              { label: "ᐩ", value: "plus" },
            ]}
            onSelect={handleSelect}
          />
        </label>

        <label className="flex">
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          />
        </label>
        <label className="flex">
          Value:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          />
        </label>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Enviar
        </button>
      </form>
    </>
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
      <label className="flex">
        Texto:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        />
      </label>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Enviar
      </button>
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
      <div className="p-1">
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
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Enviar
      </button>
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
      <label className="flex">
        Label:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        />
      </label>
      <label className="flex">
        URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        />
      </label>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Enviar
      </button>
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
          { label: "Text", value: "text" },
          { label: "Button", value: "button" },
          { label: "Fixed Button", value: "fixed-button" },
          { label: "HTML", value: "richText" },
          { label: "Image", value: "image" },
        ]}
        onSelect={handleSelect}
      />
      {selectedOption && (
        <div>
          {selectedOption.value === "text" && (
            <TextForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "button" && (
            <ButtonForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "fixed-button" && (
            <FixedButtonForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "image" && (
            <ImageForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "richText" && (
            <RichTextForm onSubmit={handleSubmit} />
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

  const message = {
    messageType: "default",
    components: dataList,
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-1">
        <h1 className="text-3xl font-bold">Adicionar novo commponente</h1>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <div className="flex flex-1 bg-slate-200 p-5 rounded-2xl">
        <pre className="text-sm">{JSON.stringify(message, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
