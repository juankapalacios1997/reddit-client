import "./header.css";

export const Header = (props) => {
    const { logo } = props;

    return (
        <div className="header" >
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
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