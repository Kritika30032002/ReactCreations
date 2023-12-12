import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const[searchInput,setsearchInput]=useState("")

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const handleChange = (e) => {
        e.preventDefault();
        setsearchInput(e.target.value);
      }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        props.setProgress(10);
        const url1 = `https://newsapi.org/v2/everything?q=${searchInput}&sortBy=popularity&apiKey=${props.apiKey}`;
        setLoading(true)
        let data1 = await fetch(url1);
        props.setProgress(30);
        let parsedData1 = await data1.json()
        props.setProgress(70);
        setArticles(parsedData1.articles)
        setTotalResults(parsedData1.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - DHAKAD NEWS`;
        updateNews();
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
                <div className="container-fluid" style={{ "font-family": "Oswald, sans-serif", margin: '55px 0px' }}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search your fav news!" aria-label="Search" value={searchInput} onChange={handleChange} />
                            <button className="btn btn-light" type="submit" onClick={handleSubmit}>Search</button>
                    </form>
                </div>
            <h1 className="text-center" style={{ "fontFamily": "Oswald, sans-serif", margin: '29px 0px 35px', marginTop: '45px',color:'white' }}>DHAKAD NEWS - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-sm-10 d-flex  flex-column  justify-content-between col equal-height-col" key={element.url} style={{marginLeft:"6rem"}}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News