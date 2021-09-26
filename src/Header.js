
import './Header.css'

const Header = (props) => {
    
  return(
    <div className="header-container">
    <div className="header-row">
        <div className="header">
            <p> Name </p>
            <button className="button" type="button" onClick={(key) => props.requestSort('name')}> {(props.sortConfig.direction === "ascending" && props.sortConfig.key === 'name') ? "▲" : "▼"} </button>
            <p className="header-symbol">Symbol</p>
            <button className="button" type="button" onClick={(key) => props.requestSort('symbol')}> {(props.sortConfig.direction === "ascending" && props.sortConfig.key === 'symbol') ? "▲" : "▼"}</button>
        </div>
        <div className="header-data">
            <p className="header-price">Price</p>
            <button className="button" type="button" onClick={(key) => props.requestSort('current_price')}> {(props.sortConfig.direction === "ascending" && props.sortConfig.key === 'current_price') ? "▲" : "▼"}</button>
            <p className="header-volume">Volume</p>
            <button className="button" type="button" onClick={(key) => props.requestSort('total_volume')}> {(props.sortConfig.direction === "ascending" && props.sortConfig.key === 'total_volume') ? "▲" : "▼"}</button>
            <p className="header-percent">% Change</p>
            <button className="button" type="button" onClick={(key) => props.requestSort('price_change_percentage_24h')}> {(props.sortConfig.direction === "ascending" && props.sortConfig.key === 'price_change_percentage_24h')? "▲" : "▼"}</button>
            <p className="header-marketcap">Market Cap</p>
            <button className="button" type="button" onClick={(key) => props.requestSort('market_cap')}> {(props.sortConfig.direction === "ascending" && props.sortConfig.key === 'market_cap') ? "▲" : "▼"}</button>
        </div>
    </div>
</div>
    )
}

export default Header