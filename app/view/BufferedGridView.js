Ext.define('ScrollIssue.view.BufferedGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bufferedGrid',
    store: 'BufferedStore',
    
    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Email Address', dataIndex: 'email', flex: 1},
    ],

	verticalScroller: {
	    trailingBufferZone: 50,
	    leadingBufferZone: 150,
	    numFromEdge: 5,
	},
    
    initComponent: function() {
        this.callParent(arguments);
    },
});
