/**
 * Utilities.
 * @type {Object}
 */
var Util = {
    isString: function (v) { return typeof v === 'string'; },
    isFunction: function (v) { return typeof v === 'function'; },
    isObject: function (v) { return Object.prototype.toString.call(v) === '[object Object]'; },
    isArray: function (v) { return Object.prototype.toString.call(v) === '[object Array]'; },
    isAlias: function (v) { return v instanceof Alias; },
    each: function (v, func) {
        if (Util.isObject(v)) {
            for (var p in v) {
                if (!v.hasOwnProperty(p)) continue;
                var r = func(v[p], p);
                if (r === false) break;
            }
        } else if (Util.isArray(v)) {
            for (var i = 0, len = v.length; i < len; i++) {
                var r = func(v[i]);
                if (r === false) break;
            }
        }
    }
};

/**
 * Alias DOM.
 * @param  {Object|String} map              Selector-alias map.
 * @param  {HTMLElement|Undefined} $el      Root element.
 * @param  {Boolean|Undefined} $notInClass  Whether as a function or class.
 * @return {Object}                         Result table.
 */
var Alias = function (map, $el, notInClass) {
    var ifJoinAlias = !!map.join;
    var aliasSeparator = '/';

    function isKeyword(w) {
        return w === 'alias' || w === 'lazy' || w === 'join';
    }

    function alias(map, $root, obj, fullSel, fullAlias) {
        map         = Util.isString(map) ? { alias: map } : (Util.isObject(map) ? map : {});
        $root       = $root || window.document.body;
        obj         = obj || {};
        if (!obj.__root) obj.__root = $root;
        fullSel     = fullSel || [];
        fullAlias   = fullAlias || [];

        function querySelector($parent, sel) {
            if (!sel) return $parent;
            var $targets = Array.prototype.slice.call($parent.querySelectorAll(sel));
            if ($targets.length < 1) {
                return null;
            } else if ($targets.length === 1) {
                return $targets[0];
            } else {
                return $targets;
            }
        }

        if (map.alias) {
            fullAlias = fullAlias.concat(map.alias);
            var aliasProperty = ifJoinAlias ? fullAlias.join(aliasSeparator) : map.alias;
            if (map.lazy) {
                Object.defineProperty(obj, aliasProperty, {
                    get: function () {
                        return querySelector(this.__root, fullSel.join(' '));
                    }
                });
            } else {
                obj[aliasProperty] = querySelector($root, fullSel.join(' '));
            }
        }

        Util.each(map, function (v, sel) {
            if (isKeyword(sel)) return;
            alias(v,
                $root,
                obj,
                fullSel.concat(sel),
                fullAlias
            );
        });

        return obj;
    }

    function lazyDown(map) {
        if (!Util.isObject(map)) return;
        if (map.lazy) {
            Util.each(map, function (v, p) {
                if (isKeyword(p)) return;
                if (Util.isString(v)) {
                    map[p] = {
                        alias: v,
                        lazy: true
                    };
                } else if (Util.isObject(v)) {
                    v.lazy = true;
                }
            });
        }
        Util.each(map, lazyDown);
    }

    lazyDown(map);

    if (notInClass) return alias(map, $el);
    else alias(map, $el, this);
};

/**
 * Bind data to DOM.
 * @param  {Object} ref             [description]
 * @param  {HTMLElement|Alias} $el  [description]
 * @param  {Object} relation        [description]
 * @return {[type]}                 [description]
 */
var Bind = function (ref, $el, relation) {
    if (!Util.isObject(relation)) return false;
    Util.each(relation, function (v, p) {
        // TODO
    });
};

module.exports = {
    util: Util,
    alias: Alias,
    bind: Bind
};
