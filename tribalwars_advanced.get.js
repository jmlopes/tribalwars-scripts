javascript:(function(){var a=game_data.player.id+"TWA_URL",b=game_data.player.id+"TWA_STATS",c=game_data.player.id+"TWA_CALLBACK";localStorage[a]||(localStorage[a]="https://tribalwars-scripts.googlecode.com/svn/trunk/tribalwars_advanced.min.js");localStorage[b]||(localStorage[b]="http://goo.gl/s5uA2G");localStorage[c]&&eval(localStorage[c]);$.getScript(localStorage[a],function(){$.getJSON(localStorage[b])})})();