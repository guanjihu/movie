import axios from 'axios'
export function http(url, pageNum) {
    return axios({
        method: "get",
        url: url,
        params: {
            pageNum
        }
    })
}
export function https(filmId) {
    return axios({
        method: "get",
        url: "http://132.232.94.151:3000/api/film/getDetail",
        params: {
            filmId
        }
    })
}