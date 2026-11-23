import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Store";
import { optionUrl } from "../NoteTypeBox";

function Notes() {
    const { selectOptions } = useSelector((state: RootState) => state.typeBox);
    const [searchParams] = useSearchParams();
    const openValue = searchParams.get("option");
    const openOption = selectOptions.find((option) => option.value === openValue);

    return (
        <div className="w-full p-4">
            <div className="text-2xl mb-4">
                {openOption ? `${openOption.name} is open` : "No category open"}
            </div>
            <div className="flex flex-col gap-3">
                {selectOptions.map((option) => {
                    const isOpen = option.value === openValue;
                    return (
                        <Link
                            key={option.value}
                            to={optionUrl(option)}
                            className={`rounded-xl px-4 py-3 border text-gray-900 ${isOpen ? "border-black bg-gray-100 font-semibold" : "border-gray-300 bg-white"}`}
                        >
                            {option.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Notes;
