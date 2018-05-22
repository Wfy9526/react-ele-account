export default class common {
    static getDataByAjax(url) {
        return new Promise((resolve, reject) => {
            const xml = new XMLHttpRequest();
            xml.open('Get', url, true);
            xml.send();
            xml.onreadystatechange = function () {
                if(xml.readyState === 4){
                    if(xml.status === 200){
                        resolve(xml.responseText)
                    }else{
                        reject({error: 'error'})
                    }
                }
            }
        })

    }
}