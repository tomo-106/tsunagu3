type ItemType = {
    id: number;
    text: string;
    date: string;
};
type ListItem = {
    item: ItemType;
    onDelete: (id: number) => void; // 削除用のコールバック
};
export default function ListItem({ item, onDelete }: ListItem) {

    return (
        <div className="border-b-2 text-xl pt-2 pb-2 m-2">
            <div className="pb-2">
                {item.date}
            </div>
            <div className="pb-2">
                {item.text}
            </div>
            <button className="inline-flex h-8 items-center justify-center rounded-md bg-gray-200 px-3 font-medium text-black transition active:scale-110" onClick={() => onDelete(item.id)}>削除</button>
        </div>
    );
}