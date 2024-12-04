// ListItemGroup.tsx
import ListItem from "../ListItem";
import { deleteDatabase, getAllData } from '../Db/db';

type ItemType = {
    id: number;
    text: string;
    date: string;
};

type ListItemGroupProps = {
    items: ItemType[];
    setItems: (items: ItemType[]) => void;
    onDelete: (id: number) => void;
};

const ListItemGroup: React.FC<ListItemGroupProps> = ({ items, setItems, onDelete }) => {

    const handleDeleteDatabase = async () => {
        const userConfirmed = window.confirm("本当にすべての会話を削除しますか？");
        if (userConfirmed) {

            await deleteDatabase();
            const updatedData = await getAllData();
            if (Array.isArray(updatedData)) {
                setItems(updatedData as ItemType[]); // 型を明示的に指定
            } alert("すべての会話が削除されました。");
        }
    };


    return (
        <div className="flex flex-col">
            <button className="inline-flex h-8 items-center justify-center rounded-md bg-gray-500 px-3 m-2 font-medium text-neutral-50 transition active:scale-110" onClick={handleDeleteDatabase}>すべての会話を削除</button>
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ListItemGroup;
