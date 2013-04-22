Ext.define('slide.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    config: {

        width: '100%',
        height: '100%',

        style: 'position: absolute; opacity: 1; z-index: 5',
        layout: 'card',

        menuWidth: 250,

        draggable:{
            direction: 'horizontal'
            // constraint: { //By default slider menu is closed
            //     min: {x: 0, y: 0},
            //     max: {x: 0, y: 0}
            // }
        },

        items: [

            // top static items
            {
                xtype : 'toolbar',
                docked: 'top',
                title : 'Client Management Portal',

                items : [
                    {
                        xtype : 'button',
                        action: 'openMenu',
                        iconMask: true,
                        iconCls:  'list', // By default is more icon | set from the slidecontainer
                        align: 'left'
                    }
                ]
            },

            //actual content loaded dynamically => if possible keep this container (it hides the menu below) and put the content inside
            {
                xtype: 'panel',
                html : 'hallo'
            }
        ]
    },

    isClosed: function() {
        return (this.getDraggable().offset.x == 0);
    },

    /**
     * Closes the slide menu.
     *
     * @param {Ext.Number} duration: Animation duration
     * @return {Ext.Boolean} false: duration is not valid
     *                       true: otherwise
     */
    closeMenu: function(duration) {
        if(!Ext.isNumber(duration)) return false;

        this.swapMenu(0, duration, false); //Sets offset to 0 (close menu)
        return true;
    },

    /**
     * Opens the slide menu.
     *
     * @param {Ext.Number} duration: Animation duration
     * @return {Ext.Boolean} false: duration is not valid
     *                       true: otherwise
     */
    openMenu: function(duration) {
        if(!Ext.isNumber(duration)) return false;

        this.swapMenu(this.getMenuWidth(), duration, true); //Sets offset to 250 (open menu)
        // this.addCls('open');
        return true;
    },

    /**
     *  Swap slide menu (From open to close or from close to open).
     */
     swapMenu: function(offsetX, duration, masked){
        var constraint = this.getDraggable().getConstraint();
        constraint.min.x = offsetX;
        constraint.max.x = offsetX;
        this.slideMenu(offsetX, duration);

        // if(masked){
        //     //open menu -> create a special mask to detects tap events
        //     this.setMasked({
        //         xtype: 'mask',
        //         listeners: {
        //             tap: function(){
        //                 //Main (this.parent) fires a tap event only when the main is wrapped
        //                 this.parent.fireEvent('tap');
        //             }
        //         }
        //     })
        // }else{
        //     this.setMasked(false);
        // }
     },

    /**
     * slides the menu changing offset to 'x' with an slide animation of
     * 'duration' ms.
     * If value of 'x' or 'duration' is undefined -> return false
     *
     * @param {Integer} x: Value of the new offset.x
     * @param {Integer} duration: Value of the animation duration effect.
     *
     * @return {Boolean} If value of 'x' or 'duration' is undefined then return false
     *                   otherwise return true.
     */
    slideMenu: function(x, duration) {
        if(!Ext.isNumber(x) || !Ext.isNumber(duration)) return false;

        var draggable = this.getDraggable();

        draggable.setOffset(x, 0, {
            duration: duration
        });

        return true;
    }
});