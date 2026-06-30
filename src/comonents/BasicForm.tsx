import { useState } from 'react';


function BasicForm() {

    const [value, setValue] = useState('');


    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Le texte saisie est : ${value}`);
    };


    return (

        <form onSubmit={handleSubmit}>
            <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit'>Envoyer</button>
        </form>

    )
}

export default BasicForm;