const indexPage = (req,res) => {
    return res.render('index');
}

const aboutPage = (req,res) => {
    return res.render('about');
}

module.exports = {
    indexPage,
    aboutPage,
}