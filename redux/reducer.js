const initialState = {list:[]};


function reducers (state = initialState, action) {

  switch (action.type) {

    case 'ADD': 
            if (action.info.name && action.info.number && action.info.surname){

                return {  list: [...state.list, action.info ]  };
              }

               else {
                  return {list : [...state.list]}
               }

    case 'CLEAR':
              return {
                list : []
              };        

    default:
              return state;
  }         

}

export default reducers;