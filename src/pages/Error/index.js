import { Link } from "react-router-dom";
import './error.css'

function Error() {
    return(
        <div className="not-found">
            <h1>404 ERROR</h1>
            <h2>This page doesn't exist...</h2>
            <Link to="/">Check all movies!</Link>
        </div>
    )
}

export default Error