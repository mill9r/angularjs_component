export function updateStore(value,name) {
    console.log(value,'key',name);
    return {
        type: 'UPDATE_FIELD',
        value,
        name
    }
}

export default {updateStore}