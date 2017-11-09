import * as React from "react";
import './Filter.css';

export const ICON_STAR = "icon-star"
export type ICON_STAR = typeof ICON_STAR
export const ICON_LEN = "icon-len"
export type ICON_LEN = typeof ICON_LEN


export type IconHeader = ICON_STAR | ICON_LEN

export interface Props {
    iconHeader: string
    textHeader: string
    onButtonSearchClick?: (text: string) => any
    onItemStarChecked?: (stars: number) => any
}

const Filter: React.SFC<Props> = ({iconHeader, textHeader, onButtonSearchClick, onItemStarChecked}: Props) => {

    return (
        <div className="am-ctn am-ctn--gtr filter" style={{minHeight: 90}}>
            <span className="filter-header col-md-12">
                <span className={`icon ${iconHeader}`}></span>
                <span>{textHeader}</span>
                <span className="arrow desktop icon-up"></span>
            </span>
            <div className="filter-container">
                <Searcher onClick={onButtonSearchClick}/>
                <StarsFilter onItemChecked={onItemStarChecked} />
            </div>
        </div>
    )
}


interface SearcherProps {
    onClick: (text: string) => any
}
const Searcher: React.SFC<SearcherProps> = ({onClick}: SearcherProps) => {
    let text: HTMLInputElement
    return (
        <div className="filterv2__list-double__item-left">
            <label className="input--block"></label>
            <div className="am-ctn am-ctn--gtr-inside">
                <div className="col-md-8">
                    <input type="text" style={{fontSize: 12}} ref={ref => text = ref} placeholder="Ingrese nombre del hotel"className="col-md-12 input--block ng-pristine ng-untouched ng-valid ng-empty"/>
                </div>
                <div className="col-md-4">
                    <input type="button" style={{fontSize:12}} value="Aceptar" onClick={() => onClick(text.value)} className="col-md-12 button input--block button--secondary-outline"/>
                </div>
            </div>
        </div>
    )
}


interface StarsFilterProps {
    onItemChecked: (stars: number) => any
}
const options: string[] = ['1','2','3','4','5']
const StarsFilter: React.SFC<StarsFilterProps> = ({onItemChecked}: StarsFilterProps) => {
    var isChecked: boolean = false
    return (
        <div className="options-filter">
            <div className="option">
                <label htmlFor="all_STAR" className="input--block">
                    <input type="checkbox"/>
                    <span>Todas las estrellas</span>
                    <span className="option-quantity option-selected">(71)</span>
                </label>
            </div>
            {
                options.map((value, index) => (<div key={index} className="option">
                    <label htmlFor={value} className="input--block">
                        <input type="checkbox" onChange={() => {
                         isChecked = !isChecked
                            if (isChecked){
                             return onItemChecked(parseInt(value))
                            }
                        }}/>
                        <span className="option-star">
                            {
                                new Array(parseInt(value)).map((value2, i) => <span key={i} className="icon-star"></span>)
                            }
                        </span>

                    </label>
                </div>))
            }
        </div>
    )
}

export default Filter;