import React, {useState,useEffect} from 'react'
import '../css/ItemListContainer.css'
import '../css/ItemList.css'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


const items =[
    {id:1, categoria:'periferico',image:'../assets/itemImg/periferico1.png',titulo:'TECLADO + MOUSE SHENLONG C2001',descripcion:'Combo teclado y mouse. Teclado: Idioma: Espanol. Teclas: 105. Funcion antighosting. Cable: 1.5 Mtrs. Retroiluminacion: Rainbow. Mouse: Sensibilidad: Ajustable 800 - 1600 - 2400 - 3200 Dpi. Botones: 7. Sensor: NST5312. Retroiluminacion: RGB. Cable: 1,5mtrs.',precio:'$3399'},
    {id:2, categoria:'periferico',image:'../assets/itemImg/periferico2.png',titulo:'COMBO GAMER MARVO CM409',descripcion:'Combo gamer. MOUSE: Optico. DPI: 800-1600-2400-3200. Botones: 6. Luz de fondo: 7 colores. Longuitud de cablke: 1.5 Mts. TECLADO: USB. Longuitud del cable 1.5 Mts. Luz RGB. AURICULAR: Sonido estereo. Tamano de drive: 40mm. Tipo de microfono: Omnidireccional. Longuitud del cable: 1.8 Mts. MOUSE PAD: Diseno anti-sudor. Base de goma antideslizante.',precio:'$4729'},
    {id:3,categoria:'placamadre', image:'../assets/itemImg/placamadre1.png',titulo:'ASUS ROG MAXIMUS XIII HERO ATX LGA 1200 Gaming Motherboard',descripcion:'Aproveche la potencia de los procesadores Intel de 11.ª generación con la placa base para juegos ROG MAXIMUS XIII HERO ATX LGA 1200 de ASUS. Esta placa fácil de usar funciona a la perfección con los procesadores Intel Core de 11.ª generación, lo que le brinda la capacidad de utilizar la funcionalidad PCIe 4.0 para ranuras de expansión, así como interfaces de almacenamiento M.2. Aumento de las velocidades,',precio:'45000'},
    {id:4,categoria:'placamadre', image:'../assets/itemImg/placamadre2.png',titulo:'ASUS Republic of Gamers Maximus Z690 Extreme LGA 1700 E-ATX Motherboard',descripcion:'Lleva tus experiencias de juego y creación de contenido al máximo y más allá con la placa base ASUS ROG Maximus Z690 Extreme LGA 1700 E-ATX que sirve como una base poderosa para la construcción de tu computadora de escritorio. Compatible con procesadores de zócalo Intel LGA 1700 de 12ª generación y el chipset Intel Z690, que aprovecha el gran PCIe 5.0',precio:'$120000'},
    {id:5,categoria:'monitor', image:'../assets/itemImg/monitor1.png',titulo:'Monitor Curvo Gamer 27 Gigabyte G27fc 165hz 1ms Mexx 1',descripcion:'- Marca : Gigabyte    Modelo : G27FC - P/N : G27FC-SA- UPC : 00889523020784  Color : Negro  - Tamaño de panel : 27"  - Curvo/Plano : Curvo   - Colores : 16.7M   - Tipo de panel : VA    - Resolución : 1920 x 1080    - Brillo(Max) : 2?50 cd/m2 (TYP)    - Ángulo de vision : 178 grados / 178 grados    - Parlantes : 2W x2    - Conectividad : 2 HDMI 2.0, 1 Disp',precio:'$92000'},
    {id:6,categoria:'monitor', image:'../assets/itemImg/monitor2.png',titulo:'Monitor gamer Samsung F24T35 led 24 " azul y gris oscuro 100V/240V',descripcion:'Una experiencia visual de calidad.    Este monitor de 24" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos',precio:'$45000'},
]
export const ItemListContainer =({greeting}) => {
    
    const [data,setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(items)
            },2000);
        });
        getData.then(res => setData(res))

    },[])

    const onAdd = (quantity) =>{
        console.log(`compraste ${quantity} unidades`);
        console.log('se enviara al carrito')
        
    }

    return(
        <>
        
        <div className='greeting-banner'>
            <h3 className='greeting-h3'>Hola {greeting}</h3>
            <hr className='greeting-hr' />
            <p className='greeting-p'>
                Listo para realizar una compra?!
            </p>
            <div>
            
            <ItemCount initial={1} stockItem={10} onAdd={onAdd}/>
            <div className='item-list'>
            <ItemList  data={data}/> 
            </div>
            
            </div>
        </div>
        
        
        </>
    )
}



