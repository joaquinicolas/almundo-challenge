import * as React from 'react';
import './Price.css'

export interface Props {
    amount: number
}

const Price: React.SFC<Props> = ({amount}: Props) => {
    return (
        <div className="col-md-3 col-xs-12 price-box-ctn">
            <div className="price-box">
                <div className="seal-disney">
                </div>
                <p className="price-description">Precio por noche por habitación</p>
                <p className="price--lg">
                    <span className="price__currency">ARS</span>&nbsp;
                    <span className="price__amount">{amount}</span>
                </p>
                <span className="legal-taxes">Impuestos y tasas no incluidos</span>
                <a  className="button button--lg button--primary button--block button-detail">Ver hotel</a>
            </div>
        </div>
    )
}

export default Price