Ext.define("States.store.RaceStore", {
    extend: "Ext.data.Store",
    alias: 'store.RaceStore',
    config: {
        fields: ['name', 'english', 'french', 'italian', 'panjabi', 'spanish', , 'arabic', 'chinese']
    }
});