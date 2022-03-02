import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`${className} card`}>
      <div className="innerContent">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="smButton">Show More </button>
      </div>
    </li>
  )
}

export default BannerCardItem
