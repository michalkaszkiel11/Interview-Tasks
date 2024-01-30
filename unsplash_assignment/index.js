let data = [];
const url = "https://api.unsplash.com/";
const statistics = "/stats/total";

const response = await fetch("https://unsplash.com/oauth/token", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        client_id: "Wch0aMrYh-xzLjeB5doI67ADdjjmJ24pw8dtHB7rCj8",
        client_secret: "hr98oZfqo2rK5rOWSBJWDL1dN4JiKYl6QTO-gnN0ekU",
        redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
        code: "3LGLZy3G2ITA-4y3CzpV2oalIQ5_X-K4QoxQMFd1CLo",
        grant_type: "authorization_code",
    }),
});
const tokenData = await response.json();
const accessToken = tokenData.access_token;

const getAcces = async () => {
    try {
        const response = await fetch(`${url}${statistics}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        data = jsonData;
        console.log(jsonData);
    } catch (error) {
        console.error(error);
    }
};

const startBtn = document.getElementById("getData");
startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    getAcces(); // Changed from getData to getAcces
});
