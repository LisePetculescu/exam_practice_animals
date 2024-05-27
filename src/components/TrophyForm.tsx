
export default function TrophyForm({ animals} : { animals: Animal[] }) {

    return (
        <>
        <form>
            <label>
                <p>Name</p>
                <select name="name">
                    <option></option>
                     </select>
            </label>
            <label>
                <p>Image</p>
                <input type="text" name="image" />
            </label>
            <label>
                <p>Species</p>
                <input type="text" name="species" />
            </label>
            <label>
                <p>Location</p>
                <input type="text" name="location" />
            </label>
            <label>
                <p>Weight</p>
                <input type="text" name="weight" />
            </label>
            <label>
                <p>Height</p>
                <input type="text" name="height" />
            </label>
            <label>
                <p>Age</p>
                <input type="text" name="age" />
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}