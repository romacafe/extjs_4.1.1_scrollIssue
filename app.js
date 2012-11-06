Ext.application({
    name: 'ScrollIssue',
    appFolder: './app',
    controllers: [
           'AppController'
    ],
    
    launch: function() {
       var windowHeight = Ext.get(document).dom.height;
        windowHeight -= 50; //the height of the banner div

       Ext.create('Ext.container.Container', {
            renderTo: 'application',
            height: windowHeight,
            layout: 'border',
            bodyBorder: true,
            defaults: {
                bodyPadding: 5
            },
            items: [{
                title: 'Filters',
                region:'north',
                floatable: false,
                margins: '5 0 0 0',
                height: 150,
                minHeight: 150,
                maxHeight: 150,
                collapsible: true,
                collapsed: true,
				html: 'filters would go here',
            },{
                title: 'Main Content',
                region: 'center',
                margins: '5 0 0 0',
                items: [
                    Ext.widget(
                        'tabpanel', {
                            activeTab: 0,
                            plain: true,
                            defaults: {bodyPadding: 10},
                            items: [
	                            {
	                                title: "Static",
									xtype: 'staticGrid',
	                            },
                                {
                                    title: "Buffered",
									xtype: "bufferedGrid",
                                },
                            ]
                        }
                    )
                ]
            },{
                title: 'Detail',
                region: 'south',
                height: 150,
                minHeight: 100,
                maxHeight: 250,
                html: 'Detail Panels',
                collapsible: true,
            }]
            
        });
    }
});
