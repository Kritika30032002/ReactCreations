import React from 'react'
import read_more from './read_more.png' 

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3 d-flex  flex-column  justify-content-between">
                <div className="card container equal-height-col equal-height-row">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                    }
                    }> 
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <span className="badge rounded-pill bg-danger my-2"> {source} </span>
                        <h5 className="card-title" style={{"font-family": "Roboto Condensed, sans-serif",fontStyle: 'italic',fontWeight: 'bold',fontSize:"28px"}} >{title}  </h5>
                        <p className="card-text" style={{"font-family":"Playfair Display, serif",fontSize:"20px"}}>{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-lg" ><img className="my-3 img-fluid" src={read_more} alt="loading" style={{backgroundSize:"cover"
                    ,width:"10rem",height:"8rem"}
                    }/></a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem