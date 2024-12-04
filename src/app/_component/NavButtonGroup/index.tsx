import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faComment, faList } from '@fortawesome/free-solid-svg-icons';
import NavButton from '../NavButton';


export default function NavButtonGroup() {



    return (
        <>
            <ul className='flex justify-center gap-10 py-3 bg-gray-200'>
                <NavButton href="/list" title={<FontAwesomeIcon icon={faList} />} subTitle="記録" />
                <NavButton href="/" title={<FontAwesomeIcon icon={faComment} />} subTitle="会話" />
                <NavButton href="/tutorial" title={<FontAwesomeIcon icon={faCircleQuestion} />} subTitle="使い方" />
            </ul>

        </>
    );
}