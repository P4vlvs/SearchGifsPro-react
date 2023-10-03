import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const SearchGifPro = () => {
  const [categories, setCategories] = useState(["Bob Esponja"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>SEARCH GIF PRO!</h1>

      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <AddCategory
        // setCategories={ setCategories }
        //Cuando vemos que tiene la palabra 'on' significa que está emitiendo algo
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
