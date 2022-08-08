import { isValidDateValue } from "@testing-library/user-event/dist/utils"

export const reducer = (state,action)=>{
    switch(action.type){
        case "clearAll":
            return {
                ...state,
                cart:[]
            };
        case "remove":
        return{
            ...state,
            cart:state.cart.filter((item)=>item.id!==action.payload)
        }
        case "increase":
            let tempInc=state.cart.map((item)=>item.id==action.payload ? {...item,amount:item.amount+1} : item)
            return{
                ...state,
                cart:tempInc,
            }
        case "decrease":
            let tempDec=state.cart.map((item)=>item.id==action.payload ? {...item,amount:item.amount-1} : item).filter((item)=>item.amount!==0)
            return{
                ...state,
                cart:tempDec,
            }
        case "get_total":
            let {total,amount}=state.cart.reduce((sum,item)=>{
            const {price,amount}=item;
            const itemTotal=price*amount;
            sum.amount+=amount;
            sum.total+=itemTotal;
            return sum
            },{
                total:0,
                amount:0
            })
            total=+(total.toFixed(2))
            return{
                ...state,total,amount
            }
        default:
            return state
}
}