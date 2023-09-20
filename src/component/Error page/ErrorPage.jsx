
const ErrorPage = () => {
    const errorStyle={
        textAlign: 'center',
        padding: '10px',
        marginTop: '200px'
    }
    return (
        <div style={errorStyle}>
            <h1>Oopps !!!</h1>
            <p>Page not found</p>
        </div>
    );
};

export default ErrorPage;