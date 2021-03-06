Ext.define('slide.view.Wrapper', {
    extend: 'Ext.Container',

    /////////////////////////////////////////////////////////////////////////////
    //  Require elements for this class (otherwise require them at app.js level)
    /////////////////////////////////////////////////////////////////////////////

    requires: [
        'slide.view.Menu',
        'slide.view.Main'
    ],

    config: {

        /////////////////////////////////////////////////////////////////////////////
        //  Items are a Menu and a Main content
        /////////////////////////////////////////////////////////////////////////////

        items: [
            {
                xtype: 'Menu'
            },
            {
                xtype: 'Main'
            }
        ]
    },

    /////////////////////////////////////////////////////////////////////////////
    //  Public customizations (my vars) --- this is an example
    /////////////////////////////////////////////////////////////////////////////
    setMenuOpenIcon : function ( pictoClass ) {
        var main = this._getMain()

        main.setMenuOpenIcon( pictoClass )
    },

    /////////////////////////////////////////////////////////////////////////////
    //  Private - Service
    /////////////////////////////////////////////////////////////////////////////
    _getMain : function () {
        return this.items.items[1]
    }
});
