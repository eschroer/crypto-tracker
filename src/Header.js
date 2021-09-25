
import './Header.css'

const Header = () => {
    return(
    <div className="header-container">
    <div className="header-row">
        <div className="header">
            <p> Name </p>
            <p className="header-symbol">Symbol</p>
        </div>
        <div className="header-data">
            <p className="header-price">Price</p>
            <p className="header-volume">Volume</p>
            <p className="header-percent">% Change</p>
            <p className="header-marketcap">
                Market Cap</p>
        </div>
    </div>
    
</div>
    )
}

export default Header