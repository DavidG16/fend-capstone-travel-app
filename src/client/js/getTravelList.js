// Client side API call to obtain travel list
export const getTravelList = async (requestUrl) => {
    const response = await fetch(requestUrl);
    try {
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error', error);
    }}