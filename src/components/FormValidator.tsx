import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
    lastname: string,
    firstname: string,
    age: number,
    email: string,
    password: string
}

export default function FormValidator() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data: any) => 
        alert(`
        Last name : ${data.lastname} 
        First name: ${data.firstname}
        Age : ${data.age}
        Email : ${data.email}
        Password : XXXXX
        `);

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("lastname", { required: "Ce champ ne peut etre vide", maxLength: 50 })} placeholder="Last name" />
                <p>{errors.lastname?.message}</p>
                <input {...register("firstname", { required: "Ce champ ne peut etre vide", maxLength: 50 })} placeholder="First name" />
                <p>{errors.firstname?.message}</p>
                <input type="number" {...register("age", { required: "Ce champ est requis", min: { value: 18, message: "Vous devez être majeur" } })} placeholder="Age" />
                <p>{errors.age?.message}</p>
                <input type="email" {...register("email", {
                    required: "Ce champ ne peut etre vide",
                    maxLength: 50,
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Format d'email invalide" }
                })} placeholder="example@gmail.com" />
                <p>{errors.email?.message}</p>
                <input type="password" {...register("password", { required: "Ce champ ne peut etre vide", maxLength: 50 })} placeholder="Password" />
                <p>{errors.password?.message}</p>
                <button type="submit">Envoyer</button>
            </form>
        </>
    )
}

