import React from "react";
import "./TextField.css";

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;
type InputFocusEvent = React.FocusEvent<InputElement>;

interface TextFieldProps {
    value: string;
    onChange: (val: string) => void;
    onFocus: (event: InputFocusEvent) => void;
    placeholder?: string;
    autoFocus?: boolean;
    name?: string;
    type?: "email" | "password" | "text";
    textarea?: boolean;
}

const TextField = React.forwardRef<InputElement, TextFieldProps>(
    ({ onChange, onFocus, textarea = false, ...rest }, ref) => {
        const InputElement = textarea ? "textarea" : "input";
        return (
            <InputElement
                ref={ref as any}
                className="input"
                onChange={({ target: { value } }: InputChangeEvent) => onChange(value)}
                onFocus={onFocus}
                {...rest}
            />
        );
    }
);

export default TextField;
