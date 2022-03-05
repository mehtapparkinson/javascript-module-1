function moodchecker(mood) {

    if (mood === "happy") {
        return "Good job....";
    }

    if (mood === "sad") {
        return "cloud.....";
    }

    if (mood=== typeof(1)) {
        return "beep";
    }

   else {
        return "sorry";
    }

}

console.log(moodchecker("sad"))
console.log(moodchecker(10))
console.log(moodchecker("happy"))