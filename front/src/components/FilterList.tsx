import * as React from 'react';
import Filter,{ICON_LEN, ICON_STAR} from './Filter/Filter';


export interface Props {
    filterByName: (text: string) => any
    filterByStars: (stars: number) => any
}
const FilterList: React.SFC<Props> = ({filterByName, filterByStars}: Props) => {
    return (
        <aside className="col-md-3 visible-lg">
            <section className="col-md-12 filters">
                <div className="filters-head">
                    <span>Filtrar por</span>
                </div>

                <Filter iconHeader={ICON_LEN} onButtonSearchClick={filterByName}  textHeader="Nombre"/>
                <Filter iconHeader={ICON_STAR} onItemStarChecked={filterByStars} textHeader="Estrellas"/>
            </section>
        </aside>
    )
}

export default FilterList