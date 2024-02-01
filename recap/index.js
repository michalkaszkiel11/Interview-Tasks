const url = "https://api.unsplash.com/photos";
const accessKey = "Wch0aMrYh-xzLjeB5doI67ADdjjmJ24pw8dtHB7rCj8";
const parameter = {
    order_by: "popular",
};
const handleAccess = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${accessKey}`,
            },
        });
        if (!response.ok) {
            throw new Error(`error ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const handleImages = async (params) => {
    const newParams = new URLSearchParams(params).toString();
    console.log(newParams);
    const newUrl = `${url}/?${newParams}`;
    console.log(newUrl);
    const data = await handleAccess(newUrl);
    return data;
};

const displayImages = async (imagesData) => {
    const box = document.querySelector("#one");
    box.innerHTML = "";

    imagesData.forEach((element) => {
        const newImage = document.createElement("img");
        const imgUrl = element.urls.regular;
        newImage.src = imgUrl;
        box.appendChild(newImage);
        newImage.classList.add("one");
    });
};

handleImages(parameter).then((imagesData) => {
    if (imagesData) {
        displayImages(imagesData);
    }
});
