const puppeteer = require('puppeteer');

const PATHS = {
    win64:{
        executablePath:"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    }
};

(async () => {
    try {
        console.log('Lanzamos navegador')
        //const browser = await puppeteer.launch()
        const browser = await puppeteer.launch({
            headless:false,
            executablePath: PATHS[process.platform].executablePath,
            defaultViewport:null
        })

        const page = await browser.newPage()
        await page.goto('https://es.wikipedia.ork/wiki/Node.js')

        var titulo1 = await page.evaluate(()=>{
            const h1 = document.querySelector('h1')
            console.log(h1.innerHTML);
            return h1.innerHTML;
        });

        console.log(titulo1)

        console.log('Cerramos navegador')
        //browser.close()
        console.log('Navegador cerrado')
    } catch (error) {
        console.error(`Uy, ha ocurrido un error: ${error}`)
    }
})() //*Esta es una función autoejecutada