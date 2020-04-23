import gql from 'graphql-tag'

export const UPLOAD = gql`
    mutation Upload($file: Upload!) {
        upload(file: $file) {
            filename
            encoding
            mimetype
        }
    }
`;