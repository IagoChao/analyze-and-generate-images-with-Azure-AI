/* 
create a function called analyzeImage that receives a url like input and returns a json with the result of the analysis.
use API of image analysis 4.0 from azure cognitive services.
 also can customize the visual features to be returned. 
 */

const analyzeImage = async (url) => {
    const endpoint = "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories,Description,Color";
    const key = "195c4b93-80fc-4792-9ebd-382ea9cdc0d5";
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": key
        },
        body: JSON.stringify({ url })
    };
    const response = await fetch(endpoint, params);
    const result = await response.json();
    return result;
};


export default analyzeImage;