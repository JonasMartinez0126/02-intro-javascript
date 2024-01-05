

/*const getImagePromesa = () => {
    const promesa = new Promise( (resolve, reject) => {
        resolve('sdf')
    }) 

    return promesa;
}

getImagePromesa().then( console.log);*/

const getImage = async () => {

    try {
        const apiKey = 'u06f3Esut8fyLXPt2WMLZDPVKr4Kaze7';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }

}

getImage();

/*const apiKey = 'u06f3Esut8fyLXPt2WMLZDPVKr4Kaze7';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( resp => resp.json())
.then( ({data}) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn);*/