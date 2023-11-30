import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

const axiosSecure = axios.create({
    baseURL: 'https://blood-donate-server.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // intercept response and check for unauthorized responses.
    axiosSecure.interceptors.response.use(
        response => response,
        async error => {
            console.log('Error tracked in the interceptor', error.response)
            if (
                error.response &&
                (error.response.status === 401 || error.response.status === 403)
            ) {
                await logout();
                navigate('/login');
            }

            return Promise.reject(error)
        }
    )
}
export default axiosSecure
