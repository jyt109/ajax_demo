String.format = function (string) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return string.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
    });
};