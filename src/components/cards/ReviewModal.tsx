import { createPortal } from "react-dom";
import FormInput from "../Forms/FormInput";
import { useState } from "react";
import StarsInput from "../Forms/StarsInput";
import FormSelect from "../Forms/FormSelect";

type ReviewModalProps = {

    closeModal: () => void;
}

function ReviewModal({closeModal}:ReviewModalProps) {
    const [titleInput,setTitleInput] = useState<string>('');
    const [descValue,setDescValue] = useState<string>('');

  return createPortal(
    <div 
    className="fixed h-screen z-50 inset-0 bg-purple60/30 dark:bg-gray30/40 backdrop-blur-sm flex justify-center items-center"
    onClick={closeModal}
    >

        <div className="modal_content rounded-xl border border-purple60 bg-gray-400 " onClick={(e)=>e.stopPropagation()}>
            <FormInput label="Breif:"
                type="text" 
                onChange={(e)=>setTitleInput(e.target.value)}
                name="review_title"
                value={titleInput}
                placeholder="enter breif"
                />
            <FormInput label="Description"
                type="text" 
                onChange={(e)=>setDescValue(e.target.value)}
                name="review_description"
                value={descValue}
                placeholder="enter description"
                />
            <StarsInput />
            <FormInput label="Your Name"
                    type="text" 
                    onChange={(e)=>setDescValue(e.target.value)}
                    name="review_userName"
                    value={descValue}
                    placeholder="enter your name"
                    />
           <FormInput label="descripe your opinion"
                type="text" 
                onChange={(e)=>setDescValue(e.target.value)}
                name="review_description"
                value={descValue}
                placeholder="enter description"
                />
            {/* <FormSelect>
                options goes here
            </FormSelect> */}
            {/* <div className="imgINput_container">
                image input logic goes here
                <input type="file" className="hidden"/>
            </div> */}
        </div>

    </div>,
    document.body
  );
}

export default ReviewModal