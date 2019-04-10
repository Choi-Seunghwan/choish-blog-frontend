import axios from 'axios'

const API_URL = 'http://localhost:8000';

class APIService{
    getPostList() {
        
        axios.get(`${API_URL}/api/posts`,{
			headers: {
				// 'Access-Control-Allow-Origin': '*',
			},
		})
      .then(res => {
        console.log("!!!!!!!!!")
        console.log( res.data.results)
        return res.data.results
      })
    }
}

export default APIService;