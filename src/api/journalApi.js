import axios from 'axios'
const journalApi =  axios.create({
    baseURL:'https://vue-demos-b930e-default-rtdb.firebaseio.com'
})
export default journalApi 