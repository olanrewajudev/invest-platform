import spinner from '../../assets/spins.gif'
const Loading = ({ title = 'Loading please wait!....' }) => {
    return (
        <div className='fixed top-0 left-0 w-[100vw] h-screen flex flex-col gap-3 items-center justify-center z-[999] bg-white bg-blend-color-burn'>
            <img src={spinner} alt="" className="w-32 opacity-70" />
            <div className="text-base text-slate-600 font-semibold animate-pulse">{title}</div>
        </div>
    )
}

export default Loading