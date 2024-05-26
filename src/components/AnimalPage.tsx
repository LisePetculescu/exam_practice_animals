import { useState } from "react";
import AnimalList from "./AnimalList";
import { Animal } from "../global_interfaces/animal_interface";
import AnimalDetails from "./AnimalDetails";
import AnimalForm from "./AnimalForm";
import { defaultAnimal } from "../global_interfaces/emptyInstancedInterfaces";

export default function AnimalPage(){

    const [selectedAnimal, setSelectedAnimal] = useState<Animal>(defaultAnimal);
    const [animals, setAnimals] = useState<Animal[]>([])
    const [formAnimal, setFormAnimal] = useState<Animal>(defaultAnimal)

    // TODO: Implement CRUD functionality to trophies 
    return (
      <>
        <div
          style={{
            display: "flex",
            margin: "10px",
            padding: "10px",
          }}
        >
          <div
            style={{
              margin: "10px",
              padding: "10px",
            }}
          >
            <AnimalList setSelectedAnimal={setSelectedAnimal} animals={animals} setAnimals={setAnimals} setFormAnimal={setFormAnimal} />
          </div>
          <div
            style={{
              margin: "10px",
              padding: "10px",
            }}
          >
            <AnimalDetails setSelectedAnimal={setSelectedAnimal} selectedAnimal={selectedAnimal} />
          </div>
          <div
            style={{
              margin: "10px",
              padding: "10px",
            }}
          >
            <AnimalForm setAnimals={setAnimals} formAnimal={formAnimal} setFormAnimal={setFormAnimal} />
          </div>
        </div>
      </>
    );
}