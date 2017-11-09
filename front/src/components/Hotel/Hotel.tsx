import * as React from 'react';
import Price, {Props as PriceProps} from '../Price/Price'
import  './Hotel.css'

export interface Props {
    image: string,
    name: string,
    stars: number,
    amenities: string[],
    price: number,
    onClick?: () => void
}

const Hotel: React.SFC<Props> = ({image, name, stars, amenities, price}: Props) => {
    return (
        <article className="hotel-ctn row am-ctn recommended">
            <div className="header-hotel col-md-4 col-xs-12">
                <div className="hotel-image"></div>
            </div>
            <div className="col-md-5 col-xs-12">
                <div className="hotel-description">
                    <a className="link-hotel">
                        <h3 className="hotel-name">{name}</h3>
                    </a>
                    <p className="star-ctn">
                        <span>
                            {
                                getStars(stars)
                            }

                        </span>
                    </p>
                    <div></div>
                    <p className="meal-ctn">
                        {
                            amenities.map(getAmenity)
                        }
                        <span className="meal-description">desayuno</span>
                    </p>
                    <div></div>
                </div>
            </div>

            <Price amount={price}/>
        </article>
    )
}

const getAmenity = (amenity: string) => <span className={`icon-${amenity}`}></span>

function getStars(n: Number){
    var starsArray = Array(n)
    return starsArray.map(() => <span className="icon-star star--lg"></span>)
}
export default Hotel