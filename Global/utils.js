var GlobalNamespace;
(function (GlobalNamespace) {
    var utils;
    (function (utils) {
        function getSomethings() {
            return false;
        }
        utils.getSomethings = getSomethings;
    })(utils = GlobalNamespace.utils || (GlobalNamespace.utils = {}));
})(GlobalNamespace || (GlobalNamespace = {}));
