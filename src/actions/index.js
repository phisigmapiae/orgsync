import axios from 'axios';

export const FETCH_BROTHERS = 'FETCH_BROTHERS';

const ROUTE = 'http://os_extranet_files_test.s3.amazonaws.com/22929_84625_Brothers.json';

export function fetchPosts() {

    const data = axios.get(ROUTE);
    return {
        type: FETCH_BROTHERS,
        payload: data
    }
}
