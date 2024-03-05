const axios = require('axios')

const apicalling = async (req,res) =>{
  try{
    let {data} = await axios.get('https://decoraevnt.online/api/category?providedPassword=Decora957438')
    return res.render('api',{
      data
  })
  }catch(err){
    console.log(err);
  }
}

const themesdata = async (req,res) =>{
  let {data} = await axios.get('https://decoraevnt.online/api/category?providedPassword=Decora957438')
  let result = []
  let newid = req.query.id;
  let alldata = data.map((val)=>{
    let newthemes = val.themes.map((item)=>{
      if(item.categoryId == newid){
        result.push(item);
      }
    })
  })
  return res.render('themesdata',{
    result
  })
  }
module.exports = {
  apicalling,
  themesdata
}