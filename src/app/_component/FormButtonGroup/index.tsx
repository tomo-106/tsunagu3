import FormButton from "../FormButton";

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