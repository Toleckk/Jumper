import React from 'react'
import Text from "./Text"
import Container from "./Container"

const NotFound = () => (
    <Container>
        <Text>
           Страница не найдена
        </Text>
    </Container>
)

export default React.memo(NotFound)