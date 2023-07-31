import { useState, useEffect } from "react";

export const useFetchData = (url, errorText) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [errorInfo, setErrorInfo] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setData(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setErrorInfo(errorText);
            });
    }, [url, errorText]);

    return { isLoading, data, errorInfo };
};
