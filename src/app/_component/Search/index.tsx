import SearchWord from '../SearchWord';
import { useImperativeHandle, forwardRef, useRef } from 'react';
import styles from './index.module.css';

type Props = {
    text: string;
    word: string[];
    googleUrlValue: string;
    googlelImageUrlValue: string;
    googleMaplUrlValue: string;
};
type CustomRef = {
    highlightTarget: () => void;
}

const Search = forwardRef<CustomRef, Props>(
    ({ text, word, googleUrlValue, googlelImageUrlValue, googleMaplUrlValue }, ref) => {
        const targetRef = useRef<HTMLDivElement>(null);

        useImperativeHandle(ref, () => ({
            highlightTarget: () => {
                if (targetRef.current) {
                    // 一時的にハイライトクラスを追加
                    targetRef.current.classList.add(styles.highlight);

                    // 数秒後にハイライトクラスを削除
                    setTimeout(() => {
                        targetRef.current?.classList.remove(styles.highlight);
                    }, 2000); // 2秒間ハイライト表示
                }
            }

        }));

        return (
            <div className='flex justify-center'>
                <div className="mt-2 w-full sm:w-[27rem]">
                    <div ref={targetRef} className="bg-white rounded-md p-1">
                        <h2 className="text-center font-semibold text-xl m-auto pt-2 pb-2">検索ワード</h2>
                        <div className="flex flex-wrap">
                            {word.length === 0 ?
                                <div className="text-2xl p-4 mt-1 ml-1 mr-2 mb-2">
                                    No Data
                                </div> :
                                (
                                    word.map((wordItem, index) => (
                                        <SearchWord
                                            key={index}
                                            word={wordItem}
                                            googleUrlValue={googleUrlValue}
                                            googlelImageUrlValue={googlelImageUrlValue}
                                            googleMaplUrlValue={googleMaplUrlValue}
                                            text={text}
                                        />
                                    )))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    });
Search.displayName = "Search";
export default Search;