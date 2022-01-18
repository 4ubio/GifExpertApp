export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=16&api_key=MV0A7bZVwWQ6oW9RrMz1dlwHFj95b6Co`;
    const ans = await fetch(url);
    const { data } = await ans.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}