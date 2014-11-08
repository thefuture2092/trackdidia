 /**
 * @author Thefuture2092
 *
 */

 "use strict";

define(function(){

	function Task(task_data) {
		this.id = task_data.id;
		this.name = task_data.name;
		this.description = task_data.description;
		this.location = task_data.location;
		this.priority = task_data.priority;
	};

	Task.prototype = {
		constructor : Task,
	}

	return Task;
})