import React, {useEffect, useState} from "react";

import {
    CloseIcon,
    portfolioActions,
    portfolioState,
    SuccessIcon,
    useAppDispatch,
    useAppSelector
} from "@/IndexImporter";
import "./Advertissement.scss";

const Advertissement: React.FC = () => {
    const dispatch = useAppDispatch();
    const message = useAppSelector(portfolioState.AdvertMessage);

    const [
        isOpen,
        setOpen
    ] = useState(false);

    const closeAdvertMessage = () => {
        setOpen(false);
        dispatch(portfolioActions.changeAdvertMessage(""));
    };

    useEffect(() => {
        if (message) {
            setOpen(true);
            setTimeout(() => {
                closeAdvertMessage();
            }, 5600);
        } else {
            closeAdvertMessage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="advertissement-box">
            <div className="advertissement-message-box">
                <SuccessIcon />
                <div className="message-box">
                    <p>
                        Succès
                    </p>
                    <span>
                        {message}
                    </span>
                </div>
                <button
                    className="closing-button"
                    type="button"
                    onClick={closeAdvertMessage}
                >
                    <CloseIcon />
                </button>
            </div>
            <div className="progress-bar" />
        </div>
    );
};

export default Advertissement;
