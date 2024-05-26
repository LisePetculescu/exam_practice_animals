import { useEffect } from "react";
import { deleteAnimal, getAnimal, getAnimals } from "../services/FetchHandler";
import { Animal } from "../global_interfaces/animal_interface";

export default function AnimalList({ setSelectedAnimal, animals, setAnimals }: { setSelectedAnimal: (animal: Animal) => void, animals: Animal[], setAnimals: (animals: Animal[]) => void}) {

      useEffect(() => {
        async function get() {
          const response = await getAnimals();

          setAnimals(response);
        }
        get();
      }, []);

        async function getDetailsClicked(id: number | undefined) {
            if (!id) return;
            const response = await getAnimal(id);
    
            setSelectedAnimal(response);
        }

        async function handleDelete(id: number | undefined) {
            if (!id) return;
             await deleteAnimal(id);
         
            
            setAnimals(await getAnimals());
            
        }

      return (
        <>
          <h1>Animals</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Species</th>

                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <tr key={animal.id}>
                  <td>{animal.name}</td>
                  <td>{animal.age}</td>
                  <td>{animal.species}</td>

                  <td>
                    <button
                      style={{
                        backgroundColor: "blue",
                        opacity: 0.7,
                      }}
                      onClick={() => getDetailsClicked(animal.id)}
                    >
                      Details
                    </button>
                  </td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "green",
                        opacity: 0.7,
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "red",
                        opacity: 0.7,
                      }}
                      onClick={() => {handleDelete(animal.id)}}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
}