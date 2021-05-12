import React,  { useState, memo} from 'react';

const FormInput = () => {
  const [input, setInput] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);

  const callNewsAPI = () => {
    if(input !== ''){
      fetch(`https://newsapi.org/v2/top-headlines?country=gb&category=${input}&apiKey=3074a2142d3f4e49a8b10384bbea4c93`)
      .then((response) => {
          response.json().then(function(data) {
            const {articles} = data;
            setNewsArticles(articles);
          });
        }
      )
      .catch((err) => {
        console.log('Error in API', err);
      });
    }
  }

    return(
        <div>
          <h4>Top 10 Headlines from Britain Search by category (business, sports etc.)</h4>
          <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>
          <button onClick={callNewsAPI}>Search</button>

          <div className="container">
            {newsArticles.slice(0, 9).map((row) => (
              <div>
                <a target="_blank" href={row.url} rel="noreferrer">{row.title}</a>
                <p>{row.description}</p>
                <p>Article By - {row.author}</p>
              </div>
            )) } 
          </div>

        </div>
    );
}

export default memo(FormInput);