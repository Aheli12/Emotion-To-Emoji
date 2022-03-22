prediction_1 = "";
prediction_2 = "";

Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");

Webcam.attach(camera);
function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="img" src="' + data_uri + '"/>';
    });
}
console.log("ml5 version = ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zOsA9gOKJ/model.json", ureka);
function ureka() {
    console.log("Model is Travelling Good!!!");
}
function predict() {
    v1 = window.speechSynthesis;
    v2 = "the prediction is " + prediction_1;
    v3 = "the prediction is " + prediction_2;
    v4 = new SpeechSynthesisUtterance(v2 + v3);
    v1.speak(v4);
}
function predict() {
    img = document.getElementById('img');
    classifier.classify(img, gotresult);
}
function gotresult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        if (result[0].label == "happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if (result[0].label == "sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if (result[0].label == "angry") {
            document.getElementById("update_emoji").innerHTML = "&#12848;";
        }

        if (result[1].label == "happy") {
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }
        if (result[1].label == "sad") {
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }
        if (result[1].label == "angry") {
            document.getElementById("update_emoji2").innerHTML = "&#12848;";
        }
    }
}