import axios from "axios";

export default axios.create({
    baseURL: `https://api.rawg.io/api`,
    params: {
        key: `fe8458d448534be5a17ad3fff0edfd69`
    }
})