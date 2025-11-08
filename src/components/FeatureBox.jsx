const FeatureBox = ({title,desc,icon}) => {
  return (
    <div className="text-white element-center flex-col text-center">
        <img src={`/src/assets/images/${icon}`} alt="icon-img" className="w-20 h-20 object-contain" />
        <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
        <p className="font-normal text-small">{desc}</p>
    </div>
  )
}

export default FeatureBox
