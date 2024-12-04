"use client"

import ListItemGroup from "../_component/ListItemGroup"

import { useEffect, useState } from 'react';
import { addData, getAllData, deleteData } from '../_component/Db/db';
type ItemType = {
    id: number;
    text: string;
    date: string;
};


const List = () => {

    const [id, setId] = useState<number>(0);
    const [items, setItems] = useState<ItemType[]>([]);


    // データベースからデータを読み込む
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllData();
            if (Array.isArray(data)) {
                setItems(data as ItemType[]); // 型を明示的に指定
            }
        };
        fetchData();
    }, []);


    // データを削除する関数
    const handleDelete = async (id: number) => {
        await deleteData(id);
        const updatedData = await getAllData();
        if (Array.isArray(updatedData)) {
            setItems(updatedData as ItemType[]); // 型を明示的に指定
        }
    };


    return (
        <>
            <div className="flex m-auto justify-center w-full">
                <div className="mt-2 w-full sm:w-[27rem]">
                    <div className="bg-white rounded-md p-1">
                        <h2 className="text-center font-semibold text-xl m-auto pt-2 pb-2">会話記録</h2>
                        <ListItemGroup items={items} setItems={setItems} onDelete={handleDelete} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default List;
