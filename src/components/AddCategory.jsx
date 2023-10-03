import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories(categories => [ inputValue, ...categories ]);
    //ESTA ES UNA PROPIEDAD DE MI COMPONENETE NO MAS (onNewCategory)
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar más gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
