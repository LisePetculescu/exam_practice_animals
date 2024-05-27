import { useEffect, useState } from "react";
import { Animal } from "../global_interfaces/animal_interface";
import TrophyForm from "./TrophyForm";
import { getAnimals } from "../services/FetchHandler";

export default function TrophyPage(){

    const [animals, setAnimals] = useState<Animal[]>([])

    useEffect(() => {
        async function fetchAnimals(){
            const response = await getAnimals()
            setAnimals(response)
        }
        fetchAnimals();
    }, [])

    return (
        <div>
            <h1>Manage Trophies</h1>
            <p>TODO: Implement CRUD functionality to trophies</p>
            <TrophyForm animals={animals}/>
        </div>
    );
}