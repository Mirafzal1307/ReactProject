// eslint-disable-next-line import/no-anonymous-default-export
export default (query) => {
    if (query) {
        const queryStirng = query.split('?')[1];
        if (queryStirng.length > 0) {
            const params = queryStirng.split("&");
            const paramObj = {};
            params.forEach(param => {
                const keyValue = param.split("=");
                paramObj[keyValue[0]] = keyValue[1];
            });

            return paramObj;
        }
    }
    return {};
}