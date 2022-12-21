import {useState} from "react";
import SearchBox from "./SearchBox";

export default function ShowImages() {

    const [imageList, setImageList] = useState([])
    const [text, setText] = useState('')

    async function fetchImage(text){
        setText(text)

        await fetch(`https://api.unsplash.com/search/photos?&query=${text}`,{
            headers:{
                Authorization: 'Client-ID orXhS0zmJLZqnl9dzm_S9TBfCz5icIIc0FNRXZxXXUc'
            }
        })
            .then((response) => response.json())
            .then((data) => setImageList(data.results))
            .catch( (err)=> console.log(err))
    }

    return (

        <>

        <div className="main">
            <div className="containers">
                <SearchBox fetchImage={fetchImage}/>
            </div>
        </div>

        <div className={'showImageContainer'}>
           <div className="breadcrumbs">
               <h3>{text === '' ? `Search For Images` : `${text.toLocaleUpperCase()} Images listed here` }</h3>
           </div>

            {imageList.map(e => {

                return(
                    <div className="images" key={e.id}>
                        <img src={e.urls.regular} alt={e.id}/>
                        <h4 className={'title'}>{e.alt_description}</h4>
                    </div>
                )
            })}

        </div>

        </>
    )
}