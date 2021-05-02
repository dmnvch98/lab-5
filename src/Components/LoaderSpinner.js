import React from "react";
import { Loader } from 'semantic-ui-react'

export default function LoaderSpinner() {
    return (
        <div className="loaderSpinner">
            <Loader active />
        </div>
    )
}