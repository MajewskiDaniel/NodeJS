const axios = require('axios');

const getUrlHandler = () => {
    const quotesUrl = `http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`;
    const getUrl = async (url) => {
        const randomQuote = axios.get(url);
        return randomQuote;
    };
    (async () => {
        try {
            const quote = await getUrl(quotesUrl);
            console.log(quote.data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    })();
}

module.exports = {
    command: 'url',
    desc: 'Wyświetlenie losowego cytatu z serwera',
    handler: getUrlHandler
};