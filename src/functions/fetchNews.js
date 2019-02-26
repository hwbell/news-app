
// documentation from https://www.npmjs.com/package/newsapi

const NewsAPI = require('newsapi');
const YOUR_API_KEY = 'c78288d021a544c69abec55a4ce257cd';
const newsapi = new NewsAPI(YOUR_API_KEY);

// define defaults for 
async function getNews (q, category, country) {
  
  // start with defaults
  const seachParams = {
    sortBy: 'popularity'
  };
  // get rid of the ones that don't exist by only adding the ones that do
  q ? seachParams.q = q : null;
  category ? seachParams.category = category : null;
  country ? seachParams.country = country : null;
  
  // To query top headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  return newsapi.v2.topHeadlines(seachParams).then(response => {
    console.log(`Fetching news with args:`)
    console.log(q, category, country);

    console.log(`total articles: ${response.totalResults}`);
    console.log(`First result: `)
    console.log(response.articles[0])
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
}

getNews('', 'politics', '')

// export {
//   getNews
// }