import {useState} from "react";
import ShowImages from "./ShowImages";

function SearchBox({fetchImage}) {

    const [text, setText] = useState('')

    function handleSubmit(){
        fetchImage(text)
    }

    return (
        <>
            <div className={'header'}>
                <div className="logo">
                    <h3><a href="/">React Image Search</a></h3>
                </div>
                <div className="search">
                    <form action="" onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }} >
                        <input type="text" value={text} onChange={ (e) => setText(e.target.value)} placeholder={'Enter Keywords'} className={'field'}/>
                    </form>
                </div>
                <div className="btn">
                    <button onClick={handleSubmit}>Search</button>
                </div>
            </div>

            <ShowImages/>

        </>
    )
}

export default SearchBox;