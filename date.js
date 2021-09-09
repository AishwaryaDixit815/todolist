// creating our own module.
//module.export is an object, so we can export as many function as we want, like so:
//module.exports.getDate = getDate;
//module.exports.getDay = getDay;
//etc.
//in that case, in the app.js, we need to run the function as : let day = date.getDate();

module.exports = getDate; //we are not adding parenthesis in front of the function name, because we are not calling (activating) it over here itself.

function getDate(){
    var today = new Date();
        var options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        };
    var day = today.toLocaleDateString("en-US", options);
    return day;
}
