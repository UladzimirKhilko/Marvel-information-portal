class MarvelService {

    _apiBase ='https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=f1a29846e4d1ee3d821aa8f1d78859f5'

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Cloud not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`); 
        return res.data.results.map(this._transformCharacter);          
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);       
    }

    _transformCharacter = (char) => {
        if (!char.description) {
            char.description = 'There is no description for this character.'
        } else if (char.description.length > 200) {
            char.description = char.description.substr(0, 197) + "...";
        }
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path+'.'+char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }
}

export default MarvelService;