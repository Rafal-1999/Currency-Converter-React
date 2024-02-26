import { useState, useEffect } from "react";

export const useFetchData = (url, errorText) => {
    const [dataDetails, setDataDetails] = useState({
        isLoading: false,
        data: [],
        errorInfo: ""
    });

    useEffect(() => {
        setDataDetails({
            isLoading: true
        });
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDataDetails({
                    isLoading: false,
                    data: data[0].rates || []
                });
            })
            .catch(() => {
                setDataDetails({
                    isLoading: false,
                    errorInfo: errorText
                });
            });
    }, [url, errorText]);

    return dataDetails;
};
