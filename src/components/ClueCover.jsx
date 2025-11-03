

export const ClueCover = ({Icon, label}) => {
  return (
    <div className="relative flex justify-center items-center font-baloo">
        <Icon className="absolute  text-white 2xl:text-8xl lg:text-6xl xl:text-7xl md:text-3xl group-hover:scale-120 transition duration-400 ease-in-out" />
        <h1 className="lg:text-sm xl:text-lg md:text-[9px] font-bold absolute opacity-0 group-hover:opacity-100 group-hover:scale-200 transition duration-400 ease-in-out">{label}</h1>
    </div>
  )
}
