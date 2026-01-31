import pool from "../db/db_sql.js"
import 'dotenv/config'

export const getAll= async(req, res)=>{
    try {
        const [result]=await pool.query(process.env.QUERY_ALL)
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const mount= async(req, res)=>{
    try {
        const [result]=await pool.query(process.env.QUERY_GET_MOUNT)
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const setdate= async(req, res)=>{
    try {
        const {mes_anio}=req.body
        const result1= await pool.query(process.env.QUERY_SET_DATE,[mes_anio])
        const result2= await pool.query(process.env.QUERY_GET_ID)
        console.log(result2[0])
        res.status(201).json({ 
            id_presupuesto: result2[0],
            message: "Presupuesto iniciado" 
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const create= async(req, res)=>{
    try {
        const {descripcion,monto,id_presupuesto}=req.body
        console.log(req.body)
        const result=await pool.query(process.env.QUERY_CREATE,[descripcion,parseFloat(monto),id_presupuesto])
        console.log(result)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const update= async(req, res)=>{
    try {
        const{id_item}=req.params
        const {descripcion,monto}=req.body
        const result=await pool.query(process.env.QUERY_PATCH,[descripcion,monto,id_item])
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleted= async(req, res)=>{
    try {
        const {id_item}=req.params
        const result=await pool.query(process.env.QUERY_DELETE,[id_item])
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
