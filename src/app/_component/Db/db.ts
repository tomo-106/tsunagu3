type Data = {
    id: number;
    text: string;
    date:string;
}

const dbName = "myDatabase";
const storeName = "myStore";

export const saveCurrentDate = async () => {
    const db = await openDatabase();
    return new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);

        const currentDate = new Date();
        const data = { date: currentDate.toISOString() };

        store.add(data);

        transaction.oncomplete = () => {
            resolve();
        };

        transaction.onerror = () => {
            reject(transaction.error);
        };
    });
};


// データベースを開く関数
export function openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 2);
        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true }); // 'id'を主キーとする
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// データを追加する関数
export async function addData(data: Data) {
    const db = await openDatabase();
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    store.add(data);
}

// データを取得する関数
export async function getAllData() {
    const db = await openDatabase();
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    return new Promise((resolve, reject) => {
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// データを削除する関数
export async function deleteData(id: number) {
    const db = await openDatabase();
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    store.delete(id);
}

export const deleteDatabase = async () => {
    return new Promise((resolve, reject) => {
        const deleteRequest = indexedDB.deleteDatabase(dbName);

        deleteRequest.onsuccess = () => {
            // console.log(`データベース '${dbName}' は正常に削除されました`);
            resolve(null);
        };

        deleteRequest.onerror = (event) => {
            // console.error(`データベース '${dbName}' の削除に失敗しました`, event);
            reject(event);
        };

        deleteRequest.onblocked = () => {
            // console.warn(`データベース '${dbName}' の削除がブロックされました。他のタブやウィンドウで使用中か確認してください。`);
            reject(new Error("データベース削除がブロックされました"));
        };
    });
};
