
export const OverviewClue = ({overview}) => {
  return (
    <div className="flex text-center p-4 hover:scale-103 transition ease-in-out duration-600">
        <p className="italic font-medium 2xl:text-sm lg:text-[11px] md:text-[8px] line-clamp-3 leading-tight">{overview !== "asd" ? (overview) : ("not description found.")}</p>
    </div>
  )
}
