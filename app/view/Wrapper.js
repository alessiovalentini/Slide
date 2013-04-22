Ext.define('slide.view.Wrapper', {
    extend: 'Ext.Container',

    requires: [
        'slide.view.Menu',
        'slide.view.Main'
    ],

    config: {
        items: [
            {
                xtype: 'menu'
            },
            {
                xtype: 'main'
            }
        ]
    }
});
