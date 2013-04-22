Ext.define('slide.view.Menu', {
    extend: 'Ext.List', // NOTE here the menu is a list. the menu can be everything
    xtype: 'Menu',

    config: {

        /////////////////////////////////////////////////////////
        //  My parameters | values are default
        /////////////////////////////////////////////////////////

        title : 'Menu',

        /////////////////////////////////////////////////////////
        //  Sencha parameters
        /////////////////////////////////////////////////////////

        style : 'position: absolute; top: 0; left: 0; z-index: 1',
        width : 250,

        closeAnimDuration : 300,
        openAnimDuration  : 300,

        /////////////////////////////////////////////////////////
        //  Sencha items
        /////////////////////////////////////////////////////////

        // NOTE: the list can have item itself
        // (we do not need to declare a parent container in order to contain items at the top of the list and the list itself)
        items: [
            {
                xtype: 'toolbar',
                docked : 'top'
            }
        ]
    },

    /////////////////////////////////////////////////////////
    //  Init
    /////////////////////////////////////////////////////////

    initialize : function() {
        this.setMenuTitle( this.getTitle() )    // init with my title property
    },

    /////////////////////////////////////////////////////////
    //  Methods
    /////////////////////////////////////////////////////////

    setMenuTitle : function ( title ) {
        this.items.items[0].setTitle( title )
    }
});