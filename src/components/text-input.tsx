"use client";

export default function TextInput({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                className="bg-inherit"
                type="text"
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
}
