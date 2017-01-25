var GlobalNamespace;
(function (GlobalNamespace) {
    var App = (function () {
        function App() {
            GlobalNamespace.utils.getSomethings();
        }
        return App;//s
    }());
    GlobalNamespace.App = App;
})(GlobalNamespace || (GlobalNamespace = {}));
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
