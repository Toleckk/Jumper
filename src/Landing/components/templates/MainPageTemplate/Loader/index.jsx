import React from "react";
import {Loader as DefaultLoader} from "Common/molecules";
import ExternalContainer from "./ExternalContainer";
import InternalContainer from "./InternalContainer";

const Loader = () => <ExternalContainer>
    <InternalContainer>
        <DefaultLoader/>
    </InternalContainer>
</ExternalContainer>;

export default React.memo(Loader);