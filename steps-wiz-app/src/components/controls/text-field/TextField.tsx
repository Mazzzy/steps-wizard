import React from "react";
import "./TextField.css";

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextFieldProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
    name?: string;
    type?: "email" | "password" | "text";
    textarea?: boolean;
}

const TextField = React.forwardRef<InputElement, TextFieldProps>(({ onChange, textarea = false, ...rest }, ref) => {
    const InputElement = textarea ? "textarea" : "input";
    return (
        <InputElement
            ref={ref as any}
            className="input"
            onChange={({ target: { value } }: InputChangeEvent) => onChange(value)}
            {...rest}
        />
    );
});

export default TextField;
