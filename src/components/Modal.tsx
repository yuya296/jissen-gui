
const Modal = () => {
    return (
        <>
            <button type="button" className="btn btn-primary btn-{themecolor}.rounded-circle.p-0" data-bs-toggle="modal"
                data-bs-target="#addPosition">
                在庫を追加
            </button>


            <div className="modal fade" id="addPosition" tabIndex={-1} aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">在庫を追加する</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="閉じる"></button>
                        </div>
                        <div className="modal-body"></div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">閉じる</button>
                            <button type="button" className="btn btn-primary" >在庫を追加する</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal;