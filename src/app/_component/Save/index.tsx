import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { addData, getAllData } from '../Db/db';
import { useState } from 'react';

type ItemType = {
    id: number;
    text: string;
    date: string;
};
type Props = {
    text: string;
    onTextClear: () => void;
};


export default function Save({ text, onTextClear }: Props) {
    const [items, setItems] = useState<ItemType[]>([]);

    // データを追加する関数
    const handleAdd = async () => {
        if (!text) return; // 入力がない場合は何もしない
        const newId = Date.now(); // 重複の可能性を考慮
        try {
            const currentDate = new Date().toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false 
            })

            await addData({ id: newId, date: currentDate, text });
            onTextClear();
            const updatedData = await getAllData();
            if (Array.isArray(updatedData)) {
                setItems(updatedData as ItemType[]);
            }
        } catch (error) {
            // console.error("Error adding data: ", error);
        }
    };

    return (
        <div className='flex justify-center'>
            <div className="pb-4 w-full sm:w-[27rem] sm:m-0">
                <button onClick={handleAdd} className="bg-gray-200 drop-shadow-xl rounded-md w-full flex items-center justify-center gap-2 p-1 font-semibold transition active:scale-110">
                    会話を保存する
                    <FontAwesomeIcon className="text-2xl" icon={faSave} />
                </button>
            </div>

        </div>
    );
}