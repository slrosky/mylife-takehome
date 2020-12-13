import axios from 'axios';

// Uses heroku cors anywhere to test without deploying in a dev only env
// Would use a token for deployed iterations
export const fetchAllData = async () => {
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
    const url = "https://sbt-tech-exercise-content.s3-us-west-1.amazonaws.com/content.json"
    const { data: { content } } = await axios({
        method: 'get',
        url: `${corsAnywhere}${url}`,
        headers: { 'Access-Control-Allow-Origin': '*' }
    });

    return content
};