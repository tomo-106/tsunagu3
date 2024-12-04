import { faComment, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


const Tutorial = () => {
    return (
        <>
            <div className="flex m-auto justify-center w-full">
                <div className="mt-2 w-full sm:w-[27rem]">
                    <div className="bg-white rounded-md p-1">
                        <div className="p-4">
                            <h2 className="text-center font-semibold text-xl m-auto pt-2 pb-6">使い方</h2>
                            <h3 className="text-center font-semibold text-lg m-auto pt-2 pb-2 border-b-2 border-black w-fit">つなぐ3とは</h3>
                            <p className="py-4">「つなぐ3」は、聴覚に不安を感じている方や耳が聞こえづらいシニアの方と、安心してコミュニケーションを取りたいと願う皆さまをサポートするアプリです。
                            </p>
                            <p className="py-4">  このアプリは、話し言葉をリアルタイムで画面に文字として表示することで、音声だけでは伝わりにくい会話を視覚的にわかりやすくします。
                            </p>
                            <p className="py-4">
                                家族や友人との日常の会話をもっと楽に、心地よくするためのお手伝いをします。
                            </p>
                            <div className="flex justify-center py-8">
                                <Image
                                    className="w-2/3"
                                    src="/tutorial01.png"
                                    alt=""
                                    width={375}
                                    height={667}
                                />
                            </div>
                            <h3 className="text-center font-semibold text-lg m-auto py-2 border-b-2 border-black w-fit">会話の始め方</h3>
                            <ol className="p-4 list-decimal">
                                <li className="font-semibold mb-6">
                                    メニューの「会話」ボタンを押してください。
                                    <ul>
                                        <li className="font-medium my-1">メニューの「会話」<FontAwesomeIcon icon={faComment} />ボタンを選択することで、会話モードに入ります。</li>
                                    </ul>
                                </li>
                                <li className="font-semibold mb-6">スマートフォンのキーボードを使って音声入力を行います。
                                    <ul>
                                        <li className="font-medium my-1">キーボードの音声入力アイコン<FontAwesomeIcon icon={faMicrophone} />をタップして、話しかけると、会話内容がリアルタイムで文字として表示されます。
                                        </li>
                                    </ul>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Tutorial;
