const Modal = ({ handleClose, show, children }) => {
const showHideClassName = show ? "modal display-block" : "modal display-none"

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="card m-0 min-w-max min-h-max max-w-[90vw] max-h-[90vh] overflow-y-auto">
                    <div className="card-body p-1">
                        {children}
                        <button className="bg-red-500 text-white p-1 absolute top-0 right-0 z-[998]" type="button" onClick={handleClose} >
                            <i className="far fa-times"></i>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Modal