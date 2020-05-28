import React from "react"
import Link from "../../atoms/Link"

const ClosingLink = ({close, ...props}) => <Link onClick={close} {...props}/>

export default ClosingLink