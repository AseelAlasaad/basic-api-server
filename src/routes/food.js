'use strict';

const express=require('express');
const {food}=require('../models/index');
const foodRouter=express.Router();

foodRouter.get('/food',getfood);
foodRouter.get('/food/:id',onefood);
foodRouter.post('/food',createfood);
foodRouter.put('/food/:id',updatefood);
foodRouter.delete('/food/:id',deletefood);

async function getfood(req,res){
    const allfood=await food.findAll();
    res.status(200).json(allfood);
}


async function onefood(req,res){
    const id=parseInt(req.params.id);
    const oneGetfood=await food.findOne({
        where:{
            id:id
        }
    }); 
    res.status(200).json(oneGetfood);
}


async function createfood(req,res){
    const obj=req.body;
    let newfood=await food.create(obj);
    res.status(200).json(newfood);
}

async function updatefood(req,res){
    const id = parseInt(req.params.id);
    const obj=req.body;
    const foundfood=await food.findOne({ where: { id: id } });

    const updateOnefood=await foundfood.update(obj);
    res.status(201).json(updateOnefood);
}

async function deletefood(req,res){
    const id = parseInt(req.params.id);
    const deleteonefood=await food.destroy({ where: { id } });
    res.status(204).json(deleteonefood);
}

module.exports=foodRouter;






