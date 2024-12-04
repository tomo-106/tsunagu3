import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

type Props = {
    googleUrlValue: string;
    googlelImageUrlValue: string;
    googleMaplUrlValue: string;
    text: string;
    word: string;
}


export default function SearchWord({ word, googleUrlValue, googlelImageUrlValue, text, googleMaplUrlValue }: Props) {
    return (
        <div className="text-wrap break-all text-2xl flex gap-4 justify-center items-center p-4 mt-1 ml-1 mr-2 mb-2 bg-gray-200 transition active:scale-110">
            <a className="text-teal-700 text-wrap break-all  underline" href={googleUrlValue} target="_blank" rel="noopener noreferrer">
                {word}
            </a>
            <a href={googlelImageUrlValue} target="_blank" rel="noopener noreferrer">
                <figure className="mr-1  w-7 drop-shadow-xl"><FontAwesomeIcon icon={faImage} /></figure>
            </a>
            <a href={googleMaplUrlValue} target="_blank" rel="noopener noreferrer">
                <figure className="w-7 drop-shadow-xl"><FontAwesomeIcon icon={faMapLocationDot} /></figure>
            </a>
        </div>
    );
}