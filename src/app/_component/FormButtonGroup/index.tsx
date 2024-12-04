import FormButton from "../FormButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate, faTrash } from '@fortawesome/free-solid-svg-icons';

type Props = {
    rotate: () => void;
    plus: () => void;
    minus: () => void;
    trash: () => void;

}
export default function FormButtonGroup({ rotate, plus, minus, trash }: Props) {


    return (
        <div className="flex flex-col justify-center">
            <FormButton rotate={rotate} plus={plus} minus={minus} trash={trash} label="rotate" />
            <FormButton rotate={rotate} plus={plus} minus={minus} trash={trash} label="plus" />
            <FormButton rotate={rotate} plus={plus} minus={minus} trash={trash} label="minus" />
            <FormButton rotate={rotate} plus={plus} minus={minus} trash={trash} label="trash" />
        </div>
    );
}