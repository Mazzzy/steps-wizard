import { useState } from "react";

export function useFormFields(initialState: any) {
    const [fields, setValues] = useState(initialState);

    return [
        fields,
        function (val: string, name: string) {
            setValues({
                ...fields,
                [name]: val,
            });
        },
    ];
}
