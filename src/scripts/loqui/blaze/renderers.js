Renderers = {};
Renderers['welcome'] = (function () { var self = this; return ["\n        ", HTML.H1(function () { return Spacebars.mustache(self.lookup("_"), "WelcomeTo", Spacebars.dot(self.lookup("app"), "name")); }), "\n      "]; });
Renderers['providers_list'] = (function () { var self = this; return ["\n        ", UI.Each(function () { return Spacebars.call(self.lookup("providers")); }, UI.block((function () { var self = this; return ["\n          ", Spacebars.With(function () { return Spacebars.call(self.lookup("value")); }, UI.block((function () { var self = this; return ["\n            ", HTML.LI(HTML.A({"data-view-section": function () { return Spacebars.mustache(Spacebars.dot(self.lookup(".."), "key")); }}, HTML.IMG({src: ["img/providers/", function () { return Spacebars.mustache(Spacebars.dot(self.lookup(".."), "key")); }, ".svg"]}), function () { return Spacebars.mustache(self.lookup("longName")); })), "\n          "]; }))), "\n        "]; }))), "\n      "]; });
Renderers['account_header'] = (function () { var self = this; return ["\n        ", Spacebars.With(function () { return Spacebars.call(self.lookup("account")); }, UI.block((function () { var self = this; return ["\n        ", HTML.SPAN({"class": "jid", "data-unread": function () { return Spacebars.mustache(self.lookup("othersUnread")); }}, function () { return Spacebars.mustache(Spacebars.dot(self.lookup("core"), "user")); }), "\n        "]; }))), "\n        ", HTML.SELECT("\n        ", UI.Each(function () { return Spacebars.call(self.lookup("accounts")); }, UI.block((function () { var self = this; return ["\n          ", HTML.OPTION({value: function () { return Spacebars.mustache(self.lookup("index")); }}, function () { return Spacebars.mustache(Spacebars.dot(self.lookup("data"), "core", "user")); }, " (", function () { return Spacebars.mustache(Spacebars.dot(self.lookup("data"), "unread")); }, ")"), "\n        "]; }))), "\n        "), "\n      "]; });
Renderers['chats'] = (function () { var self = this; return ["\n      ", UI.Each(function () { return Spacebars.call(self.lookup("accounts")); }, UI.block((function () { var self = this; return ["\n        ", HTML.UL({"data-jid": function () { return Spacebars.mustache(Spacebars.dot(self.lookup("data"), "core", "fullJid")); }}), "\n      "]; }))), "\n      ", HTML.A({"class": "floater", "data-icon": "pencil"}), "\n    "]; });
Renderers['settings_features'] = (function () { var self = this; return ["\n        ", UI.Each(function () { return Spacebars.call(self.lookup("settings")); }, UI.block((function () { var self = this; return ["\n          ", HTML.LI({"data-key": function () { return Spacebars.mustache(self.lookup("key")); }, "data-value": function () { return Spacebars.mustache(self.lookup("value")); }}, "\n            ", HTML.SPAN(function () { return Spacebars.mustache(self.lookup("caption")); }), "\n            ", HTML.DIV({"class": "switch"}, HTML.DIV({"class": "ball"}), HTML.IMG({src: "img/tick.svg", "class": "tick"})), "\n          "), "\n        "]; }))), "\n      "]; });
Renderers['settings_devmode'] = (function () { var self = this; return ["\n        ", UI.Each(function () { return Spacebars.call(self.lookup("settings")); }, UI.block((function () { var self = this; return ["\n          ", HTML.LI({"data-key": function () { return Spacebars.mustache(self.lookup("key")); }, "data-value": function () { return Spacebars.mustache(self.lookup("value")); }}, "\n            ", HTML.SPAN(function () { return Spacebars.mustache(self.lookup("caption")); }), "\n            ", HTML.DIV({"class": "switch"}, HTML.DIV({"class": "ball"}), HTML.IMG({src: "img/tick.svg", "class": "tick"})), "\n          "), "\n        "]; }))), "\n      "]; });
Renderers['account_cover'] = (function () { var self = this; return ["\n          ", Spacebars.With(function () { return Spacebars.call(self.lookup("account")); }, UI.block((function () { var self = this; return ["\n          ", HTML.DIV({"class": "cover", "data-jid": function () { return Spacebars.mustache(Spacebars.dot(self.lookup("core"), "fullJid")); }}, "\n            ", HTML.SPAN({"class": "avatar"}, HTML.IMG()), "\n            ", HTML.SPAN({"class": "provider"}, function () { return Spacebars.mustache(Spacebars.dot(self.lookup("connector"), "provider", "longName")); }), "\n            ", HTML.SPAN({"class": "jid"}, function () { return Spacebars.mustache(Spacebars.dot(self.lookup("core"), "user")); }), "\n            ", HTML.A({"class": "settings icon cog"}), "\n          "), "\n          "]; }))), "\n        "]; });
Renderers['accounts_list'] = (function () { var self = this; return ["\n          ", UI.Each(function () { return Spacebars.call(self.lookup("accounts")); }, UI.block((function () { var self = this; return ["\n            ", HTML.LI({"data-account-index": function () { return Spacebars.mustache(self.lookup("index")); }, "data-value": function () { return Spacebars.mustache(self.lookup("enabled")); }, "data-unread": function () { return Spacebars.mustache(Spacebars.dot(self.lookup("data"), "unread")); }}, "\n              ", HTML.IMG({"class": "provider", src: ["img/providers/", function () { return Spacebars.mustache(Spacebars.dot(self.lookup("data"), "core", "provider")); }, ".svg"]}), "\n              ", HTML.SPAN(function () { return Spacebars.mustache(Spacebars.dot(self.lookup("data"), "core", "user")); }), "\n              ", HTML.DIV({"class": "switch"}, HTML.DIV({"class": "ball"}), HTML.IMG({"class": "tick", src: "img/tick.svg"})), "\n            "), "\n          "]; }))), "\n        "]; });
Renderers['providers_setup'] = (function () { var self = this; return ["\n    ", UI.Each(function () { return Spacebars.call(self.lookup("providers")); }, UI.block((function () { var self = this; return ["\n    ", HTML.SECTION({id: function () { return Spacebars.mustache(self.lookup("key")); }, "class": "setup", "data-transition": "horizontal"}, "\n      ", function () { return Spacebars.makeRaw(Spacebars.mustache(self.lookup("form"), self.lookup("key"))); }, "\n    "), "\n    "]; }))), "\n  "]; });
