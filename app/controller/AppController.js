Ext.define('ScrollIssue.controller.AppController', {
    extend: 'Ext.app.Controller',
    init: function() {
	        console.log("Initialized Controller");
    },

    stores: [
         'StaticStore', 'BufferedStore',
    ],
    models: [
        'Model'
    ],
    views : [
        'StaticGridView', 'BufferedGridView',
    ],
});
