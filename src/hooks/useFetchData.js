import { useState, useEffect } from "react";

export const useFetchData = (url, error) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [errorInfo, setErrorInfo] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setIsLoading(false);
                setData(response);
            })
            .catch((err) => {
                setIsLoading(false);
                setErrorInfo(error);
                console.log(`Komunikat błędu: ${err}`);
            });
    }, []);

    return { isLoading, data, errorInfo };
};
