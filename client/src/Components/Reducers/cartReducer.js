import Item1 from '../../images/car1.png'
import Item2 from '../../images/car2.png'
import Item3 from '../../images/car3.png'
import Item4 from '../../images/car4.png'
import Item5 from '../../images/car5.png'
import Item6 from '../../images/car6.png'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Go Wash KC (most popular)', desc: "Your car will thank you for maintaining it’s clean feel with a hand wash and interior vacuum.Estimated work time: 25 minutes.", price:50, img:Item1
        // <href>https://content.autotrader.com/content/dam/autotrader/articles/Cars/Honda/Accord/2019/2019HondaAccord/2019%20Honda%20Accord%20(1).jpg
        // </href>
        },

        {id:2,title:'KC Bling', desc: "Your car will shine in the sun or sparkle under the city lights as the clear coat protectant gleams and your wheels spin. Your car will be more than good enough with glossy tires.Estimated work time: 30 minutes.", price:60,img: Item2
        // <href>https://inventory-dmg.assets-cdk.com/5/7/2/19861314275x640.jpg</href>
        },
        
        {id:3,title:'Simply Smooth', desc: "Give your car that extra love with chrome treatment to all it’s accents to make the bling supreme. Estimated work time: 40 minutes",price:75,img: Item3
        // https://79c20c4e50d0527a32ab-2367280bca332f2720c4975704e861e1.ssl.cf1.rackcdn.com/3C4PDCBB3KT719154/0240dd91e2e0b266c3cb6627c6d5bd4e.jpg
        },

        {id:4,title:'Dress to Impress', desc: "Bring your car to like-new condition with a hand wash, chrome accent treatment, tire shine treatment, and protectant treatments to all interior components with a full vacuum. Estimated work time: 60 minutes.", 
        price:100,img:Item4
        // https://inventory-dmg.assets-cdk.com/3/8/6/20041049683x640.jpg
        },

        {id:5,title:'KC Drip', desc: "Be ready for the showroom floor. Your car will get a full hand wash and wax. All your chrome will bling as your wheels drip with the fresh wet look. The inside will be super clean and you will love the way everything feels. Estimated work time: 120 minutes.", price:200,img: Item5
        // https://cdn-ds.com/stock/2019-Porsche-Panamera-Turbo-Merriam-KS/seo/VAMP20932C-WP0AF2A78KL145282/sz_51315/w_160/h_120/89a026244a1bc7ea5e1cd902a0ce3ef7.jpg
        },

        {id:6,title:'The Boss', desc: "Everything will shine. Everything is clean. Good luck finding dirt. (Satisfaction guaranteed, we don’t leave until you are happy.) Estimated work time: 180 minutes.",price:500,img: Item6
        // http://www.hdcarwallpapers.com/walls/bugatti_chiron_sport_110_ans_bugatti_2019_4k_2-HD.jpg
        }
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
    }
    
    if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 6
      }
    }
    
    else{
    return state
    }
}

export default cartReducer
