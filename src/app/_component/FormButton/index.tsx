import styles from './index.module.css';

import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown, faPlus, faMinus, faTrash, faArrowUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
    label: string;
    rotate: () => void;
    plus: () => void;
    minus: () => void;
    trash: () => void;
}


export default function FormButton({ label, rotate, plus, minus, trash }: Props) {
    const [isRotated, setIsRotated] = useState(false);
    const howLabel = () => {
        if (label === 'rotate') {
            setIsRotated(!isRotated);
            rotate();
        } else if (label === 'plus') {
            plus();
        } else if (label === 'minus') {
            minus();
        } else if (label === 'trash') {
            trash();
        }
    }
    const icon = () => {
        switch (label) {
            case 'rotate':
                return isRotated ? faArrowDown : faArrowUp; // アイコンを切り替え
            case 'plus':
                return faPlus;
            case 'minus':
                return faMinus;
            case 'trash':
                return faTrash;
            default:
                return faArrowUp;
        }
    };
    return (
        <button onClick={howLabel} className={`text-2xl rounded-md bg-gray-200 p-1 m-2 font-bold drop-shadow-xl ${isRotated ? styles.rotated : ""}`}>
            <FontAwesomeIcon icon={icon()} className="m-1" />
        </button>
    );
}