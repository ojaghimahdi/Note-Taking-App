import { Fragment } from 'react/jsx-runtime';
import { Link, useSearchParams } from 'react-router-dom';
import './App.css'
import { AllNetesIcon, PinedIcon, SettingIcon, TrashIcon } from './icons';
import { useSelector } from 'react-redux';
import type { RootState } from './Store';
import { optionUrl } from './NoteTypeBox';
function Sidebar() {
    const { selectOptions } = useSelector(
        (state: RootState) => state.typeBox
    );
    const [searchParams] = useSearchParams();
    const openOption = searchParams.get("option");
    return (
        <Fragment>
            <div className='h-1/2 flex  flex-col'>
                <div className='flex items-center w-full  text-3xl justify-center text-center my-8'>notes</div>
                <div className='flex items-center justify-center mt-4'>

                    <div className='flex flex-col cursor-default select-none gap-6 w-full'>
                        <div className='flex w-full h-12 items-center'>
                            <div className='flex items-center pl-4'>
                                <AllNetesIcon />
                            </div>
                        </div>
                        <div className='flex w-full h-12 items-center'>
                            <div className='flex items-center pl-4'>
                                <PinedIcon />
                            </div>    
                        </div>
                        <div className='flex w-full h-12 items-center'>
                            <div className='flex items-center pl-4'>
                                <TrashIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-300 mx-8'></div>
            <div className='h-1/2 flex flex-col'>
                <div className='flex justify-center text-gray-500'>categories</div>

                <div className='flex flex-col cursor-default select-none gap-6 w-full mt-12'>
                
                       {selectOptions.map((option) => (
                        <Link
                            key={option.value}
                            to={optionUrl(option)}
                            className={`flex w-full h-12 items-center ${openOption === option.value ? "bg-gray-300" : ""}`}
                        >
                            <div className='flex items-center pl-4'>
                                <div className={`w-4 h-4 rounded-full bg-${option.color}-400 mx-4`}></div>
                                {option.name}
                                </div>
                        </Link>
                       ))}

                </div>


                <div className='mt-auto'>
                    <div className='flex w-72 h-12 justify-center items-center'><SettingIcon /></div>
                </div>
            </div>
        </Fragment>
    )
}
export default Sidebar