import { Animal } from "../global_interfaces/animal_interface";
import { defaultAnimal } from "../global_interfaces/emptyInstancedInterfaces";


export default function AnimalDetails({ selectedAnimal, setSelectedAnimal }: { selectedAnimal: Animal | null, setSelectedAnimal: (animal: Animal) => void}) {
  
    if (selectedAnimal === null) return <h1>No animal selected</h1>
    return (
    <>
      <h1>{selectedAnimal.name}</h1>
      <p>Age: {selectedAnimal.age}</p>
      <p>Species: {selectedAnimal.species}</p>
      <h2>Trophies</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Placement</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {selectedAnimal.trophies.map((trophy) => (
            <tr key={trophy.id}>
              <td>{trophy.year}</td>
              <td>{trophy.placement}</td>
              <td>{trophy.category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setSelectedAnimal(defaultAnimal)}>Close</button>
    </>
  );
}