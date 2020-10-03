export const TOGGLE_FAVORITES='TOGGLE_FAVORITES';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorites=(id)=>{
    return{
        type:TOGGLE_FAVORITES,
        mealId:id
    };
};

export const setFilters= filterSetting =>{
    return{
        type:SET_FILTERS,
        filters: filterSetting
    }
};