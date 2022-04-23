import { defineStore } from "pinia";
import axios from 'axios';

export const useMainStore = defineStore('main',{
    state : ()=>{
        return {
            jokeResponse : undefined,
            jokeError : undefined
        }
    },
    actions : {
        getJoke(){
            axios.request({
                url : "https://geek-jokes.sameerkumar.website/api",
                method : "GET"
            }).then((response)=>{
                this.jokeResponse = response.data;
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    getters: {
        jokeText : state =>{
            if(state.jokeResponse){
                return state.jokeResponse;
            }
            return undefined;
        }
    }
})