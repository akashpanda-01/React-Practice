import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    return(
        <div>
            <h1>Something Went Wrong.... !! {err.status}</h1>
            {console.log(err)
            }
        </div>
    )
};

export default Error;