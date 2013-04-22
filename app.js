//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'slide': 'app'
});
//</debug>

Ext.application({
    name: 'slide',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Wrapper'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('slide.view.Wrapper'));
    }
});
