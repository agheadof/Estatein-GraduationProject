import Title from '../shared/Title';

type CardProps = {
    title : string;
    description : string;
}

function AchievementsCard({title, description} : CardProps) {
    return (
        <div className='p-5 border-[#262626] border shadow-[0px_0px_0px_10px_#191919] rounded-lg'>
            <Title heading={title} paragraph={description} paragraphStyle=''/>
        </div>
    )
}

export default AchievementsCard
