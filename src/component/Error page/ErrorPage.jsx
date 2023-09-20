import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const errorStyle={
        textAlign: 'center',
        padding: '10px',
        marginTop: '200px'
    }
    const error = useRouteError();
    return (
        <div style={errorStyle}>
            <h1>Oopps !!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to ="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;