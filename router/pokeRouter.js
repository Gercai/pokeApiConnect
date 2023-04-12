import { Router } from 'express';
import axios from 'axios';

const pokeRouter = Router();

pokeRouter.get("/:pokemon", async (req,res,next) => {
    
    const {pokemon} = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        res.json(response.data);
    }
    catch(err){
        next(err)
    }
})

// pokeRouter.get("/:pokemon", async (req,res,next) => {
    
//     const {pokemon} = req.params;
//     try {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//         res.json(response.data);
//     }
//     catch(err){
//         next(err)
//     }
// })

export default pokeRouter;