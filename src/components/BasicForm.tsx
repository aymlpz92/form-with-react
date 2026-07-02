import { useEffect, useState } from 'react';


function BasicForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState('');


    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Le texte saisie est : ${value}`);
    };

    function validate(input: string) {
            return input.length > 0;
        }
        
    useEffect(() => {
        if (!validate(value)) {
            setErrorMessage('Le champ ne peut être vide.');
        } else {
            setErrorMessage('');
        }
    }, [value]);


    return (

        <form onSubmit={handleSubmit}>
            <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {errorMessage && <div>{errorMessage}</div>}
            <button type='submit'>Envoyer</button>
        </form>

    )
}

export default BasicForm;