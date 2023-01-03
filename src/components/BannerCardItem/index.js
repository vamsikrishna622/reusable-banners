// Write your code here.
import './index.css'

const ReusableBanner = props => {
  const {bannerItem} = props
  const {headerText, description, className} = bannerItem
  return (
    <li className={className}>
      <h1 className="banner-card-heading">{headerText}</h1>
      <p className="banner-card-description">{description}</p>
      <button className="show-more-btn">Show More</button>
    </li>
  )
}

export default ReusableBanner
