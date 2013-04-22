Ext.define('slide.controller.SlideCtrl', {
    extend: 'Ext.app.Controller',

    /////////////////////////////////////////////////////////////////////////////
    //  Require elements for this class (otherwise require them at app.js level)
    /////////////////////////////////////////////////////////////////////////////

    requires: [
    	'slide.view.Main',
    	'slide.view.Menu'
    ],

    config: {

        refs: {
    		main : 'Main',
    		menu : 'Menu',
            mainWrapper : 'MainContent',
            menuButton  : 'button[action=openMenu]'
    	},

    	control: {
            menuButton : {
    			tap : 'onOpenMenuButtonTapped'
    		},

    		menu : {
                itemtap : 'onMenuOptionTapped',
                init    : 'onInitMenu'
    		},

            main: {
                tap : 'onMainTapped'    // closes the menu when tapping on main container (this shouldn't be needed because the view is closed when tapping the list item)
            },

            mainWrapper: {
                tap : 'onMainTapped'
            }
    	}
    },

    /////////////////////////////////////////////////////////
    //  Init
    /////////////////////////////////////////////////////////

    onInitMenu : function (){
        // ...
    },

    /////////////////////////////////////////////////////////
    //  Methods
    /////////////////////////////////////////////////////////

    /**
     * When the main menu is tapped (only when it's masked -> menu is open)
     * we close slider menu
     */
    onMainTapped: function(){
        var main = this.getMain();
        var menu = this.getMenu();

        main.closeMenu(menu.getCloseAnimDuration());
    },

    /**
     * Fires when open menu button is tapped
     */
    onOpenMenuButtonTapped: function(){
    	var main = this.getMain();
        var menu = this.getMenu();

        if (main.isClosed()) {
            main.openMenu(menu.getOpenAnimDuration());
        } else {
            main.closeMenu(menu.getCloseAnimDuration());
        }
    }
});