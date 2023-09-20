

const Default = () => {
    const defaultStyle ={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh'
    }
    return (
        <div style={defaultStyle}>
            <h1 style={{color: 'green'}}>Welcome to your website</h1>
        </div>
    );
};

export default Default;