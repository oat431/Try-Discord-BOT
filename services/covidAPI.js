const axios = require('axios');

const getCovid = async (url) => {
    try{
        const res = await axios.get(url)
        return res.data[0];
    } catch (err){
        console.error(err)
    }
}

module.exports = { 
    getCovid
};
// "/api/cases/today-cases-all"