

function SearchBox(props) {
    return (
        <div className={'header'}>
            <div className="logo">
                <h3>React Image Search App</h3>
            </div>
            <div className="search">
                <form action="">
                    <input type="text" className={'field'}/>
                </form>
            </div>
            <div className="btn">
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBox;