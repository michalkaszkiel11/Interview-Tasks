const accessKey = "Wch0aMrYh-xzLjeB5doI67ADdjjmJ24pw8dtHB7rCj8";
const apiUrl = "https://api.unsplash.com/photos";
const millionViews = 1000000;
const thousandLikes = 10;
const country = "US";

async function fetchData(url) {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${accessKey}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function fetchImages(params) {
    const queryParams = new URLSearchParams(params).toString();
    const urlWithParams = `${apiUrl}?${queryParams}`;
    const data = await fetchData(urlWithParams);
    return data;
}

async function displayImagesViews(images) {
    const views = document.getElementById("views");
    views.innerHTML = "";

    images.forEach((image) => {
        const imageElement = document.createElement("img");
        imageElement.src = image.urls.regular;
        views.appendChild(imageElement);
        imageElement.classList.add("views");
    });
}
async function displayImagesLikes(images) {
    const likes = document.getElementById("likes");
    likes.innerHTML = "";

    images.forEach((image) => {
        const imageElement = document.createElement("img");
        imageElement.src = image.urls.regular;
        likes.appendChild(imageElement);
        imageElement.classList.add("likes");
    });
}
async function displayByCountry(images) {
    const countryEl = document.getElementById("country");
    countryEl.innerHTML = "";
    images.forEach((country) => {
        const imageElement = document.createElement("img");
        imageElement.src = country.urls.regular;
        countryEl.appendChild(imageElement);
        imageElement.classList.add("country");
    });
}

// Example: Fetch images with over a million views
const paramsViews = {
    views: `>${millionViews}`,
};
const paramsLikes = {
    likes: `<${thousandLikes}`,
};
const paramsUs = {
    order_by: country,
};
fetchImages(paramsViews)
    .then((images) => {
        if (images) {
            displayImagesViews(images);
        }
    })
    .catch((error) => console.error(error));

fetchImages(paramsLikes)
    .then((images) => {
        if (images) {
            displayImagesLikes(images);
        }
    })
    .catch((error) => console.log(error));

fetchImages(paramsUs)
    .then((images) => {
        if (images) {
            displayByCountry(images);
        }
    })
    .catch((err) => console.log(err));

// const getData = async () => {
//     try {
//         const response = await fetch(
//             `${url}${path}/?order_by=popular&query=${countryName}`,
//             {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Client-ID ${clientId}`,
//                 },
//             }
//         );

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const jsonData = await response.json();
//         const countryEl = document.getElementById("country");
//         countryEl.innerHTML = "";
//         jsonData.forEach((data) => {
//             const imageEl = document.createElement("img");
//             imageEl.src = data.urls.regular;
//             countryEl.appendChild(imageEl);
//             imagesEl.classList.add("country");
//         });
//     } catch (error) {
//         console.error(error);
//     }
// };
