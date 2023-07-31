import React from "react";

export const ChildArea = (props) => {
    const {open} = props

    return (
        <>
            {open ? (
                <div><p>子コンポーネント</p></div>
            ) : null}
        </>
    );
}