import './css/filmClassification.css'

const FilmClassification = () => {
    return (
        <>
            <div className="container">
                <div id="row1" className="row mt-5">
                <div className="col-lg-6 text-light"><h2 id="filmClassTitle">Film Classification</h2>
                </div>
                <div className="col-lg-6 text-light"><a href="https://www.bbfc.co.uk" rel="noreferrer" target="_blank">
                <img className="w-25 h25" src="https://darkroom.bbfc.co.uk/1920/a75a9b2247cdca4d108fe8893ad4b23a:9112b02833dc0b494974cd966693ec60/logo-website.png" alt="bbfc-logo" />
                </a></div>
                </div>
                <div id="row2" className="row mt-5">
                    <div className="col-sm text-light"><p>Classification is the process of giving age ratings and content advice to films and other audiovisual content to help children and families choose what’s right for them and avoid what’s not. Recommendations are made by Compliance Officers based on the BBFC’s published Guidelines. These are the result of extensive consultation with people right across the UK, research, and the BBFC’s more than 100 years of experience. They reflect people’s views on film, DVD, Blu-ray, video on demand (VoD) regulation and are regularly updated. For further information <a href="http://www.bbfc.co.uk" rel="noreferrer" target="_blank">click here</a> to go to the BBFC official website.</p></div>
                </div>
                <div id="row3" className="row mt-5">
                    <div className="col-sm-6 text-light">
                    <img className="bbfcImg" src="https://uploadvr.com/wp-content/uploads/2016/08/BBFC-1200x849.png" alt="" />
                    </div>
                </div>
            </div>
            </>
     );
}

export default FilmClassification;