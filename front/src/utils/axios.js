import axios from "axios";

const instance = axios.create({
	// baseURL: 'https://match-your-mate.herokuapp.com',
	baseURL: 'http://localhost:4000',
	// withCredentials: true
})

export default instance;