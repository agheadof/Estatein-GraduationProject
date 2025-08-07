import { createPortal } from "react-dom";
import FormInput from "../Forms/FormInput";
import { useRef, useState, type ChangeEvent } from "react";
import StarsInput from "../Forms/StarsInput";
import FormSelect from "../Forms/FormSelect";

type ReviewModalProps = {

    closeModal: () => void;
}
interface FrontErrors{
    imageErr:string
}

function ReviewModal({closeModal}:ReviewModalProps) {
    const [titleInput,setTitleInput] = useState<string>('');
    const [descValue,setDescValue] = useState<string>('');
    const [selectValue ,setSelectValue] = useState<string>('');
    const [userName,setUserName] = useState<string>('');
    const img_ref = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [errors,setErrors] = useState<FrontErrors>({
        imageErr:''
    })

    const HandleOpenImageSelect = ()=>{
        img_ref.current?.click()
    }

    const handleFileChoosed = (e : ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        if(file && file.type.startsWith('image/')){
            const url = URL.createObjectURL(file);
            setImage(url)
        }
        else{
            setImage('');
            setErrors({...errors , imageErr:'only upload an image'})
        }
        console.log(image)
    }


    const handleSendReview = ()=>{
        // request goes here.
    }

  return createPortal(
    <div 
    className="fixed h-screen z-50 inset-0 bg-purple60/30 dark:bg-gray30/40 backdrop-blur-sm flex justify-center items-center"
    onClick={closeModal}
    >

        <div className="modal_content rounded-xl border border-purple60 bg-gray-400 
            p-6 w-full max-w-[800px] h-[80vh] overflow-y-auto flex items-start gap-6 justify-between" onClick={(e)=>e.stopPropagation()}>
            <div className="flex flex-col gap-5 w-[47%]">
                <FormInput label="Breif:"
                    type="text" 
                    onChange={(e)=>setTitleInput(e.target.value)}
                    name="review_title"
                    value={titleInput}
                    placeholder="enter the appropriate title for your opinion"
                    />
                <FormInput label="Description"
                    type="text" 
                    onChange={(e)=>setDescValue(e.target.value)}
                    name="review_description"
                    value={descValue}
                    placeholder="descripe you opoinion"
                    />

                <StarsInput label={'Rate:'}
                onChange={(value) => {setRating(value);console.log(value)}}
                />
            </div>
            <div className="flex flex-col gap-5 w-[47%]">
                <div className="imgInput_container">
                    <label className="2xl:mb-4 lg-custom:mb-3.5 mb-2.5 text-base/[1.5] 2xl:text-xl text-black dark:text-white font-semibold">Your Image:</label>
                    <input type="file" className="hidden" ref={img_ref} onChange={handleFileChoosed}/>
                    <div className="w-[80px] h-[80px] rounded-[50%] bg-gray60 border border-purple60 cursor-pointer flex items-center justify-center" onClick={HandleOpenImageSelect}>
                        <img src={image ? image : '/assets/icons/Footer/send.svg'}
                        className={`${image ? 'w-full h-full rounded-full' : ''}`}/>
                    </div>
                </div> 
                <FormInput label="Your Name"
                        type="text" 
                        onChange={(e)=>setUserName(e.target.value)}
                        name="review_userName"
                        value={userName}
                        placeholder="enter your name"
                        />
                <FormSelect 
                    options={['USA, Florida','USA, California' , 'USA, Nevada' , 'USA ,LA', 'USA ,Washington']}
                    onChange={(e)=>setSelectValue(e.target.value)}
                    value={selectValue}
                    name="review_userOrigin"
                    label="Regoin"
                >
                    options goes here
                </FormSelect>
            </div>
            <button onClick={handleSendReview} className="absolute bottom-[15%] left-1/2 -translate-x-[50%] bg-purple60 rounded-lg px-4 py-2 text-white font-medium cursor-pointer hover:bg-purple70 duration-200">
                Submit
            </button>
        </div>

    </div>,
    document.body
  );
}

export default ReviewModal