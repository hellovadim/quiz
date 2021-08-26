import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-33157-default-rtdb.firebaseio.com'
})