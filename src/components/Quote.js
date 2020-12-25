const getFormatDate = (date) => {
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return year + '-' + month + '-' + day;
}

const Quote = ({content, date, tags, url}) => {
    const formatDate = getFormatDate(new Date(date))
    return (
        <div className="quote">
            <p className="quote__content">{content}</p>
            <p className="quote__date">{formatDate}</p>
            <a className="quote__url" href="https://api.tronalddump.io/random/quote" target="_blank">{url}</a>
            <ul className="quote__tags">
                {tags.map((tag, index) => <li className="quote__tag" key={index}>#{tag} </li>)}
            </ul>
        </div>
    )
}

export default Quote;