
(function(module) {
	var nbbpath = require('nbbpath');
	var privileges = nbbpath.require('/src/privileges.js');

	privileges.categories.giveGuests = function (cid, callback) {
		async.parallel([
			async.apply(privileges.categories.give, 'find', 'guests'),
			async.apply(privileges.categories.give, 'read', 'guests'),
			async.apply(privileges.categories.give, 'topics:create', 'guests'),
			async.apply(privileges.categories.give, 'topics:reply', 'guests')
		], next);
	};

	privileges.categories.rescindGuests = function (cid, callback) {
		async.parallel([
			async.apply(privileges.categories.rescind, 'find', 'guests'),
			async.apply(privileges.categories.rescind, 'read', 'guests'),
			async.apply(privileges.categories.rescind, 'topics:create', 'guests'),
			async.apply(privileges.categories.rescind, 'topics:reply', 'guests')
		], callback);
	};

	module.exports = Privileges;

}(module));