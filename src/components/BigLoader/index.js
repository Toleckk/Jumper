import React from 'react';
import {Loader} from "components/Common/molecules";
import Container from "./Container";

const StyledLoader = () => <Container><Loader/></Container>;

export default React.memo(StyledLoader);