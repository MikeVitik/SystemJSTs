var GlobalNamespace;
(function (GlobalNamespace) {
    var App = (function () {
        function App() {
            GlobalNamespace.utils.getSomethings();
        }
        return App;
    }());
    GlobalNamespace.App = App;
})(GlobalNamespace || (GlobalNamespace = {}));
