"use client"
import styles from './index.module.css';

import FormButtonGroup from "../FormButtonGroup";
import { useRef, useState } from "react";
import Search from "../Search";
import Save from "../Save";
import Fix from "../Fix";
type CustomRef = {
    highlightTarget: () => void;
}
export default function Form() {
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const [plusValue, setPlusValue] = useState<number>(24);
    const [word, setWord] = useState<string[]>([]);
    const [text, setText] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const targetRef = useRef<CustomRef>(null);
    const [googleUrlValue, setGoogleUrlValue] = useState<string>("")
    const [googlelImageUrlValue, setGooglelImageUrlValue] = useState<string>("")
    const [googleMapUrlValue, setgoogleMapUrlValue] = useState<string>("")

    const rotate = () => {
        setIsRotated((prev) => !prev)
        textareaRef.current?.focus()
    }

    const plus = () => {
        setPlusValue((prevValue: number) => prevValue + 2)
        textareaRef.current?.focus()

    }
    const minus = () => {
        setPlusValue((prevValue: number) => prevValue - 2)
        textareaRef.current?.focus()

    }
    const trash = () => {
        setText("")
        setWord([])
        textareaRef.current?.focus()

    }
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)

        const googleUrl = "https://www.google.com/search?q=" + event.target.value
        setGoogleUrlValue(googleUrl)

        const googlelImage = "https://www.google.com/search?q=" + event.target.value + "&tbm=isch"
        setGooglelImageUrlValue(googlelImage)

        const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=" + event.target.value
        setgoogleMapUrlValue(googleMapUrl)
    }
    const fix = () => {
        setWord([])
        const segmenter = new Intl.Segmenter('ja', { granularity: 'sentence' });
        const newWords: string[] = [];

        for (const segment of segmenter.segment(text)) {
            newWords.push(segment.segment);
        }

        setWord((prevWord) => [...prevWord, ...newWords]);
        // console.log(newWords);
        if (text.length !== 0) {
            targetRef.current?.highlightTarget();
        }
    };
    const onTextClear = () => {
        setText("")
    }
    return (
        <>
            <div className="flex m-auto justify-center w-full">
                <div className="pt-3 pb-3 pr-3">
                    <form className="flex justify-center">
                        <textarea ref={textareaRef} autoFocus value={text} onChange={handleChange} placeholder="音声入力をすると、ここに会話が表示されます。" className={`w-[70vw] sm:w-96 h-64 resize-none rounded-md p-4 text-xl transition ${isRotated ? styles.rotated : ""}`} style={{ fontSize: `${plusValue}px`, lineHeight: `${plusValue / 18}` }}></textarea>
                    </form>
                </div>
                <FormButtonGroup rotate={rotate} plus={plus} minus={minus} trash={trash} />
            </div>
            <Save onTextClear={onTextClear} text={text} />
            <Fix fix={fix} />
            <Search ref={targetRef} word={word} text={text} googleUrlValue={googleUrlValue} googlelImageUrlValue={googlelImageUrlValue} googleMaplUrlValue={googleMapUrlValue} />
        </>
    );
}