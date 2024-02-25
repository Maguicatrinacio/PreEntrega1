const Loading = () => {
    return (
        <div className="container my-5 container-loading">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-grow text-light" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;