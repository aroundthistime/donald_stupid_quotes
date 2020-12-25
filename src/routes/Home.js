import React from "react"
import axios from "axios";
import Quote from "../components/Quote";
import  "./Home.css";

const RANDOM_QUOTES_URL = "https://api.tronalddump.io/random/quote";

class Home extends React.Component {
    state = {
        isLoading : true,
        quote : null
    };
    getRandomQuotes = async() => {
        this.setState({isLoading : true});
        const response = await axios({
            url : RANDOM_QUOTES_URL,
            method : "GET"
        });
        const {
            data : {
                appeared_at : date,
                tags,
                value : content,
                _embedded : { source }
            }
        } = response;
        const url = source[0].url;
        const quote = {
            date,
            content,
            tags,
            url
        };
        this.setState({isLoading : false, quote});
    }
    componentDidMount(){
        this.getRandomQuotes();
    }
    render() {
        const { isLoading } = this.state;
        if (isLoading){
            return (
                <main>
                    <img className="loader-image" src="https://i0.wp.com/mdhsociety.com/wp-content/uploads/2017/11/throbber.gif?fit=480%2C480&ssl=1"></img>
                </main>
            )
        } else {
            const {
                quote : {date, content, tags, url},
            } = this.state;
            return (
                <main>
                    <Quote
                        date={date}
                        content={content}
                        tags={tags}
                        url={url}>
                    </Quote>
                    <div className="refresh" onClick={this.getRandomQuotes}>
                        <i className="fas fa-redo"></i>
                    </div>                    
                </main>
            )
        }
        
    }
}

export default Home;