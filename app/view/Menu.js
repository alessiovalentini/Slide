Ext.define('slide.view.Menu', {
    extend: 'Ext.List',
    xtype: 'menu',

    config: {

        style: 'position: absolute; top: 0; left: 0; z-index: 1',

        // width: '100%',
        // height: '100%',

        title: 'slider Menu', //You can change it using menu.setTitle('new title');

        width: 250,
        closeAnimDuration: 300,
        openAnimDuration: 300,

        // the list can have item itself (we do not need to declare a parent container in order to contain items at the top of the list and the list itself)
        items: [
            {
                xtype: 'toolbar',
                docked : 'top'
            },
            {
                xtype: 'toolbar',
                docked : 'top'
            }
        ]
    }
});