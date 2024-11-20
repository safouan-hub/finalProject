import React from 'react'
import { PlaceholdersAndVanishInput } from './component/ui/Placeholder'

function Search() {

    const placeholders = [
        "Who we are ?",
        "How is quality guaranteed ?",
        "How long have we been around ?",
        "New products planned ?",
        "Who are our customers?",
      ];
     
      const handleChange = (e) => {
        console.log(e.target.value);
      };
      const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
      };
  return (
    <div className="h-[5rem] flex flex-col justify-center  items-center px-5">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Search