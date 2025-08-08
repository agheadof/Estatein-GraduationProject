import { createPortal } from "react-dom";
import FormInput from "../Forms/FormInput";
import { useRef, useState, type ChangeEvent } from "react";
import StarsInput from "../Forms/StarsInput";
import FormSelect from "../Forms/FormSelect";

type ReviewModalProps = {

    closeModal: () => void;
}
interface FrontErrors{
    imageErr?:string
    title?:string;
    desc?:string;
    imageEntryErr?:string,
    userName?:string,
    rate?:string;
    regon?:string
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
        imageErr:'',
        title:'',
        desc:'',
        imageEntryErr:'',
        userName:'',
        rate:'',
        regon:''
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
        const submitErrs : FrontErrors = {};
        if(!titleInput) submitErrs.title = 'Please enter the brief';
        if(!descValue) submitErrs.desc = 'Your opinion is required';
        if(!image) submitErrs.imageEntryErr = 'Image is required';
        if(!userName) submitErrs.userName = 'Name is required';
        if (rating === 0) submitErrs.rate = 'Rate us please!';
        if (!selectValue) submitErrs.regon = 'Set your region';

        setErrors(submitErrs);
    };

  return createPortal(
    <div 
    className="fixed h-screen z-50 inset-0 bg-purple60/30 dark:bg-purple99/10 backdrop-blur-sm flex justify-center overflow-y-auto items-start lg-custom:items-center"
    onClick={closeModal}
    >

        <div className="modal_content rounded-xl border border-purple60 bg-purple75 my-8
            p-6 w-[85%] max-w-[800px] h-max overflow-y-auto flex flex-col gap-8 justify-start" onClick={(e)=>e.stopPropagation()}>
            <div className="w-full flex flex-col lg-custom:flex-row items-start justify-between">
                <div className="flex flex-col gap-5 w-full lg-custom:w-[47%]">
                    <div>
                    <FormInput label="Breif:"
                            type="text" 
                            onChange={(e)=>setTitleInput(e.target.value)}
                            name="review_title"
                            value={titleInput}
                            placeholder="enter the appropriate title for your opinion"
                            className="dark:bg-purple99 "
                            />
                            {
                                errors.title &&
                                <p className="text-red-600 text-xs lg-custom:text-sm">{errors.title}</p>
                            }
                    </div>
                    <div>
                    <FormInput label="Description"
                        type="text" 
                        onChange={(e)=>setDescValue(e.target.value)}
                        name="review_description"
                        value={descValue}
                        placeholder="descripe you opoinion"
                        className="dark:bg-purple99 "
                        />
                        {
                            errors.desc &&
                            <p className="text-red-600 text-xs lg-custom:text-sm">{errors.desc}</p>
                        }
                    </div>

                    <div>
                        <StarsInput label={'Rate:'}
                        onChange={(value) => {setRating(value);console.log(value)}}
                        />
                            {
                                errors.rate &&
                                <p className="text-red-600 text-xs lg-custom:text-sm">{errors.rate}</p>
                            }                        
                    </div>

                </div>
                <div className="flex flex-col gap-5 w-full lg-custom:w-[47%] items-stretch">
                    <div>
                        <div className="imgInput_container flex flex-col gap-2">
                            <label className="2xl:mb-4 lg-custom:mb-3.5 mb-2.5 text-base/[1.5] 2xl:text-xl text-black dark:text-white font-semibold">Your Image:</label>
                            <input type="file" className="hidden" ref={img_ref} onChange={handleFileChoosed}/>
                            <div className="w-full h-[120px]  border border-purple60 cursor-pointer flex items-center justify-center" onClick={HandleOpenImageSelect}>
                                <img src={image ? image : '/assets/icons/Footer/send.svg'}
                                className={`${image ? 'w-full h-full' : ''}`}/>
                            </div>
                        </div>
                        {
                            errors.imageEntryErr &&
                            <p className="text-red-600 text-xs lg-custom:text-sm">{errors.imageEntryErr}</p>
                        }
                    </div>

                    <div>
                    <FormInput label="Your Name"
                            type="text" 
                            onChange={(e)=>setUserName(e.target.value)}
                            name="review_userName"
                            value={userName}
                            placeholder="enter your name"
                            className="dark:bg-purple99 "
                            />
                        {
                            errors.userName &&
                            <p className="text-red-600 text-xs lg-custom:text-sm">{errors.userName}</p>
                        }
                    </div>
                    <div>
                    <FormSelect 
                        options={['USA, Florida','USA, California' , 'USA, Nevada' , 'USA ,LA', 'USA ,Washington']}
                        onChange={(e)=>setSelectValue(e.target.value)}
                        value={selectValue}
                        name="review_userOrigin"
                        label="Regoin"
                        classExtra="dark:bg-purple99 "
                    />
                    {
                        errors.regon &&
                        <p className="text-red-600 text-xs lg-custom:text-sm">{errors.regon}</p>
                    }
                    </div>
                </div>
            </div>
            <button onClick={handleSendReview} className=" bg-purple60 rounded-lg px-4 py-2 text-white font-medium cursor-pointer hover:bg-purple70 duration-200">
                Submit
            </button>
        </div>

    </div>,
    document.body
  );
}

export default ReviewModal