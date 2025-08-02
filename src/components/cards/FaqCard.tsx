import TitleBtn from '../ui/TitleBtn'
type Props = {
    question: {
        question: string
        answer: string
    }
}
function FaqCard({ question }: Props) {
  return (
    <>
    <div className=' border border-gray15 p-[30px] lg-custom:p-[40px] 2xl:p-[50px] rounded-[10px] 2xl:rounded-xl '>
      <h2 className=' text-white text-lg lg-custom:text-xl 2xl:text-2xl font-semibold mb-[20px] lg-custom:mb-[24px] 2xl:mb-[30px] '>{question.question}</h2>
      <p className='  text-gray60 text-sm lg-custom:text-base 2xl:text-lg  font-medium  mb-[20px] lg-custom:mb-[24px] 2xl:mb-[30px] '>{question.answer}</p>
      <TitleBtn label='Read More' 
      btnStyle={true} />
    </div>
    </>
    // <div>
    //     <h2>{question.question}</h2>
    //     <h4>{question.answer}</h4>
    // </div>
  )
}

export default FaqCard