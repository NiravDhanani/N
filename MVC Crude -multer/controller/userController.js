const user = require('../models/UserModel');
const { use } = require('../routes/indexRoutes');
const fs = require('fs')

const view  = async (req,res) =>{
    try{
        const record = await user.find({})
        return res.render('index',{record})
    }catch(err){
        console.log(err);
        return false;
    }
    
}
const form = (req,res) =>{
    return res.render('form')
}

const add = async (req, res) => {
    try {
        const { name, city } = req.body;
        const data = await user.create({
            name,
            city,
            avtar: req.files.map(file => file.path)
        });

        console.log(`data added`);
    
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
};


const deleteData = async (req,res)=>{
    try{
        const id = req.query.id;
        const rec = await user.findById(id);
        rec.avtar.map((item)=>{
            fs.unlinkSync(item);
        })
        const del = await user.findByIdAndDelete(id)
        console.log(`data delete`);
        return res.redirect('back');
    }catch(err){
        console.log(err);
        return false;
    }
}

const editData = async(req,res)=>{
    try{
        const id = req.query.id;
        let  single = await user.findById(id);
       return  res.render('edit', { single });
        
    } catch(err){
        console.log(err);
        return false;
    }
}

const updateData = async (req, res) => {
    try {
//         const { editid, name, city } = req.body;

//         if (req.file) {
//             // If a new file is uploaded, update the avatar path
//             const updatedData = await user.findByIdAndUpdate(editid, {
//                 name: name,
//                 city: city,
//                 avtar: req.file.path  // Assuming req.file contains the new file path
//             });

//             console.log('Data updated');
//             return res.redirect('/');
//         } else {
//             // If no new file is uploaded, keep the existing avatar path
//             const existingData = await user.findById(editid);
//             const updatedData = await user.findByIdAndUpdate(editid, {
//                 name: name,
//                 city: city,
//                 avtar: existingData.avtar
//             });

//             console.log('Data updated');
            // return res.redirect('/');
        // }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};






const deleteImg = async (req, res) => {
    try {
        const id = req.query.id;
        const index = req.query.index;

        const rec = await user.findById(id);

        if (rec && rec.avtar && Array.isArray(rec.avtar) && index >= 0 && index < rec.avtar.length) {
            const deletedImagePath = rec.avtar.splice(index, 1)[0];
            fs.unlinkSync(deletedImagePath);

            await user.findByIdAndUpdate(id, { avtar: rec.avtar });
            console.log('Image deleted');
        }

        return res.redirect('back');
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};





module.exports = {
    view,
    form,
    add,
    deleteData,
    editData,
    updateData,
    deleteImg,



}