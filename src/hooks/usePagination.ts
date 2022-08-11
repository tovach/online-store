import {useSearchParams} from "react-router-dom";
import {useCallback} from "react";


const useProductOffsetQuery = () => {
    const [params, setParams] = useSearchParams();

    const nextPage = useCallback(() => {
        setParams({...Object.fromEntries(params.entries()), offset: String(Number(params.get("offset")) + 8)})
    }, [params])

    const prevPage = useCallback(() => {
        if (Number(params.get('offset')) !== 0) {
            setParams({...Object.fromEntries(params.entries()), offset: String(Number(params.get("offset")) - 8)})
        } else return
    }, [params])

    return {nextPage, prevPage}
}

export {useProductOffsetQuery}
