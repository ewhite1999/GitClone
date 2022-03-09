import axios from 'axios';




// Helpers
const fetchRepo = async searchTerm => {
    try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/capital/${searchTerm}`);
        return data[0].latlng;
    } catch(err) {
        if (err.response.status === 404) { throw Error('That\'s not a valid capital city!') }
        throw new Error(err.message)
    }
}

