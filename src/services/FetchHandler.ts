import { Animal } from "../global_interfaces/animal_interface";

const API_URL = "http://localhost:8080/animal"

async function getAnimals(): Promise<Animal[]> {
    console.log("Fetching animals");
    
  const response = await fetch(API_URL).then((response) => response.json());
  console.log(response);

  return response;
}


async function getAnimal(id: number): Promise<Animal> {
  const response = await fetch(`${API_URL}/${id}`).then((response) => response.json());

  return response;
}

async function postAnimal(animal: Animal): Promise<Animal> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(animal),
    }).then((response) => response.json());
    
    return response;
}

async function deleteAnimal(id: number) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    
    if (response.status === 200) return console.log("Animal deleted");
    
}


export { getAnimals, getAnimal, postAnimal, deleteAnimal };