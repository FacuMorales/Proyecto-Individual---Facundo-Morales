export const datesValidation = (errors, setErrors, property, value) => {
    switch(property){
        case "name":
            if(value.length === 0) return setErrors({...errors, name: "Nombre vacio"});
            if(!/^[a-zA-Z\s]+$/.test(value)) return setErrors({...errors, name: "El nombre no debe incluir numeros, simbolos o espacios"});
            if(value.length > 20) return setErrors({...errors, name: "El nombre no puede tener mas de 20 caracteres"});
            return setErrors({...errors, name: ""});

        case "surname":
            if(value.length === 0) return setErrors({...errors, surname: "Apellido vacio"});
            if(!/^[a-zA-Z\s]+$/.test(value)) return setErrors({...errors, surname: "El apellido no debe incluir numeros, simbolos o espacios"});
            if(value.length > 20) return setErrors({...errors, surname: "El apellido no puede tener mas de 20 caracteres"});
            return setErrors({...errors, surname: ""});

        case "birthdate":
            const anio = value.split("-")[0];
            const date = new Date();
            const year = date.getFullYear();
            if(year - anio < 18) return setErrors({...errors, birthdate: "El driver no puede ser menor de edad"});
            return setErrors({...errors, birthdate: ""});

        case "description":
            if(value.length === 0) return setErrors({...errors, description: "Descripcion vacia"});
            return setErrors({...errors, description: ""});
    };
};