import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type Props = {
    fix: () => void;
}

export default function Fix({fix }: Props) {

    return (
        <div className='flex justify-center'>
            <div className="mt-2 w-full sm:w-[27rem] sm:m-0">
                <button onClick={fix} className="bg-gray-200 drop-shadow-xl rounded-md w-full flex items-center justify-center gap-2 p-1 font-semibold transition active:scale-110">
                    検索ワードを設定
                    <FontAwesomeIcon className="text-2xl" icon={faSearch} />
                </button>
            </div>
        </div>
    );
}