import React, { FC, MouseEvent } from "react";
import "./style.scss";

interface ButtonProps {
    type?: "purple" | "mixed";
    text?: string;
    onClick?: (newValue: MouseEvent<HTMLButtonElement>) => void;
    icon?: string;
}

const Button: FC<ButtonProps> = ({ type, text, icon, onClick }) => {
    const buttonClass = type;

    return (
        <button className={buttonClass} onClick={onClick}>
            {icon ? (
                <img src={icon} alt="icon" />
            ) : <span>{text}</span>}
        </button>
    );
};

export { Button };
