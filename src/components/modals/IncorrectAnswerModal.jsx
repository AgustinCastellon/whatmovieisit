import { FaInfoCircle } from "react-icons/fa"



export const IncorrectAnswerModal = () => {
  return (
    <div className="fixed top-71 bg-red-500 w-100 h-10 flex justify-center items-center rounded-sm animate-fade-in">
        <FaInfoCircle className="text-white text-2xl mr-2"/>
        <h1 className="font-baloo text-2xl text-white">RESPUESTA INCORRECTA</h1>
    </div>
  )
}
