import { useEffect, useState } from "react";
import { axiosInstance} from "../src/api/axios-instance";

// const {data, isLoading, isError} = useCustomFetch('url');

const useCustomFetch = (endpoint) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);
   
    useEffect(() => {
        const getMovies = async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(endpoint);
                setData(response.data);
            } catch (error) {
                setIsError(true);
                console.error("영화 데이터를 가져오는 중 오류 발생:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getMovies();
      }, [endpoint]);

      return {data, isLoading, isError}
}

export default useCustomFetch;