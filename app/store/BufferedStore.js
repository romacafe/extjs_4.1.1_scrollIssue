Ext.define('ScrollIssue.store.BufferedStore', {
    extend: 'Ext.data.Store',
    model: 'ScrollIssue.model.Model',
    autoLoad: true,

    buffered: true,
    pageSize: 100,

    data: [
        {name: 'Person1', email: 'email1@example.com'},
        {name: 'Person2', email: 'email2@example.com'},
        {name: 'Person3', email: 'email3@example.com'},
        {name: 'Person4', email: 'email4@example.com'},
        {name: 'Person5', email: 'email5@example.com'},
        {name: 'Person6', email: 'email6@example.com'},
        {name: 'Person7', email: 'email7@example.com'},
        {name: 'Person8', email: 'email8@example.com'},
        {name: 'Person9', email: 'email9@example.com'},
        {name: 'Person10', email: 'email10@example.com'},
        {name: 'Person11', email: 'email11@example.com'},
        {name: 'Person12', email: 'email12@example.com'},
        {name: 'Person13', email: 'email13@example.com'},
        {name: 'Person14', email: 'email14@example.com'},
        {name: 'Person15', email: 'email15@example.com'},
        {name: 'Person16', email: 'email16@example.com'},
        {name: 'Person17', email: 'email17@example.com'},
        {name: 'Person18', email: 'email18@example.com'},
        {name: 'Person19', email: 'email19@example.com'},
        {name: 'Person20', email: 'email20@example.com'},
        {name: 'Person21', email: 'email21@example.com'},
        {name: 'Person22', email: 'email22@example.com'},
        {name: 'Person23', email: 'email23@example.com'},
        {name: 'Person24', email: 'email24@example.com'},
        {name: 'Person25', email: 'email25@example.com'},
        {name: 'Person26', email: 'email26@example.com'},
        {name: 'Person27', email: 'email27@example.com'},
        {name: 'Person28', email: 'email28@example.com'},
        {name: 'Person29', email: 'email29@example.com'},
        {name: 'Person30', email: 'email20@example.com'},
        {name: 'Person31', email: 'email31@example.com'},
    	{name: 'Person32', email: 'email32@example.com'},
	],
});
