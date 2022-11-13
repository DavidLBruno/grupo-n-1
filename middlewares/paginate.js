
async function getPaginatedData(req, db) {    
    let page = +req.query.page;
    if(isNaN(page) || page < 1){
        return null;
    }
    page=page-1
   
    const originalUrl = req.originalUrl;
    const urlBase = originalUrl.slice(0, originalUrl.indexOf("?"));
    const offset= page*10;
    const usuarios = await db.count();
    
    let nextPage = `${urlBase}?page=${page+2}`;
    let prevPage= `${urlBase}?page=${page}`;

    if(page == 0){
        prevPage = "No hay paguina anterior para mostrar"
    }

    let list = await db.findAll({limit: 10 ,offset:offset})

    if(offset+10 > usuarios){
        nextPage="No hay paguina siguiente"
    }   
    return {list, nextPage, prevPage}
};

module.exports = { getPaginatedData }