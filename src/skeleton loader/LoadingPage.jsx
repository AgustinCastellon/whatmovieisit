import loadingImg from '../assets/isLoading.png'

export const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center">
        <img src={loadingImg} alt="loading..." className="w-120"/>
    </div>
  )
}
