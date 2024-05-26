import { useEffect, useState } from "react";
import { Animal, Trophy } from "../global_interfaces/animal_interface";
import { getAnimals, postAnimal } from "../services/FetchHandler";
import { defaultAnimal } from "../global_interfaces/emptyInstancedInterfaces";

// const defaultTrophy = {
//     year: 0,
//     placement: 0,
//     category: {
//         name: "",
//     },
//     };

export default function AnimalForm({ setAnimals, formAnimal, setFormAnimal }: { setAnimals: (animals: Animal[]) => void; formAnimal: Animal; setFormAnimal: (animal: Animal) => void }) {
  const [errorMessage, setErrorMessage] = useState<string>("");
  //   const [trophy, setTrophy] = useState<Trophy>(defaultTrophy);

  // useEffect(() => {
  //     async function getAvailableTrophies(){
  //         const response = await getTrophies();
  //         console.log(response);
  //         setTrophies(response);
  //     }
  //     getAvailableTrophies();
  // },
  // []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("posting animal");
    if (formAnimal.name === "" || formAnimal.age === 0 || formAnimal.species === "") return setErrorMessage("Please fill out all fields");

    const response = await postAnimal(formAnimal);

    console.log(response);

    setErrorMessage("");
    setFormAnimal(defaultAnimal);
    setAnimals(await getAnimals());
  }

  function handleAnimalInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormAnimal({ ...formAnimal, [name]: value });
  }

  return (
    <div>
      <h1>Animal Form</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          padding: "10px",
          gap: "10px",
        }}
      >
        <label>Name</label>
        <input type="text" name="name" value={formAnimal.name} onChange={handleAnimalInputChange} />
        <label>Age</label>
        <input type="number" name="age" value={formAnimal.age} onChange={handleAnimalInputChange} />
        <label>Species</label>
        <input type="text" name="species" value={formAnimal.species} onChange={handleAnimalInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
