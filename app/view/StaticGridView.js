Ext.define('ScrollIssue.view.StaticGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.staticGrid',
    store: 'StaticStore',
    
    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Email Address', dataIndex: 'email', flex: 1},
    ],
    
    initComponent: function() {
        this.callParent(arguments);
    },
});
