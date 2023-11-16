/* 
create a function called analyzeImage that receives a url like input and returns a json with the result of the analysis.
use API of image analysis 4.0 from azure cognitive services.
 also can customize the visual features to be returned. 
 */

const analyzeImage = async (url) => {
    // el extremo que aparece en el portal de Azure es https://computer-vision-iago-ai.cognitiveservices.azure.com/
    // pero en la documentación aparece https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze
    // y en el ejemplo de la documentación aparece https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories,Description,Color
    // por lo que he decidido usar el del portal de Azure.

    const endpoint = "https://computer-vision-iago-ai.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Categories,Description,Color";
    const key = "0a0a05e7da0a4e41b9db8696b0c70966";
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