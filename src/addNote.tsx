import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./Store";
import { OpenTheBox, CloseTheBox, SelectedOption } from "./NoteTypeBox";

type Props = {
    onClose: () => void;
};

function AddNote({ onClose }: Props) {
    const dispatch = useDispatch<AppDispatch>();
    const { isOpen, SelectOption, selectOptions } = useSelector(
        (state: RootState) => state.typeBox
    );
    

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="flex flex-col w-1/6 h-3/6 bg-gray-500 rounded-2xl">
                <input
                    className="bg-white mx-4 p-2 rounded-xl mt-4"
                    placeholder="Note Tittle"
                />
                <textarea
                    className="bg-white mx-4 rounded-xl h-36 mt-4 p-2"
                    placeholder="Explanations..."
                />

                <div className="relative mx-4 mt-4">
                    <button
                        type="button"
                        className="w-full p-3 border rounded-lg flex justify-between bg-white"
                        onClick={() => dispatch(OpenTheBox())}
                    >
                        {SelectOption}
                    </button>
                    {isOpen && (
                        <div className="absolute top-full z-10 mt-2 w-full bg-white border rounded-lg shadow-lg">
                            {selectOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className="p-3 hover:bg-gray-100 cursor-pointer"
                                    onClick={() =>{dispatch(SelectedOption(option))}}
                                >
                                    {option.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex mt-auto mb-3">
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(CloseTheBox());
                            onClose();
                        }}
                        className="flex-1 rounded-2xl bg-amber-400 mx-4"
                    >
                        Cancel
                    </button>
                    <button type="button" className="flex-1 bg-fuchsia-600 rounded-2xl mx-4">
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNote