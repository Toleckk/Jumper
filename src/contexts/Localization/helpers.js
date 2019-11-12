export const getLang = async lang => {
    console.log(lang);
    const response = await fetch(`/locals/${lang}.json`).catch(console.error);
    return response.json();
};