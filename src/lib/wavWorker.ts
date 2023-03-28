// declare const self: DedicatedWorkerGlobalScope;

import { getBase64 } from './helpers';

onmessage = ({ data: { file } }) => {
    console.log(getBase64(file));

    return "blah"
}

export { };