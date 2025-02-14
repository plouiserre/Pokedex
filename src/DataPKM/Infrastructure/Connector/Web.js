import * as https from 'node:https';

class Web{
    async AppelerPageWeb(){
        var options = {
            hostname:'www.pokepedia.fr',
            port : 443,
            path:'/Liste_des_Pok%C3%A9mon_de_la_premi%C3%A8re_g%C3%A9n%C3%A9ration',
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        const req = https.get(options, function(res){
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
        
            res.on('end', () => {
                console.log(data);
            });
        });
        
        req.on('error', (error) => {
            console.error('Erreur lors de la récupération de la page:', error.message);
        });
        
        req.end();
    }
}

export default Web;