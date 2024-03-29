// @ts-nocheck
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SelectBox = ({ options, onSelect, selectedValue }) => {
  const handleChange = (e) => {
    const selectedOption = options.find(
      (option) => option.value === e.target.value
    );
    onSelect(selectedOption);
  };
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 mt-3"
      onChange={handleChange}
      value={selectedValue}
    >
      <option value="">Selecione o tipo de componente</option>
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
    <form class="space-y-2" onSubmit={handleSubmit}>
      <label class="flex items-center">
        Label:
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        />
      </label>
      <label class="flex items-center">
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
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setLeftIconName(option.value);
    setSelectedOption(option.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: "fixedButton", label, value, leftIconName });
    setLabel("");
    setValue("");
    setLeftIconName("");
    setSelectedOption("");
  };

  return (
    <>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <label class="flex items-center">
          Left icon name:
          <SelectBox
            options={[
              { label: "←", value: "arrow-left" },
              { label: "→", value: "arrow-right" },
              { label: "ᐩ", value: "plus" },
            ]}
            onSelect={handleSelect}
            selectedValue={selectedOption}
          />
        </label>

        <label class="flex items-center">
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          />
        </label>

        <label class="flex items-center">
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
  const [label, setLabel] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: "text", label });
    setLabel("");
  };
  return (
    <form class="space-y-2" onSubmit={handleSubmit}>
      <label class="flex items-center">
        Label:
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
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

const HTMLForm = ({ onSubmit }) => {
  const [label, setLabel] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: "html", label });
    setLabel("");
  };
  const handleTextChange = (value) => {
    setLabel(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-1">
        <ReactQuill
          value={label}
          onChange={handleTextChange}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              [
                "bold",
                "italic",
                "underline",
                "strike",
                // "blockquote"
              ],
              // [{ color: [] }, { background: [] }],
              [{ align: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              [
                "link",
                // "image",
                // "video"
              ],
              // ["clean"],
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
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [typeOfFile, setTypeOfFile] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type: typeOfFile, label, value });
    setLabel("");
    setValue("");
    setSelectedOption("");
    setTypeOfFile("");
  };

  const handleSelect = (option) => {
    setTypeOfFile(option.value);
    setSelectedOption(option.value);
  };

  return (
    <form class="space-y-2" onSubmit={handleSubmit}>
      <label class="flex items-center">
        File Type:
        <SelectBox
          options={[
            { label: "image", value: "image" },
            { label: "pdf", value: "file" },
            // { label: "video", value: "video" },
            // { label: "audio", value: "audio" },
          ]}
          onSelect={handleSelect}
          selectedValue={selectedOption}
        />
      </label>

      <label class="flex items-center">
        Label:
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        />
      </label>
      <label class="flex items-center">
        Link:
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
          { label: "HTML", value: "html" },
          { label: "File", value: "file" },
        ]}
        onSelect={handleSelect}
        selectedValue={selectedOption ? selectedOption.value : ""}
      />
      {selectedOption && (
        <div className="mt-4">
          {selectedOption.value === "text" && (
            <TextForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "button" && (
            <ButtonForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "fixed-button" && (
            <FixedButtonForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "file" && (
            <ImageForm onSubmit={handleSubmit} />
          )}
          {selectedOption.value === "html" && (
            <HTMLForm onSubmit={handleSubmit} />
          )}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [intentTitle, setIntentTitle] = useState("");
  const [dataList, setDataList] = useState([]);
  const handleFormSubmit = (List) => {
    setDataList([...dataList, List]);
  };

  const message = {
    intentTitle: intentTitle,
    components: dataList,
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(JSON.stringify(message, null, 2))
      .then(() => alert("Itens copiados para a área de transferência"))
      .catch((err) => alert(`Erro ao copiar itens: ${err}`));
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-1 p-2">
        <h1 className="font-bold mb-2">Título da Intent:</h1>
        <input
          type="text"
          value={intentTitle}
          onChange={(e) => setIntentTitle(e.target.value)}
          placeholder="Digite aqui o título da intent aqui..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        />
        <h1 className="font-bold mt-3">Tipo do componente:</h1>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <div className="flex flex-1 flex-col overflow-auto">
        <button
          onClick={copyToClipboard}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 m-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Copiar Resultado em JSON
        </button>
        <pre className="text-sm bg-slate-200 p-5 rounded-2xl">
          {JSON.stringify(message, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
