//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'slide': 'app'
});
//</debug>

Ext.application({
    name: 'slide',

    /////////////////////////////////////////////////////////////////////////////
    //  App requirements (defined once for all)
    /////////////////////////////////////////////////////////////////////////////

    requires: [
        'Ext.MessageBox'
    ],

    /////////////////////////////////////////////////////////////////////////////
    //  Note that only the top level view is required, being the subviews
    //  defined as required inside the relative files
    /////////////////////////////////////////////////////////////////////////////
    views: ['Wrapper'],

    controllers: ['SlideCtrl'],

    launch: function() {
        var wrapper

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Instanciate main view
        wrapper = Ext.create('slide.view.Wrapper')

        // eventually customize main view
        wrapper.setMenuOpenIcon( 'list' )

        // Initialize the main view
        Ext.Viewport.add( wrapper );
    }
});
