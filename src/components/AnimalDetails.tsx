import { Animal } from "../global_interfaces/animal_interface";
import { defaultAnimal } from "../global_interfaces/emptyInstancedInterfaces";

export default function AnimalDetails({ selectedAnimal, setSelectedAnimal }: { selectedAnimal: Animal; setSelectedAnimal: (animal: Animal) => void }) {
  function trophies() {
    console.log("hej");
    

    if (selectedAnimal.trophies.length === 0) return (
      <>
        <div> {selectedAnimal.name} has no trophies 😢</div> <div> Better luck next time, chum 👍</div>
      </>
    );
    else {
          return (<table>
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
);
    }
  
  }

  if (selectedAnimal === defaultAnimal) return <h1>No animal selected</h1>;
  else {
    return (
      <>
        <h1>{selectedAnimal.name}</h1>
        <h2>Details:</h2>
        <p>Age: {selectedAnimal.age}</p>
        <p>Species: {selectedAnimal.species}</p>
        <h2>Trophies</h2>
        {trophies()}

        <button onClick={() => setSelectedAnimal(defaultAnimal)}>Close</button>
      </>
    );
  }
}
