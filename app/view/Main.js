Ext.define('slide.view.Main', {
    extend: 'Ext.Container',
    xtype: 'Main',

    /////////////////////////////////////////////////////////////////////////////
    //  Require elements for this class (otherwise require them at app.js level)
    /////////////////////////////////////////////////////////////////////////////

    requires : [
        'slide.view.MainContent'
    ],

    config: {

        /////////////////////////////////////////////////////////
        //  My parameters | values are default
        /////////////////////////////////////////////////////////

        menuWidth    : 250,
        mainTitles   : 'Management Portal',
        openMenuIcon : 'list',                         // pico image

        /////////////////////////////////////////////////////////
        //  Sencha parameters
        /////////////////////////////////////////////////////////

        width  : '100%',
        height : '100%',
        style  : 'position: absolute; opacity: 1; z-index: 5',
        layout : 'card',

        draggable : {
            direction : 'horizontal'
        },

        /////////////////////////////////////////////////////////
        //  Sencha items
        /////////////////////////////////////////////////////////

        items: [

            // top static items (top bar with title and menu button)
            {
                xtype : 'toolbar',
                docked: 'top',
                title : null,

                items : [
                    {
                        xtype    : 'button',
                        action   : 'openMenu',
                        iconMask : true,
                        iconCls  : null, // By default is more icon | set from the slidecontainer
                        align    : 'left'
                    }
                ]
            },

            // actual content
            {
                xtype: 'MainContent'
            }
        ]
    },

    /////////////////////////////////////////////////////////
    //  Init
    /////////////////////////////////////////////////////////

    initialize : function() {
        this.setMainTitle( this.getMainTitles() )    // init with my title property
        this.setMenuOpenIcon( this.getOpenMenuIcon() )
    },

    /////////////////////////////////////////////////////////
    //  Methods
    /////////////////////////////////////////////////////////

    closeMenu: function(duration) {
        if(!Ext.isNumber(duration)) return false;

        this.swapMenu(0, duration, false); // offset to 0 => close menu
        return true;
    },

    openMenu: function(duration) {
        if(!Ext.isNumber(duration)) return false;

        this.swapMenu(this.getMenuWidth(), duration, true);
        this.addCls('open');    // if you want to append css conditional style
        return true;
    },

    swapMenu: function(offsetX, duration, masked){
        var constraint = this.getDraggable().getConstraint();
        constraint.min.x = offsetX;
        constraint.max.x = offsetX;
        this.slideMenu(offsetX, duration);

        // add mask to the main
        if(masked){
            this.setMasked({
                xtype: 'mask',
                listeners: {
                    tap: function(){
                        this.parent.fireEvent('tap');
                    }
                }
            })
        }else{
            this.setMasked(false);
        }
     },

    /**
     * slides the menu changing offset to 'x' with an slide animation of
     * 'duration' ms.
     *
     * @param {Integer} x: Value of the new offset.x
     * @param {Integer} duration: Value of the animation duration effect.
     */
    slideMenu: function(x, duration) {
        if(!Ext.isNumber(x) || !Ext.isNumber(duration)) return false;

        var draggable = this.getDraggable();

        draggable.setOffset(x, 0, {
            duration: duration
        });

        return true;
    },

    setMainTitle : function (title) {
        this.items.items[0].setTitle( title )
    },

    setMenuOpenIcon : function (pictoName) {
        this.items.items[0].items.items[0].setIconCls(pictoName)
    },

    isClosed: function() {
        return (this.getDraggable().offset.x == 0);
    }
});