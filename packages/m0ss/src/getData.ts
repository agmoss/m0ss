export const getText = async (url: string) => {
    try {
        const response = await fetch(url);
        return response.text();
    } catch (e) {
        return "error";
    }
};
