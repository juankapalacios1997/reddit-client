import "./header.css";
import logoDark from "../../reddit-dark-logo.png";
import logoLight from "../../reddit-logo.png"

export const Header = (props) => {
    const { style } = props;

    return (
        <div className="header" >
            <div className="logo-container">
                <img src={style === "light" ? logoLight : logoDark} className="logo" alt="logo" />
            </div>
            <div className="searchbar-container">
                <form className="search" onSubmit={[]}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={[]}
                        onChange={[]}
                        aria-label="Search posts"
                    />
                    <button type="submit" onClick={[]} aria-label="Search">
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}