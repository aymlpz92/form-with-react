import { useEffect, useState } from "react";



export default function FormValidator(input: string) {
    const [errorMessage, setErrorMessage] = useState('');

    
    
    function validate(input : string) {
        return input.length > 0;
    }
    const value = input;
    useEffect(() => {
        if (!validate(value)) {
            setErrorMessage('Le champ ne peut être vide.');
        } else {
            setErrorMessage('');
        }
    }, [value]);

    return (
        <>
            errorMessage
        </>
    )

}